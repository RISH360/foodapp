document.addEventListener("DOMContentLoaded", function () {
    const sortBtn = document.getElementById("sortBtn");
    const sortDropdown = document.getElementById("sortDropdown");
    const sortCheckboxes = sortDropdown.querySelectorAll("input[type='checkbox']");


    // Toggle dropdown on Sort button click
    sortBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        const rect = sortBtn.getBoundingClientRect();
        sortDropdown.style.display = (sortDropdown.style.display === "block") ? "none" : "block";

        // Position dropdown below Sort button
        sortDropdown.style.position = "absolute";
        sortDropdown.style.top = `${rect.bottom + window.scrollY}px`;
        sortDropdown.style.left = `${rect.left + window.scrollX}px`;
    });

    // Hide dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!sortDropdown.contains(event.target) && event.target !== sortBtn) {
            sortDropdown.style.display = "none";
        }
    });

  // Ensure only one checkbox can be selected at a time
  sortCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("change", function () {
        sortCheckboxes.forEach(cb => {
            if (cb !== this) cb.checked = false; // Uncheck other checkboxes
        });
    });
});
}); 
