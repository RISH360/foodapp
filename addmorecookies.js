document.addEventListener("DOMContentLoaded", function () {
    const addMoreButton = document.getElementById("add-more-cookies");
    const productContainer = document.getElementById("product-list");

    const products = [
        { id: 1, name: "Pepsi", price: 48, img: "static/pngwing.com (88).png" },
        { id: 2, name: "7UP", price: 48, img: "static/pngwing.com (89).png" },
        { id: 3, name: "Biscuit", price: 48, img: "static/pngwing.com (90).png" },
        { id: 4, name: "Fries", price: 48, img: "static/pngwing.com (91).png" },
        { id: 5, name: "Burger", price: 60, img: "static/.png" },
        { id: 6, name: "Pizza", price: 120, img: "static/.png" },
        { id: 7, name: "Coke", price: 45, img: "static/.png" },
        { id: 8, name: "Donut", price: 55, img: "static/.png" },
        { id: 9, name: "Sandwich", price: 75, img: "static/.png" },
        { id: 10, name: "Coffee", price: 40, img: "static/.png" }
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
