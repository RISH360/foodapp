document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.querySelector(".button");
    const emailInput = document.querySelector("input[type='email']");
    const passwordInput = document.querySelector("input[type='password']");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    const storedEmail = "mohamedrishan360@gmail.com";
    const storedPassword = "rishan123";

    function validateForm() {
        let valid = true;

        if (emailInput.value.trim() === "") {
            emailError.textContent = "Email is required";
            emailError.style.color = "red";
            valid = false;
        } else if (emailInput.value !== storedEmail) {
            emailError.textContent = "Invalid email";
            emailError.style.color = "red";
            valid = false;
        } else {
            emailError.textContent = "";
        }

        if (passwordInput.value.trim() === "") {
            passwordError.textContent = "Password is required";
            passwordError.style.color = "red";
            valid = false;
        } else if (passwordInput.value !== storedPassword) {
            passwordError.textContent = "Incorrect password";
            passwordError.style.color = "red";
            valid = false;
        } else {
            passwordError.textContent = "";
        }

        return valid;
    }

    loginButton.addEventListener("click", function (event) {
        if (!validateForm()) {
            event.preventDefault();
        } else {
            alert("Login successful!");
            // Redirect to another page if needed
            // window.location.href = "dashboard.html";
        }
    });
});
