  const menuItems = [
    { name: "Crispy Chicken Burger", price: 349, img: "static/crispy-chicken-burger-3b4f47d62f7d58bef17dd8aa1f932c3d.png" },
        { name: "Parotta", price: 299, img: "static/pngwing.com (27).png", link: "#" },
        { name: "Chicken Sandwitch", price: 369, img: "static/pngwing.com (25).png", link: "#" },
        { name: "Chicken Biriyani", price: 329, img: "static/pngwing.com (22).png", link: "#" },
        { name: "Momo Mia Pizza", price: 319, img: "static/momo-mia-non-veg379d4c86ba9551f194bfc68ad9d77bc51.jpg" },
        { name: "Shawarma", price: 289, img: "static/pngwing.com (22).png", link: "#" },
        { name: "Chicken Cutlet", price: 279, img: "static/pngwing.com (67).png", link: "#" },
        { name: "Delicious Beef Burger", price: 359, img: "static/delicious-beef-burger-05c72cc08b933716e4cc97cb9656089c.png" },
        { name: "Chicken Rolls", price: 349, img: "static/pngwing.com (63).png", link: "#" },
        { name: "Chicken Golden Delight", price: 299, img: "static/MicrosoftTeams-image_(14).png" },
        { name: "Tandoori Chicken", price: 369, img: "static/pngegg (1).png" },
        { name: "Grilled Chicken", price: 349, img: "static/pngegg (2).png" },
        { name: "Fried Chicken Egg Noodles", price: 299, img: "static/pngegg (3).png" },
        { name: "Cheese Burger Whooper Buffalo", price: 369, img: "static/cheeseburger-whopper-buffalo-wing-street-food-french-fries-chicken-tikka-burger-20160507d6794d972c6675e2ca3bba4a.png" },
        { name: "Chinese Noodles Yakisoba", price: 329, img: "static/pngegg (4).png" },
        { name: "Non-Veg Supreme", price: 319, img: "static/MicrosoftTeams-image_(13).png"},
        { name: "Chicken Noodles", price: 289, img: "static/pngwing.com.png" },
        { name: "Chicken Tikka Masala", price: 279, img: "static/pngwing.com (1).png" },
        { name: "Hyaderabhadi Chicken Biriyani", price: 359, img: "static/pngwing.com (3).png" },
        { name: "Chicken Nuggets, Crispy Fried Chicken", price: 349, img: "static/pngwing.com (4).png" },
        { name: "Chicken Samoosa", price: 299, img: "static/pngwing.com (64).png" },
        { name: "Indian cuisine Dal Non-Vegetarian cuisine Roti", price: 369, img: "static/pngwing.com (12).png" },
        { name: "Chicken Dominator", price: 349, img: "static/MicrosoftTeams-image_(11).png" },
        { name: "Mutton Curry", price: 299, img: "static/pngwing.com (2).png" },
        { name: "Korean Fried Chicken", price: 369, img: "static/pngwing.com (5).png" },
        { name: "Cooked meat with red salsa", price: 329, img: "static/pngwing.com (13).png" },
        { name: "Spare ribs Barbecue Chicken curry Buffalo wing", price: 319, img: "static/pngwing.com (14).PNg" },
        { name: "Pepper Barbecue & Onion", price: 289, img: "static/Pepper_Barbeque_&_Onion.jpg" },
        { name: " Indian Cuisine Non-Vegetarian", price: 279, img: "static/pngwing.com (15).png" },
        { name: "McDonald's Chicken McNuggets KFC", price: 359, img: "static/pngwing.com (6).png" },
        { name: "Chicken karahi Indian cuisine Shrimp curry Vindaloo,", price: 349, img: "static/pngwing.com (16).png" },
        { name: "Indian cuisine Gravy Kebab Buffet Asian cuisine", price: 299, img: "static/pngwing.com (17).png" },
        { name: "Pepper Barbecue Chicken", price: 369, img: "static/MicrosoftTeams-image_(15).png" },
        { name: "Mattar paneer Indian cuisine Paneer tikka masala", price: 349, img: "static/pngwing.com (78).png" },
        { name: "KFC Full Meal Bundle", price: 299, img: "static/pngwing.com (7).png" },
        { name: "Mediterranean cuisine Indian cuisine Falafel", price: 369, img: "static/pngwing.com (79).png" },
        { name: "Indian cuisine Malai Asian cuisine Kofta", price: 329, img: "static/pngwing.com (80).png" },
        { name: "Chicken Sausage", price: 319, img: "static/MicrosoftTeams-image_(17).png" },
        { name: "Fish Fry", price: 289, img: "static/pngwing.com (37).png" },
        { name: "KFC Chicken Bundle, Large", price: 279, img: "static/pngwing.com (10).png" },
        { name: "South Asian cuisine, Rice With Meals", price: 359, img: "static/pngegg (5).png" },
        { name: "KFC Fried Chicken Bundle, Medium", price: 349, img: "static/pngwing.com (8).png" },
        { name: "Butter Indian Tandoori Chicken", price: 299, img: "static/pngegg (6).png" },
        { name: "Chicken Fiesta", price: 369, img: "static/MicrosoftTeams-image_(10).png" },
        { name: "Momo Mia Pizza", price: 349, img: "static/momo-mia-veg.4e51f4733bea47a514c107c9fd2341e3.1.jpg", link: "#" },
        { name: "Ramen Chinese noodles", price: 299, img: "static/pngwing.com (94).png", link: "#" },
        { name: "Cuisine South Indian cuisine Thali Vegetable", price: 369, img: "static/pngwing.com (100).png", link: "#" },
        { name: "Telugu cuisine Idiyappam", price: 349, img: "static/pngwing.com - 2025-03-08T002436.005.png", link: "#" },
        { name: "Peppy Paneer", price: 299, img: "static/Peppy_Paneer.jpg", link: "#" },
        { name: "Thai fried rice Chinese cuisine", price: 369, img: "static/pngegg (7).png", link: "#" },
        { name: "French fries Potato chip", price: 349, img: "static/pngegg (10).png", link: "#" },
        { name: "Veg Extravaganza", price: 299, img: "static/Veg_Extravaganz.jpg", link: "#" },
        { name: "Fried seafood noodles", price: 369, img: "static/pngwing.com (95).png", link: "#" },
        { name: "South Indian cuisine", price: 349, img: "static/pngwing.com - 2025-03-08T002335.647.png", link: "#" },
        { name: "Yangzhou fried rice", price: 299, img: "static/pngegg (8).png", link: "#" },
        { name: "Margherita", price: 369, img: "static/Margherit.jpg", link: "#" },
        { name: "Double Cheese Margherita", price: 349, img: "static/Double_Cheese_Margherita.jpg", link: "#" },
        { name: "burger and potato fries dish", price: 299, img: "static/pngegg (11).png", link: "#" },
        { name: "Chow mein Chinese noodles", price: 369, img: "static/pngwing.com (96).png", link: "#" },
        { name: "French fries, medium", price: 349, img: "static/pngegg (12).png", link: "#" },
        { name: "Asian cuisine", price: 299, img: "static/pngwing.com - 2025-03-08T002537.938.png", link: "#" },
        { name: "Farm House", price: 369, img: "static/Farmhouse.jpg", link: "#" },
        { name: "Thai fried rice", price: 299, img: "static/pngegg (9).png", link: "#" },
        { name: "French fries in red sachet,", price: 369, img: "static/pngegg (13).png", link: "#" },
        { name: "Rolls", price: 349, img: "static/pngwing.com (63).png", link: "#" },
        { name: "chana masala", price: 299, img: "static/pngwing.com - 2025-03-08T004335.664.png", link: "#" },
        { name: "Laksa Braised noodles", price: 369, img: "static/pngwing.com (97).png", link: "#" },
        { name: "Samosa", price: 349, img: "static/pngwing.com (64).png", link: "#" },
        { name: "Peppy Paneer", price: 299, img: "static/Peppy_Paneer.jpg", link: "#" },
        { name: "Masala Dosa", price: 369, img: "static/pngwing.com - 2025-03-08T005044.633.png", link: "#" },
        { name: "Fried rice with carrots and green peas", price: 299, img: "static/pngegg (14).png", link: "#" },
        { name: "Puffs", price: 369, img: "static/pngwing.com (75).png", link: "#" },
        { name: "Mexican Green Wave", price: 349, img: "static/Mexican_Green_Wave.jpg", link: "#" },
        { name: "Cutlet", price: 299, img: "static/pngwing.com (67).png", link: "#" },
        { name: "Mattar paneer", price: 369, img: "static/pngwing.com - 2025-03-08T004450.985.png", link: "#" },
        { name: "Deluxe Veggie", price: 349, img: "static/Deluxe_Veggie.jpg", link: "#" },
        { name: "Idle Sambar", price: 299, img: "static/pngwing.com - 2025-03-08T005158.903.png", link: "#" },
        { name: "Palak paneer", price: 369, img: "static/pngwing.com - 2025-03-08T004606.928.png", link: "#" }, 
        { name: "Dandan noodles", price: 369, img: "static/pngwing.com (98).png", link: "#" },
        { name: "Dosa", price: 349, img: "static/pngwing.com - 2025-03-08T005327.982.png", link: "#" },
        { name: "Chapati", price: 299, img: "static/pngwing.com - 2025-03-08T005451.860.png", link: "#" },
        { name: "Aloo gobi", price: 369, img: "static/pngwing.com - 2025-03-08T004929.852.png", link: "#" },
        { name: "Parotta", price: 349, img: "static/pngwing.com - 2025-03-08T005559.901.png", link: "#" },
        { name: "Eggplant curry", price: 299, img: "static/pngwing.com - 2025-03-08T005826.306.png", link: "#" },
        { name: "Dal makhani Indian cuisine", price: 369, img: "static/pngwing.com - 2025-03-08T010142.275.png", link: "#" }, 
        { name: "Pav bhaji", price: 369, img: "static/pngwing.com - 2025-03-08T010244.265.png", link: "#" },
        { name: "Califlower masala", price: 349, img: "static/pngwing.com - 2025-03-08T010609.908.png", link: "#" },
        { name: "Chow mein Lo mein Biryani Chinese noodles", price: 299, img: "static/pngwing.com (99).png", link: "#" },
        { name: "Appam with egg curry", price: 369, img: "static/pngwing.com - 2025-03-08T005559.901.png", link: "#" },
        { name: "Tteok-bokki Red curry", price: 349, img: "static/pngwing.com - 2025-03-08T010754.521.png", link: "#" },
        { name: "Salchipapas French fries", price: 299, img: "static/pngwing.com - 2025-03-08T010754.521.png", link: "#" },
        { name: "Salad illustration", price: 369, img: "static/pngwing.com - 2025-03-08T011003.742.png", link: "#" },
    ];

    function loadMenu() {
        const menuContainer = document.getElementById("menu");
        menuContainer.innerHTML = "";
        menuItems.forEach(food => {
            const foodCard = document.createElement("div");
            foodCard.className = "food-card";
            foodCard.innerHTML = `
                <img src="${food.img}" alt="${food.name}">
                <h4>${food.name}</h4>
                <p>₹${food.price}</p>
                <button onclick="viewDetails('${food.name}', ${food.price}, '${food.img}')">View More</button>
            `;
            menuContainer.appendChild(foodCard);
        });
    }

    function viewDetails(name, price, img) {
        localStorage.setItem("foodName", name);
        localStorage.setItem("foodPrice", price);
        localStorage.setItem("foodImg", img);
        window.location.href = "fooddetails.html";
    }

    loadMenu();