const foodItems = [
    // First Row Items
    { name: "Pizza", img: "static/pngwing.com (20).png" },
    { name: "Burger", img: "static/pngwing.com (21).png" },
    { name: "KFC", img: "static/pngwing.com (23).png" },
    { name: "Sandwich", img: "static/pngwing.com (25).png" },
    { name: "Biryani", img: "static/pngwing.com (29).png" },
    { name: "Chicken", img: "static/pngwing.com (28).png" },
    { name: "Parotta", img: "static/pngwing.com (33).png" },
    { name: "Fried Rice", img: "static/pngwing.com (34).png" },
    { name: "Cup Cake", img: "static/pngwing.com (35).png" },
    
    // Second Row Items
    { name: "Biryani", img: "static/pngwing.com (22).png" },
    { name: "Chicken", img: "static/pngwing.com (30).png" },
    { name: "Parotta", img: "static/pngwing.com (27).png" },
    { name: "Fried Rice", img: "static/pngwing.com (31).png" },
    { name: "Idli", img: "static/—Pngtree—idly with sambar and chutney_9171058.png" },
    { name: "Puri", img: "static/pngwing.com (26).png" },
    { name: "Paratha", img: "static/pngwing.com (36).png" },
    { name: "Manchurian", img: "static/pngwing.com (43).png" },
    { name: "Keema", img: "static/pngwing.com (44).png" },
    { name: "Fish Fry", img: "static/pngwing.com (37).png" },
    { name: "Thali", img: "static/pngwing.com (39).png" },
    { name: "Paneer", img: "static/pngwing.com (38).png" },
    { name: "Appam", img: "static/pngwing.com (40).png" },
    { name: "Mutton", img: "static/pngwing.com (41).png" },
    { name: "Prawns", img: "static/pngwing.com (42).png" },
    
    // Third Row Items
    { name: "Cup Cake", img: "static/pngwing.com (32).png" },
    { name: "Cake", img: "static/pngwing.com (45).png" },
    { name: "Pastry", img: "static/pngwing.com (55).png" },
    { name: "Milkshake", img: "static/pngwing.com (47).png" },
    { name: "Doughnut", img: "static/pngwing.com (54).png" },
    { name: "Pudding", img: "static/pngwing.com (56).png" },
    { name: "Ice Cream", img: "static/pngwing.com (46).png" },
    { name: "Falooda", img: "static/pngwing.com (49).png" },
    { name: "Juice", img: "static/pngwing.com (48).png" },
    { name: "Sundae", img: "static/pngwing.com (53).png" },
    { name: "Lassi", img: "static/pngwing.com (50).png" },
    { name: "Muffin", img: "static/pngwing.com (57).png" },
    { name: "Brownie", img: "static/pngwing.com (52).png" },
    { name: "Mousse", img: "static/pngwing.com (51).png" },
    { name: "Tiramisu", img: "static/pngwing.com (58).png" },
    
    // Fourth Row Items
    { name: "Tea", img: "static/pngwing.com (59).png" },
    { name: "Coffee", img: "static/pngwing.com (60).png" },
    { name: "Vada", img: "static/pngwing.com (66).png" },
    { name: "Starbucks", img: "static/pngwing.com (61).png" },
    { name: "Cutlet", img: "static/pngwing.com (67).png" },
    { name: "Soup", img: "static/pngwing.com (65).png" }, // Fixed "Soap" to "Soup"
    { name: "Steak", img: "static/pngwing.com (70).png" },
    { name: "Cookies", img: "static/pngwing.com (72).png" },
    { name: "Samosa", img: "static/pngwing.com (64).png" },
    { name: "Chicken Rolls", img: "static/pngwing.com (63).png" },
    { name: "Pav Bhaji", img: "static/pngwing.com (69).png" },
    { name: "Tacos", img: "static/pngwing.com (74).png" },
    { name: "Pazham Puri", img: "static/pngwing.com (68).png" },
    { name: "Puffs", img: "static/pngwing.com (75).png" },
    { name: "Hot Dogs", img: "static/pngwing.com (77).png" },
    { name: "Kebabs", img: "static/pngwing.com (71).png" },
    { name: "Nachos", img: "static/pngwing.com (73).png" },
    { name: "Chaap", img: "static/pngwing.com (76).png" }
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
    
            // ✅ Fixed Image & Text Issue
            foodDiv.innerHTML = `
                <img src="${foodItems[index].img}" alt="${foodItems[index].name}">
                <div>${foodItems[index].name}</div>
            `;
    
            foodRow.appendChild(foodDiv);
        }
    }
    
    foodContainer.appendChild(foodRow);
    }
    