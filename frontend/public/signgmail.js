function handleCredentialResponse(response) {
            console.log("Encoded JWT ID token: " + response.credential);
            fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ token: response.credential })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert("Login successful! Welcome, " + data.user.name);
                } else {
                    alert("Login failed: " + data.error);
                }
            })
            .catch(error => console.error("Error:", error));
        }

        window.onload = function () {
            google.accounts.id.initialize({
                client_id: "YOUR_GOOGLE_CLIENT_ID",
                callback: handleCredentialResponse
            });

            document.getElementById('googleSignIn').addEventListener('click', function () {
                google.accounts.id.prompt(); // Show Google Sign-In popup
            });
        };