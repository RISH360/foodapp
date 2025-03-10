
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
  