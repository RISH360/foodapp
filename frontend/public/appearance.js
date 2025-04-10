// Apply stored theme on page load
document.addEventListener("DOMContentLoaded", function () {
    const theme = localStorage.getItem("theme");

    if (theme) {
        document.body.classList.add(theme + "-mode");
    }
});

// Function to change theme
function setTheme(mode) {
    document.body.classList.remove("dark-mode", "light-mode");

    if (mode === "light") {
        document.body.classList.add("light-mode");
        localStorage.setItem("theme", "light");
    } else if (mode === "dark") {
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.removeItem("theme"); // Reset theme for "Cookies View"
    }

    // Apply theme immediately
    applyThemeToAllPages();
}

// Ensure all open pages update
function applyThemeToAllPages() {
    document.querySelectorAll("iframe, body").forEach((el) => {
        el.classList.remove("dark-mode", "light-mode");
        const theme = localStorage.getItem("theme");
        if (theme) {
            el.classList.add(theme + "-mode");
        }
    });
}

// Ensure new page loads with correct theme
document.addEventListener("DOMContentLoaded", () => {
    applyThemeToAllPages();
});
