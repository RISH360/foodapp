import express from "express";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

const file = path.join(__dirname, "db.json");
const adapter = new JSONFile(file);
const db = new Low(adapter, { users: [] });

async function initDB() {
    await db.read();
    db.data ||= { users: [] };
    await db.write();
}
initDB();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "frontend", "public", "static")));


// 👇 Your existing routes (signup, login, etc.) can be copied here unchanged,
// just make sure the entire file uses `import` syntax instead of `require()`

// Signup Route
app.post("/signup", async (req, res) => {
    const { firstName, lastName, nickName, email, mobile } = req.body;

    if (!firstName || !lastName || !nickName || !email || !mobile) {
        return res.status(400).send("All fields are required");
    }

    await db.read();

    // Normalize values
    const normalizedEmail = email.trim().toLowerCase();
    const normalizedMobile = mobile.trim().replace(/^0+/, "");

    const emailExists = db.data.users.find(
        u => u.email?.trim().toLowerCase() === normalizedEmail
    );

    const mobileExists = db.data.users.find(
        u => u.mobile?.trim().replace(/^0+/, "") === normalizedMobile
    );

    if (emailExists) {
        return res.status(409).send("Email is already registered");
    }

    if (mobileExists) {
        return res.status(409).send("Mobile number is already registered");
    }

    db.data.users.push({
        firstName,
        lastName,
        nickName,
        email: normalizedEmail,
        mobile: normalizedMobile
    });
    await db.write();

    res.status(200).send("User data saved");
});

// Confirm Password Route
app.post("/confirm-password", async (req, res) => {
    const { password } = req.body;

    if (!password) return res.status(400).send("Password is required");

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.read();
    const users = db.data.users;
    if (users.length === 0) return res.status(400).send("No user found");

    users[users.length - 1].password = hashedPassword;
    await db.write();

    res.status(200).send("Password saved");
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send("Email or mobile and password are required");
    }

    await db.read();

    const normalizedInput = email.trim().toLowerCase();
    const user = db.data.users.find(u =>
        u.email?.trim().toLowerCase() === normalizedInput ||
        u.mobile?.trim() === normalizedInput
    );

    if (!user || !user.password) {
        return res.status(401).send("Invalid email/mobile or password");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        return res.status(401).send("Invalid email/mobile or password");
    }

    return res.status(200).json({
        nickName: user.nickName,
        email: user.email,
        mobile: user.mobile
    });
});


app.post("/verify-user", async (req, res) => {
    let { email, mobile } = req.body;

    // Normalize input
    email = email?.trim().toLowerCase();
    mobile = mobile?.trim().replace(/^0+/, ""); // Remove leading 0s

    await db.read();

    const user = db.data.users.find(u => {
        const dbEmail = u.email?.trim().toLowerCase();
        const dbMobile = u.mobile?.trim().replace(/^0+/, "");
        return dbEmail === email || dbMobile === mobile;
    });

    if (!user) {
        return res.status(404).send("User not found");
    }

    res.status(200).send("User verified");
});


app.post("/reset-password", async (req, res) => {
    const { email, mobile, newPassword } = req.body;

    if (!newPassword) return res.status(400).send("Password is required");

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await db.read();
    const user = db.data.users.find(
        (u) => u.email === email || u.mobile === mobile
    );

    if (!user) return res.status(404).send("User not found");

    user.password = hashedPassword;
    await db.write();

    res.status(200).send("Password updated successfully");
});

app.post("/update-nickname", async (req, res) => {
    const { email, newNickname } = req.body;

    if (!email || !newNickname) {
        return res.status(400).send("Invalid data");
    }

    await db.read(); // Read latest data
    const user = db.data.users.find(u => u.email === email);

    if (!user) {
        return res.status(404).send("User not found");
    }

    user.nickName = newNickname;
    await db.write(); // Save changes to db.json

    res.send("Nickname updated successfully");
});

app.post("/update-email", async (req, res) => {
    const { oldEmail, newEmail } = req.body;

    if (!oldEmail || !newEmail) {
        return res.status(400).send("Old and new email required");
    }

    await db.read();

    const normalizedOld = oldEmail.trim().toLowerCase();
    const normalizedNew = newEmail.trim().toLowerCase();

    console.log("Old email (from client):", normalizedOld);
    console.log("All emails in DB:", db.data.users.map(u => u.email.trim().toLowerCase()));

    const user = db.data.users.find(u =>
        u.email?.trim().toLowerCase() === normalizedOld
    );

    if (!user) {
        return res.status(404).send("User not found");
    }

    // Prevent duplicate email
    const exists = db.data.users.find(u =>
        u.email?.trim().toLowerCase() === normalizedNew
    );
    if (exists) {
        return res.status(409).send("New email already exists");
    }

    user.email = normalizedNew;
    await db.write();

    res.status(200).send("Email updated successfully");
});

app.post("/update-mobile", async (req, res) => {
    const { email, newMobile } = req.body;

    if (!email || !newMobile) {
        return res.status(400).send("Email and new mobile are required");
    }

    await db.read();

    const user = db.data.users.find(
        u => u.email?.trim().toLowerCase() === email.trim().toLowerCase()
    );

    if (!user) {
        return res.status(404).send("User not found");
    }

    // Check if number already exists
    const mobileExists = db.data.users.find(
        u => u.mobile === newMobile && u.email !== email
    );

    if (mobileExists) {
        return res.status(409).send("New number is already in use");
    }

    user.mobile = newMobile;
    await db.write();

    res.status(200).send("Mobile number updated successfully");
});

app.post("/delete-account", async (req, res) => {
    const { email } = req.body;

    if (!email) return res.status(400).send("Email is required");

    await db.read(); // ✅ Read latest data from db.json

    const user = db.data.users.find(u => u.email === email);

    if (user) {
        db.data.users = db.data.users.filter(u => u.email !== email);
        await db.write(); // ✅ Save updated data back to db.json
        res.status(200).send("Account deleted");
    } else {
        res.status(404).send("User not found");
    }
});


// Serve static frontend files
app.use(express.static(path.join(__dirname, "frontend", "public", "static")));

// Serve homepage on "/"
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "public", "static", "index.html"));
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
