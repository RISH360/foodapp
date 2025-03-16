const foodItems = [
    // First Row Items
    { name: "Pizza", img: "static/pngwing.com (20).png", category: "pizza" },
    { name: "Burger", img: "static/pngwing.com (21).png", category:"Burger" },
    { name: "KFC", img: "static/pngwing.com (23).png", category:"KFC" },
    { name: "Sandwich", img: "static/pngwing.com (25).png", category:"Sandwich" },
    { name: "Fries", img: "static/pngwing.com (29).png" , category:"Fries"},
    { name: "Noodles", img: "static/pngwing.com (28).png", category:"Noodles" },
    { name: "Shawarma", img: "static/pngwing.com (33).png", category:"Shawarma" },
    { name: "Pasta", img: "static/pngwing.com (34).png", category:"Pasta" },
    { name: "Salad", img: "static/pngwing.com (35).png", category:"Salad" },
    
    // Second Row Items
    { name: "Biriyani", img: "static/pngwing.com (22).png", category:"Biriyani" },
    { name: "Chicken", img: "static/pngwing.com (30).png", category:"Chicken" },
    { name: "Parotta", img: "static/pngwing.com (27).png", category:"Parotta" },
    { name: "Fried Rice", img: "static/pngwing.com (31).png", category:"FriedRice" },
    { name: "Idile", img: "static/—Pngtree—idly with sambar and chutney_9171058.png", category:"Idile" },
    { name: "Puri", img: "static/pngwing.com (26).png", category:"Puri"},
    { name: "Paratha", img: "static/pngwing.com (36).png", category:"Paratha" },
    { name: "Manchurian", img: "static/pngwing.com (43).png", category:"Manchurian" },
    { name: "Keema", img: "static/pngwing.com (44).png", category:"Keema" },
    { name: "Fish Fry", img: "static/pngwing.com (37).png", category:"FishFry"},
    { name: "Thali", img: "static/pngwing.com (39).png", category:"Thali" },
    { name: "Paneer", img: "static/pngwing.com (38).png", category:"Paneer" },
    { name: "Appam", img: "static/pngwing.com (40).png", category:"Appam" },
    { name: "Mutton", img: "static/pngwing.com (41).png", category:"Mutton" },
    { name: "Prawns", img: "static/pngwing.com (42).png", category:"Prawns" },
    
    // Third Row Items

    { name: "Cake", img: "static/pngwing.com (45).png", category:"Cake" },
    { name: "Pastry", img: "static/pngwing.com (55).png", category:"Pastry" },
    { name: "Milkshake", img: "static/pngwing.com (47).png", category:"Milkshake" },
    { name: "Doughnut", img: "static/pngwing.com (54).png", category:"Doughnut" },
    { name: "Pudding", img: "static/pngwing.com (56).png", category:"Pudding" },
    { name: "Ice Cream", img: "static/pngwing.com (46).png", category:"IceCream" },
    { name: "Falooda", img: "static/pngwing.com (49).png", category:"Falooda" },
    { name: "Juice", img: "static/pngwing.com (48).png", category:"Juice" },
    { name: "Sundae", img: "static/pngwing.com (53).png", category:"Sundae" },
    { name: "Lassi", img: "static/pngwing.com (50).png", category:"Lassi" },
    { name: "Muffin", img: "static/pngwing.com (57).png", category:"Muffin" },
    { name: "Brownie", img: "static/pngwing.com (52).png", category:"Brownie" },
    { name: "Mousse", img: "static/pngwing.com (51).png", category:"Mousse" },
    { name: "Tiramisu", img: "static/pngwing.com (58).png", category:"Tiramisu" },
    
    // Fourth Row Items
    { name: "Tea", img: "static/pngwing.com (59).png", category:"Tea" },
    { name: "Coffee", img: "static/pngwing.com (60).png", category:"Coffee" },
    { name: "Vada", img: "static/pngwing.com (66).png", category:"Vada" },
    { name: "Starbucks", img: "static/pngwing.com (61).png", category:"Starbucks" },
    { name: "Cutlet", img: "static/pngwing.com (67).png", category:"Cutlet" },
    { name: "Soup", img: "static/pngwing.com (65).png", category:"Soup" }, // Fixed "Soap" to "Soup"
    { name: "Steak", img: "static/pngwing.com (70).png", category:"Steak" },
    { name: "Cookies", img: "static/pngwing.com (72).png", category:"Cookies" },
    { name: "Samosa", img: "static/pngwing.com (64).png", category:"Samosa" },
    { name: "Chicken Rolls", img: "static/pngwing.com (63).png", category:"ChickenRolls" },
    { name: "Pav Bhaji", img: "static/pngwing.com (69).png", category:"PavBhaji" },
    { name: "Tacos", img: "static/pngwing.com (74).png", category:"Tacos" },
    { name: "Pazham Puri", img: "static/pngwing.com (68).png", category:"PazhamPuri" },
    { name: "Puffs", img: "static/pngwing.com (75).png", category:"Puffs" },
    { name: "Hot Dogs", img: "static/pngwing.com (77).png", category:"HotDogs" },
    { name: "Kebabs", img: "static/pngwing.com (71).png", category:"Kebabs" },
    { name: "Nachos", img: "static/pngwing.com (73).png", category:"Nachos" },
    { name: "Chaap", img: "static/pngwing.com (76).png", category:"Chaap" }
    ];
    
    
    
    const foodContainer = document.getElementById("foodContainer");

    // Create 4 rows
    for (let row = 0; row < 4; row++) {
        const foodRow = document.createElement("div");
        foodRow.classList.add("food-row");
    
        // Add 10 food items per row
        for (let col = 0; col < 27; col++) {
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
    