document.addEventListener("DOMContentLoaded", function () {
    const addMoreButton = document.getElementById("add-more-cookies");
    const productContainer = document.getElementById("product-list");

    // Sample product data (Modify as needed)
    const products = [
        { id: 1, name: "Pepsi", price: 48, image: "static/pngwing.com (88).png" },
        { id: 2, name: "7UP", price: 48, image: "static/pngwing.com (89).png" },
        { id: 3, name: "Biscuit", price: 48, image: "static/pngwing.com (90).png" },
        { id: 4, name: "Fries", price: 48, image: "static/pngwing.com (91).png" },
        { id: 5, name: "Burger", price: 60, image: "static/.png" },
        { id: 6, name: "Pizza", price: 120, image: "static/.png" },
        { id: 7, name: "Coke", price: 45, image: "static/.png" },
        { id: 8, name: "Donut", price: 55, image: "static/.png" },
        { id: 9, name: "Sandwich", price: 75, image: "static/.png" },
        { id: 10, name: "Coffee", price: 40, image: "static/.png" }
    ];

    let isProductsVisible = false; // Track visibility state

    // Function to toggle products
    addMoreButton.addEventListener("click", function () {
        if (isProductsVisible) {
            // Hide products
            productContainer.innerHTML = "";
        } else {
            // Show products
            let productHTML = "";
            for (let i = 0; i < products.length; i++) {
                productHTML += `
                    <div class="product">
                        <img src="${products[i].image}" class="product-image" data-id="${products[i].id}" data-price="${products[i].price}" alt="${products[i].name}">
                        <p class="product-price" data-price="${products[i].price}">₹${products[i].price}</p>
                        <p class="quantity">x1</p>
                        <button class="add-button">Add</button>
                    </div>
                `;
            }
            productContainer.innerHTML = productHTML;
            attachClickEvents();
        }
        isProductsVisible = !isProductsVisible; // Toggle visibility state
    });

    // Function to add click event to product images
    function attachClickEvents() {
        document.querySelectorAll(".product-image").forEach((image) => {
            image.addEventListener("click", function () {
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

                // Apply animation to image
                this.classList.add("clicked");
                setTimeout(() => this.classList.remove("clicked"), 300);

                // Update quantity
                quantityElement.innerText = `x${quantity}`;

                // Update price with animation
                priceElement.classList.add("updated");
                priceElement.innerText = `₹${newPrice}`;
                setTimeout(() => priceElement.classList.remove("updated"), 300);
            });
        });
    }
});
