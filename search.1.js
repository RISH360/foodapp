document.addEventListener("DOMContentLoaded", function () {
    let searchBox = document.getElementById("searchBox");
    let searchDropdown = document.getElementById("searchDropdown");
    let searchHistoryList = document.getElementById("searchHistoryList");
    let clearHistoryBtn = document.getElementById("clearHistory");
    let searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];

    function updateDropdown() {
        searchHistoryList.innerHTML = "";
        if (searchHistory.length > 0) {
            searchDropdown.style.display = "block";
            searchHistory.forEach(term => {
                let item = document.createElement("li");
                item.textContent = term;
                item.addEventListener("click", function () {
                    searchBox.value = term;
                    searchDropdown.style.display = "none";
                });
                searchHistoryList.appendChild(item);
            });
            clearHistoryBtn.style.display = "block"; // Show clear button
        } else {
            searchDropdown.style.display = "none";
            clearHistoryBtn.style.display = "none"; // Hide clear button
        }
    }

    searchBox.addEventListener("focus", updateDropdown);

    searchBox.addEventListener("keyup", function (e) {
        if (e.key === "Enter" && searchBox.value.trim() !== "") {
            if (!searchHistory.includes(searchBox.value)) {
                searchHistory.push(searchBox.value);
                localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
            }
            updateDropdown();
        }
    });

    clearHistoryBtn.addEventListener("click", function () {
        localStorage.removeItem("searchHistory");
        searchHistory = [];
        updateDropdown();
    });

    document.addEventListener("click", function (e) {
        if (!searchBox.contains(e.target) && !searchDropdown.contains(e.target)) {
            searchDropdown.style.display = "none";
        }
    });

    updateDropdown(); // Update dropdown on page load
});
