const foodItems = [
    // First Row Items
    { name: "Pizza", img: "static/pngwing.com (20).png", price: "199", type: "veg", category: "pizza" },
    { name: "Burger", img: "static/pngwing.com (21).png", category:"Burger" },
    { name: "KFC", img: "static/pngwing.com (23).png", category:"KFC" },
    { name: "Sandwich", img: "static/pngwing.com (25).png", category:"Sanwich" },
    { name: "Biryani", img: "static/pngwing.com (29).png" , category:""},
    { name: "Chicken", img: "static/pngwing.com (28).png", category:"" },
    { name: "Parotta", img: "static/pngwing.com (33).png", category:"" },
    { name: "Fried Rice", img: "static/pngwing.com (34).png", category:"" },
    { name: "Cup Cake", img: "static/pngwing.com (35).png", category:"" },
    
    // Second Row Items
    { name: "Biryani", img: "static/pngwing.com (22).png", category:"" },
    { name: "Chicken", img: "static/pngwing.com (30).png", category:"" },
    { name: "Parotta", img: "static/pngwing.com (27).png", category:"" },
    { name: "Fried Rice", img: "static/pngwing.com (31).png", category:"" },
    { name: "Idli", img: "static/—Pngtree—idly with sambar and chutney_9171058.png", category:"" },
    { name: "Puri", img: "static/pngwing.com (26).png", category:"" },
    { name: "Paratha", img: "static/pngwing.com (36).png", category:""},
    { name: "Manchurian", img: "static/pngwing.com (43).png", category:"" },
    { name: "Keema", img: "static/pngwing.com (44).png", category:"" },
    { name: "Fish Fry", img: "static/pngwing.com (37).png", category:""},
    { name: "Thali", img: "static/pngwing.com (39).png", category:"" },
    { name: "Paneer", img: "static/pngwing.com (38).png", category:"" },
    { name: "Appam", img: "static/pngwing.com (40).png", category:"" },
    { name: "Mutton", img: "static/pngwing.com (41).png", category:"" },
    { name: "Prawns", img: "static/pngwing.com (42).png", category:"" },
    
    // Third Row Items
    { name: "Cup Cake", img: "static/pngwing.com (32).png", category:"" },
    { name: "Cake", img: "static/pngwing.com (45).png", category:"" },
    { name: "Pastry", img: "static/pngwing.com (55).png", category:"" },
    { name: "Milkshake", img: "static/pngwing.com (47).png", category:"" },
    { name: "Doughnut", img: "static/pngwing.com (54).png", category:"" },
    { name: "Pudding", img: "static/pngwing.com (56).png", category:"" },
    { name: "Ice Cream", img: "static/pngwing.com (46).png", category:"" },
    { name: "Falooda", img: "static/pngwing.com (49).png", category:"" },
    { name: "Juice", img: "static/pngwing.com (48).png", category:"" },
    { name: "Sundae", img: "static/pngwing.com (53).png", category:"" },
    { name: "Lassi", img: "static/pngwing.com (50).png", category:"" },
    { name: "Muffin", img: "static/pngwing.com (57).png", category:"" },
    { name: "Brownie", img: "static/pngwing.com (52).png", category:"" },
    { name: "Mousse", img: "static/pngwing.com (51).png", category:"" },
    { name: "Tiramisu", img: "static/pngwing.com (58).png", category:"" },
    
    // Fourth Row Items
    { name: "Tea", img: "static/pngwing.com (59).png", category:"" },
    { name: "Coffee", img: "static/pngwing.com (60).png", category:"" },
    { name: "Vada", img: "static/pngwing.com (66).png", category:"" },
    { name: "Starbucks", img: "static/pngwing.com (61).png", category:"" },
    { name: "Cutlet", img: "static/pngwing.com (67).png", category:"" },
    { name: "Soup", img: "static/pngwing.com (65).png", category:"" }, // Fixed "Soap" to "Soup"
    { name: "Steak", img: "static/pngwing.com (70).png", category:"" },
    { name: "Cookies", img: "static/pngwing.com (72).png", category:"" },
    { name: "Samosa", img: "static/pngwing.com (64).png", category:"" },
    { name: "Chicken Rolls", img: "static/pngwing.com (63).png", category:"" },
    { name: "Pav Bhaji", img: "static/pngwing.com (69).png", category:"" },
    { name: "Tacos", img: "static/pngwing.com (74).png", category:"" },
    { name: "Pazham Puri", img: "static/pngwing.com (68).png", category:"" },
    { name: "Puffs", img: "static/pngwing.com (75).png", category:"" },
    { name: "Hot Dogs", img: "static/pngwing.com (77).png", category:"" },
    { name: "Kebabs", img: "static/pngwing.com (71).png", category:"" },
    { name: "Nachos", img: "static/pngwing.com (73).png", category:"" },
    { name: "Chaap", img: "static/pngwing.com (76).png", category:"" }
    ];
    
    
    
    const foodContainer = document.getElementById("foodContainer");

    // Create 4 rows
    for (let row = 0; row < 4; row++) {
        const foodRow = document.createElement("div");
        foodRow.classList.add("food-row");
    
        // Add 10 food items per row
        for (let col = 0; col < 10; col++) {
            const index = row * 10 + col;
    
            if (index < foodItems.length) {
                const foodDiv = document.createElement("div");
                foodDiv.classList.add("food-item");
    
                // Add data attribute for category
                foodDiv.setAttribute("data-category", foodItems[index].category);
    
                // Click event for category navigation
                foodDiv.onclick = () => {
                    window.location.href = `food-category.html?category=${foodItems[index].category}`;
                };
    
                // Content for each item
                foodDiv.innerHTML = `
                    <img src="${foodItems[index].img}" alt="${foodItems[index].name}">
                    <div>${foodItems[index].name}</div>
                `;
    
                foodRow.appendChild(foodDiv);
            }
        }
    
        foodContainer.appendChild(foodRow);
    }
    