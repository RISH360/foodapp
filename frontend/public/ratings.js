document.addEventListener("DOMContentLoaded", function () {
    const ratingsBtn = document.getElementById("ratingsBtn");
    const ratingsDropdown = document.getElementById("ratingsDropdown");
    const ratingCheckboxes = ratingsDropdown.querySelectorAll("input[type='checkbox']");

    // Toggle dropdown when clicking Ratings button
    ratingsBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        ratingsDropdown.style.display = (ratingsDropdown.style.display === "block") ? "none" : "block";
    });

    // Hide dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!ratingsDropdown.contains(event.target) && event.target !== ratingsBtn) {
            ratingsDropdown.style.display = "none";
        }
    });

    // Ensure only one checkbox can be selected at a time
    ratingCheckboxes.forEach(checkbox => {
        checkbox.addEventListener("change", function () {
            ratingCheckboxes.forEach(cb => {
                if (cb !== this) cb.checked = false; // Uncheck other checkboxes
            });
        });
    });
}); 