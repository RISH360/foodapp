 let selectedNumber = "";

    document.getElementById("mobile-number").addEventListener("click", async function(event) {
        event.preventDefault(); // Prevent page reload

        try {
            let response = await fetch("http://localhost:3000/get-numbers");
            let data = await response.json();

            if (data.success) {
                document.getElementById("sim1").value = data.sim1;
                document.getElementById("sim1-label").textContent = `SIM1: ${data.sim1}`;
                document.getElementById("sim2").value = data.sim2;
                document.getElementById("sim2-label").textContent = `SIM2: ${data.sim2}`;
                document.getElementById("number-selection").style.display = "block";
            } else {
                alert("Failed to get mobile numbers.");
            }
        } catch (error) {
            console.error("Error fetching numbers:", error);
            alert("Error connecting to the server.");
        }
    });

    document.getElementById("send-otp").addEventListener("click", async function() {
        let selectedRadio = document.querySelector('input[name="mobile"]:checked');
        if (!selectedRadio) {
            alert("Please select a mobile number.");
            return;
        }

        selectedNumber = selectedRadio.value;

        try {
            let response = await fetch("http://localhost:3000/send-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ mobile: selectedNumber })
            });

            let data = await response.json();
            if (data.success) {
                alert(`OTP sent to ${selectedNumber}`);
            } else {
                alert("Failed to send OTP.");
            }
        } catch (error) {
            console.error("Error sending OTP:", error);
            alert("Error sending OTP.");
        }
    });