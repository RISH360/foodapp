document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".filter-btn:nth-child(2), .filter-btn:nth-child(3)"); 

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            button.classList.toggle("active-border"); // Toggle animation on click
        });
    });
});
