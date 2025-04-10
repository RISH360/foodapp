document.addEventListener("DOMContentLoaded", function () {
    const addMoreButton = document.getElementById("add-more-cookies");
    const productContainer = document.getElementById("product-list");

    const products = [
        { id: 1, name: "Pepsi", price: 49, img: "static/pngwing.com (88).png" },
        { id: 2, name: "7 Up", price: 49, img: "static/pngwing.com (89).png" },
        { id: 3, name: "French Fries", price: 50, img: "static/pngwing.com (90).png" },
        { id: 4, name: "Good Day Biscuit", price: 25, img: "static/pngwing.com (91).png" },
        { id: 5, name: "Coco Cola", price: 49, img: "static/pngwing.com (11).png" },
        { id: 6, name: "Sprite", price: 49, img: "static/pngwing.com - 2025-04-01T191520.289.png" },
        { id: 7, name: "Snickers", price: 30, img: "static/pngwing.com - 2025-04-01T192213.243.png" },
        { id: 8, name: "Oreo Biscuit", price: 50, img: "static/pngwing.com - 2025-04-01T192118.118.png" },
        { id: 9, name: "Red Bull", price: 79, img: "static/pngwing.com - 2025-04-01T191546.724.png" },
        { id: 10, name: "Nutella", price: 60, img: "static/pngwing.com - 2025-04-01T192129.761.png" },
        { id: 11, name: "Twix Bites", price: 129, img: "static/pngwing.com - 2025-04-01T192917.103.png" },
        { id: 12, name: "Monsters Energy", price: 89, img: "static/pngwing.com - 2025-04-01T191555.525.png" },
        { id: 13, name: "Fanta", price: 49, img: "static/pngwing.com - 2025-04-01T191607.330.png" },
        { id: 14, name: "Leibniz Biscuit", price: 35, img: "static/pngwing.com - 2025-04-01T192105.510.png" },
        { id: 15, name: "Jack Daniels Whisky", price: 499, img: "static/pngwing.com - 2025-04-01T191949.974.png" },
        { id: 16, name: "Kitkat", price: 20, img: "static/pngwing.com - 2025-04-01T192146.793.png" },
        { id: 17, name: "Coco Cola Zero", price: 59, img: "static/pngwing.com - 2025-04-01T191641.834.png" },
        { id: 18, name: "Fanta", price: 49, img: "static/pngwing.com - 2025-04-01T191731.853.png" },
        { id: 19, name: "Lays Classic", price: 20, img: "static/pngwing.com - 2025-04-01T192504.504.png" },
        { id: 21, name: "Lays Wavy", price: 20, img: "static/pngwing.com - 2025-04-01T192546.832.png" },
        { id: 22, name: "Coco Nice", price: 25, img: "static/pngwing.com - 2025-04-01T192636.361.png" },
        { id: 23, name: "Coco Cola", price: 59, img: "static/pngwing.com - 2025-04-01T191746.210.png" },
        { id: 24, name: "Pepsi", price: 59, img: "static/pngwing.com - 2025-04-01T191809.060.png" },
        { id: 25, name: "Black Label , scotish Wishky", price: 799, img: "static/pngwing.com - 2025-04-01T192020.493.png" },
        { id: 26, name: "Tago Biscuits", price: 56, img: "static/pngwing.com - 2025-04-01T192741.957.png" },
        { id: 27, name: "Sprite", price: 59, img: "static/pngwing.com - 2025-04-01T191854.714.png" },
        { id: 28, name: "Doritos", price: 30, img: "static/pngwing.com - 2025-04-01T192559.367.png" },
        { id: 29, name: "Peppory", price: 35, img: "static/pngwing.com - 2025-04-01T192449.007.png" },
        { id: 30, name: "Ice Cream", price: 40, img: "static/pngwing.com - 2025-04-01T192227.999.png" },
        { id: 31, name: "Snickers Bites", price: 79, img: "static/pngwing.com - 2025-04-01T192853.414.png" },
        { id: 32, name: "Milky Way", price: 25, img: "static/pngwing.com - 2025-04-01T193016.467.png" },
        { id: 33, name: "Mars", price: 20, img: "static/pngwing.com - 2025-04-01T192838.270.png" },
        { id: 34, name: "Family Biscuit", price: 30, img: "static/pngwing.com - 2025-04-01T192732.034.png" },
        { id: 35, name: "Nairns Oat Biscuit", price: 40, img: "static/pngwing.com - 2025-04-01T192724.194.png" },
        { id: 36, name: "Lays", price: 20, img: "static/pngwing.com - 2025-04-01T192602.143.png" },
        { id: 37, name: "Lays", price: 20, img: "static/pngwing.com - 2025-04-01T192610.172.png" },
        { id: 38, name: "Chocolate Bar", price: 40, img: "static/pngwing.com - 2025-04-01T192715.501.png" },
        { id: 39, name: "Nairns Gluten , Biscuits", price: 39, img: "static/pngwing.com - 2025-04-01T192659.286.png" }
    ];

    let cart = JSON.parse(localStorage.getItem("cartProducts")) || [];
    let isProductsVisible = false;

    addMoreButton.addEventListener("click", function () {
        if (isProductsVisible) {
            productContainer.innerHTML = "";
        } else {
            let productHTML = "";
            products.forEach(product => {
                const isInCart = cart.some(p => p.id === product.id);
                productHTML += `
                    <div class="product">
                        <img src="${product.img}" class="product-img" data-id="${product.id}" data-price="${product.price}" alt="${product.name}">
                        <p class="product-name">${product.name}</p>
                        <p class="product-price" data-price="${product.price}">₹${product.price}</p>
                        <p class="quantity">x1</p>
                        <button class="add-button ${isInCart ? 'added' : ''}">
                            ${isInCart ? 'Added to Cart' : 'Add'}
                        </button>
                    </div>
                `;
            });

            productContainer.innerHTML = productHTML;
            attachClickEvents();
        }
        isProductsVisible = !isProductsVisible;
    });

    function attachClickEvents() {
        // Image click functionality for quantity and price update
        document.querySelectorAll(".product-img").forEach((img) => {
            img.addEventListener("click", function () {
                let productContainer = this.closest(".product");
                let priceElement = productContainer.querySelector(".product-price");
                let quantityElement = productContainer.querySelector(".quantity");

                let price = parseFloat(priceElement.getAttribute("data-price"));
                let quantity = parseInt(quantityElement.innerText.replace("x", ""));

                if (quantity < 10) {
                    quantity += 1;
                } else {
                    quantity = 1;
                }

                let newPrice = price * quantity;

                this.classList.add("clicked");
                setTimeout(() => this.classList.remove("clicked"), 300);

                quantityElement.innerText = `x${quantity}`;

                priceElement.classList.add("updated");
                priceElement.innerText = `₹${newPrice}`;
                setTimeout(() => priceElement.classList.remove("updated"), 300);
            });
        });

        // Add to Cart / Remove from Cart Logic
        document.querySelectorAll(".add-button").forEach((button) => {
            button.addEventListener("click", function () {
                const productContainer = this.closest(".product");
                const productId = parseInt(productContainer.querySelector(".product-img").getAttribute("data-id"));
                const productName = productContainer.querySelector(".product-name").innerText;
                const productImg = productContainer.querySelector(".product-img").getAttribute("src");
                const productPrice = parseFloat(productContainer.querySelector(".product-price").getAttribute("data-price"));
                const productQuantity = parseInt(productContainer.querySelector(".quantity").innerText.replace("x", ""));

                if (this.classList.contains("added")) {
                    // Remove from Cart
                    cart = cart.filter(product => product.id !== productId);
                    this.textContent = "Add";
                    this.classList.remove("added");
                } else {
                    // Add to Cart
                    cart.push({
                        id: productId,
                        name: productName,
                        img: productImg,
                        price: productPrice * productQuantity,
                        quantity: productQuantity
                    });
                    this.textContent = "Added to Cart";
                    this.classList.add("added");
                }

                // Save updated cart in localStorage
                localStorage.setItem("cartProducts", JSON.stringify(cart));
            });
        });
    }
});
