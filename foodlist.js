  const menuItems = [
    "Crispy Chicken Burger",
    "Parotta",
    "Chicken Sandwitch",
    "Chicken Biriyani",
    "Momo Mia Pizza",
    "Shawarma",
    "Chicken Cutlet",
    "Delicious Beef Burger",
    "Chicken Rolls",
    "Chicken Golden Delight",
    "Tandoori Chicken",
    "Grilled Chicken",
    "Fried Chicken Egg Noodles",
    "Cheese Burger Whooper Buffalo",
    "Chinese Noodles Yakisoba",
    "Non-Veg Supreme",
    "Chicken Noodles",
    "Chicken Tikka Masala",
    "Hyaderabhadi Chicken Biriyani",
    "Chicken Nuggets, Crispy Fried Chicken",
    "Chicken Samoosa",
    "Indian cuisine Dal Non-Vegetarian cuisine Roti",
    "Chicken Dominator",
    "Mutton Curry",
    "Korean Fried Chicken",
    "Cooked meat with red salsa",
    "Spare ribs Barbecue Chicken curry Buffalo wing",
    "Pepper Barbecue & Onion",
    "Indian Cuisine Non-Vegetarian",
    "McDonald's Chicken McNuggets KFC",
    "Chicken karahi Indian cuisine Shrimp curry Vindaloo",
    "Indian cuisine Gravy Kebab Buffet Asian cuisine",
    "Pepper Barbecue Chicken",
    "Mattar paneer Indian cuisine Paneer tikka masala",
    "KFC Full Meal Bundle",
    "Mediterranean cuisine Indian cuisine Falafel",
    "Indian cuisine Malai Asian cuisine Kofta",
    "Chicken Sausage",
    "Fish Fry",
    "KFC Chicken Bundle, Large",
    "South Asian cuisine, Rice With Meals",
    "KFC Fried Chicken Bundle, Medium",
    "Butter Indian Tandoori Chicken",
    "Chicken Fiesta",
    "Momo Mia Pizza",
    "Ramen Chinese noodles",
    "Cuisine South Indian cuisine Thali Vegetable",
    "Telugu cuisine Idiyappam",
    "Peppy Paneer",
    "Thai fried rice Chinese cuisine",
    "French fries Potato chip",
    "Veg Extravaganza",
    "Fried seafood noodles",
    "South Indian cuisine",
    "Yangzhou fried rice",
    "Margherita",
    "Double Cheese Margherita",
    "Burger and potato fries dish",
    "Chow mein Chinese noodles",
    "French fries, medium",
    "Asian cuisine",
    "Farm House",
    "Thai fried rice",
    "French fries in red sachet",
    "Rolls",
    "Chana masala",
    "Laksa Braised noodles",
    "Samosa",
    "Peppy Paneer",
    "Masala Dosa",
    "Fried rice with carrots and green peas",
    "Puffs",
    "Mexican Green Wave",
    "Cutlet",
    "Mattar paneer",
    "Deluxe Veggie",
    "Idle Sambar",
    "Palak paneer",
    "Dandan noodles",
    "Dosa",
    "Chapati",
    "Aloo gobi",
    "Parotta",
    "Eggplant curry",
    "Dal makhani Indian cuisine",
    "Pav bhaji",
    "Cauliflower masala",
    "Chow mein Lo mein Biryani Chinese noodles",
    "Appam with egg curry",
    "Tteok-bokki Red curry",
    "Salchipapas French fries",
    "Salad illustration"
];

document.getElementById("search").addEventListener("input", function() {
    const searchValue = this.value.toLowerCase();
    const suggestionsBox = document.getElementById("suggestions");

    suggestionsBox.innerHTML = "";
    
    const filteredItems = menuItems.filter(item => item.toLowerCase().includes(searchValue));

    if (searchValue && filteredItems.length > 0) {
        suggestionsBox.style.display = "block";
        filteredItems.forEach(food => {
            const suggestion = document.createElement("div");
            suggestion.textContent = food;
            suggestion.classList.add("suggestion-item"); // ✅ Ensures hover works
            suggestion.addEventListener("click", function() {
                localStorage.setItem("selectedFood", food);
                window.location.href = "foodmenu.html";
            });
            suggestionsBox.appendChild(suggestion);
        });
    } else {
        suggestionsBox.style.display = "none";
    }
});

// ✅ Hide suggestions when clicking outside
document.addEventListener("click", function(event) {
    if (!document.querySelector(".search-container").contains(event.target)) {
        document.getElementById("suggestions").style.display = "none";
    }
});

        
