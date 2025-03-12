document.addEventListener("DOMContentLoaded", function () {
    // Function to add item to cart
    function addToCart() {
        let cart = JSON.parse(localStorage.getItem("cartProducts")) || [];

        // Create product object
        const cartProduct = {
            name: name,
            price: basePrice * quantity, // Calculate total price
            basePrice: basePrice, // Store base price separately
            quantity: quantity,
            img: img,
            restaurant: restaurant,
            rating: rating
        };

        // Check if product is already in the cart
        let existingProductIndex = cart.findIndex(p => p.name === name);
        if (existingProductIndex !== -1) {
            // Update quantity and price if product exists
            cart[existingProductIndex].quantity += quantity;
            cart[existingProductIndex].price = cart[existingProductIndex].basePrice * cart[existingProductIndex].quantity;
        } else {
            // Add new product
            cart.push(cartProduct);
        }

        // Save updated cart to localStorage
        localStorage.setItem("cartProducts", JSON.stringify(cart));
    }

    // Add to Cart Button
    document.getElementById("add-to-cart").addEventListener("click", function () {
        addToCart(); // Add item to cart
        this.classList.add("added");
        this.textContent = "Added to Cart";
        this.classList.add("cart-animation");
        setTimeout(() => this.classList.remove("cart-animation"), 300);
    });

    // Order Now Button
    document.getElementById("order-now").addEventListener("click", function () {
        addToCart(); // Ensure item is added before ordering
        window.location.href = "cart.html"; // Redirect to cart page
    });
});


