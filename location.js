document.addEventListener("DOMContentLoaded", function() {
    const locationInput = document.getElementById("locationInput");
    const locationDropdown = document.getElementById("locationDropdown");
    const locationList = document.getElementById("locationList");
    const addLocationBtn = document.getElementById("addLocationBtn");
    const clearLocationsBtn = document.getElementById("clearLocationsBtn");

    let savedLocations = ["Thiruvananthapuram, Kerala", "Nagercoil, Tamil Nadu", "chennai, Tamil Nadu"];

    function updateLocationDropdown() {
        locationList.innerHTML = "";
        savedLocations.forEach(location => {
            const li = document.createElement("li");
            li.textContent = location;
            li.addEventListener("click", function() {
                locationInput.value = location;
                locationDropdown.style.display = "none";
            });
            locationList.appendChild(li);
        });
    }

    // Show dropdown when clicking input
    locationInput.addEventListener("focus", function() {
        locationDropdown.style.display = "block";
    });

    // Hide dropdown when clicking outside
    document.addEventListener("click", function(event) {
        if (!document.querySelector(".location-cart-container").contains(event.target)) {
            locationDropdown.style.display = "none";
        }
    });

    // Add new location
    addLocationBtn.addEventListener("click", function() {
        const newLocation = locationInput.value.trim();
        if (newLocation && !savedLocations.includes(newLocation)) {
            savedLocations.push(newLocation);
            updateLocationDropdown();
        }
    });

    // Clear all locations
    clearLocationsBtn.addEventListener("click", function() {
        savedLocations = [];
        updateLocationDropdown();
    });

    updateLocationDropdown();
});
