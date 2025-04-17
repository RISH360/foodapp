import multer from 'multer';
import { v4 as uuidv4 } from "uuid"; // add this at the top of your file
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

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const uploadPath = path.join(__dirname, 'uploads');
      if (!fs.existsSync(uploadPath)) {
        fs.mkdirSync(uploadPath); // Create folder if not exists
      }
      cb(null, uploadPath); // Save files to 'uploads' folder
    },
    filename: (req, file, cb) => {
      const uniqueName = uuidv4() + path.extname(file.originalname); // Unique file name
      cb(null, uniqueName); // Set file name
    }
  });
  
  const upload = multer({ storage });
  

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // ✅ Add this line
app.use(express.static(path.join(__dirname, "frontend", "public", "static")));

// Serve static files (uploads folder for profile pictures)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



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

// Register Mobile Number Route
app.post("/register-mobile", async (req, res) => {
    const { mobile } = req.body;

    if (!mobile || !/^\d{10}$/.test(mobile)) {
        return res.status(400).json({ success: false, message: "Please enter a valid 10-digit mobile number." });
    }

    await db.read();

    // Check if mobile number already exists in the database
    const existingUser = db.data.users.find(user => user.mobile === mobile);

    if (existingUser) {
        return res.status(409).json({ success: false, message: "This mobile number is already registered." });
    }

    // Add the mobile number to db.json (You can add additional fields if needed later)
    const newUser = {
        firstName: "New",  // Placeholder for first name
        lastName: "User",  // Placeholder for last name
        nickName: "newuser",  // Placeholder for nickname
        email: "",  // Placeholder for email
        mobile: mobile,
        password: "",  // Placeholder for password (or you can add registration flow here)
        cart: [],
        orders: [],
        addresses: []
    };

    db.data.users.push(newUser);
    await db.write();

    res.status(200).json({ success: true, message: "Mobile number registered successfully!" });
});

app.post("/update-user-details", async (req, res) => {
    const { mobile, firstName, lastName, nickname } = req.body;

    if (!mobile || !firstName || !lastName || !nickname) {
        return res.status(400).json({ success: false, message: "All fields are required." });
    }

    await db.read();
    const user = db.data.users.find(u => u.mobile === mobile);

    if (!user) {
        return res.status(404).json({ success: false, message: "User not found." });
    }

    // Update user fields
    user.firstName = firstName;
    user.lastName = lastName;
    user.nickName = nickname;

    await db.write();

    res.json({ success: true, message: "User details updated." });
});

app.post("/confirm-password-mobile", async (req, res) => {
    const { mobile, password } = req.body;

    if (!mobile || !password) {
        return res.status(400).json({ success: false, message: "Mobile number and password are required." });
    }

    await db.read();
    const user = db.data.users.find(user => user.mobile === mobile);

    if (!user) {
        return res.status(404).json({ success: false, message: "User not found." });
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;

    await db.write();
    res.status(200).json({ success: true, message: "Password saved successfully." });
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

// Endpoint to upload profile picture
app.post('/upload-profile-pic', upload.single('profilePic'), async (req, res) => {
    const { email } = req.body;
    const profilePicPath = req.file ? `/uploads/${req.file.filename}` : null;
  
    if (!email || !profilePicPath) {
      return res.status(400).send('Invalid data');
    }
  
    // Read DB and update user profile picture
    await db.read();
    const user = db.data.users.find(u => u.email === email);
    
    if (!user) {
      return res.status(404).send('User not found');
    }
  
    user.profilePic = profilePicPath; // Store profile picture path in DB
    await db.write();
  
    res.status(200).json({ message: 'Profile picture uploaded successfully', profilePic: profilePicPath });
  });
  
  // Example of how to serve the profile picture
  app.get('/profile-pic/:email', async (req, res) => {
    const { email } = req.params;
    await db.read();
  
    const user = db.data.users.find(u => u.email === email);
    if (!user || !user.profilePic) {
      return res.status(404).send('Profile picture not found');
    }
  
    res.status(200).json({ profilePic: user.profilePic });
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

app.post("/cart/save", async (req, res) => {
    const { email, cart } = req.body;

    if (!email || !Array.isArray(cart)) {
        return res.status(400).send("Invalid data: Missing email or cart");
    }

    const invalidItems = cart.filter(item => !item.name || !item.price || !item.quantity);
    if (invalidItems.length > 0) {
        return res.status(400).send("Invalid cart item(s): Missing required fields");
    }

    try {
        await db.read();
        const user = db.data.users.find(
            u => u.email?.trim().toLowerCase() === email.trim().toLowerCase()
        );

        if (!user) {
            return res.status(404).send("User not found");
        }

        // ✅ Add or update cart array
        user.cart = cart;
        await db.write();

        res.status(200).send("Cart saved successfully");
    } catch (error) {
        console.error("❌ Error saving cart to database:", error);
        res.status(500).send("Internal server error");
    }
});

async function saveCartToServer(email, cart) {
    try {
        const res = await fetch("/cart/save", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, cart })
        });

        if (res.ok) {
            const message = await res.text();
            console.log("✅", message);
        } else {
            const errorMessage = await res.text();
            console.error("❌ Error saving cart:", errorMessage);
        }
    } catch (err) {
        console.error("❌ Error saving cart:", err);
    }
}

app.post("/orders/place", async (req, res) => {
    const email = req.session?.email || req.body.email;  // fallback to body email if session not set
    const { cart } = req.body;

    if (!email || !Array.isArray(cart) || cart.length === 0) {
        return res.status(400).send("Invalid request data");
    }

    for (const item of cart) {
        if (!item.name || typeof item.price !== "number" || typeof item.quantity !== "number") {
            return res.status(400).send("Invalid item data in cart");
        }
    }

    await db.read();
    const user = db.data.users.find(u => u.email === email);
    if (!user) return res.status(404).send("User not found");

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const order = {
        id: "ORD" + uuidv4().replace(/-/g, "").slice(0, 10).toUpperCase(),
        items: cart,
        total,
        status: "Processing",
        placedAt: new Date().toISOString()
    };

    user.orders ||= [];
    user.orders.push(order);
    user.cart = [];

    // ✅ Cookie Pay Cashback logic
    if (user.premium === true) {
        const cashback = total * 0.1; // 10% cashback
        user.cookiePay ||= 0;
        user.cookiePay += cashback;
        order.cashback = cashback; // optional: store cashback in order
    }

    await db.write();
    res.status(200).json({ message: "Order placed", orderId: order.id });
});



// Route to get all orders for a user (GET request is more appropriate)
app.get("/orders/get", async (req, res) => {
    const { email } = req.query;  // Use query parameter for GET request

    if (!email) return res.status(400).send("Email required");

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).send("Invalid email format");
    }

    await db.read();
    const user = db.data.users.find(u => u.email === email);
    if (!user) return res.status(404).send("User not found");

    const orders = user.orders || [];
    res.status(200).json({ orders });
});

app.get("/orders/status", async (req, res) => {
    const { email, orderId } = req.query;

    await db.read();
    const user = db.data.users.find(u => u.email === email);
    if (!user || !user.orders) return res.status(404).send("User or orders not found");

    const order = user.orders.find(o => o.id === orderId);
    if (!order) return res.status(404).send("Order not found");

    res.status(200).json({ status: order.status });
});



// Serve static files from the correct folder
app.use(express.static(path.join(__dirname, "frontend", "public")));

// Serve index.html at root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "public", "index.html"));
});


// Start server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
