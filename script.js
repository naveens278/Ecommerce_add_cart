// Shopping Cart Logic
let cart = [];
let total = 0;

// Function to add items to cart
function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    total += price;
    updateCart();
}

// Function to remove an item from the cart
function removeFromCart(index) {
    total -= cart[index].price;  // Subtract price from total
    cart.splice(index, 1);       // Remove item from cart
    updateCart();
}

// Function to update cart display
function updateCart() {
    let cartItems = document.getElementById("cart-items");
    let cartTotal = document.getElementById("cart-total");

    // Clear previous cart items
    cartItems.innerHTML = "";

    // Populate cart items
    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            ${item.name} - $${item.price.toFixed(2)}
            <button class="remove-btn" onclick="removeFromCart(${index})">X</button>
        `;
        cartItems.appendChild(li);
    });

    // Update total price
    cartTotal.textContent = total.toFixed(2);
}
