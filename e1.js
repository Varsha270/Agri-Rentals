
// Array to store cart items
var cartItems = [];

// Function to add an item to the cart
function addToCart(itemName, itemPrice) {
    // Check if the item is already in the cart
    var existingItem = cartItems.find(item => item.name === itemName);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push({ name: itemName, price: itemPrice, quantity: 1 });
    }
    updateCartDisplay();
}

// Function to remove an item from the cart
function removeFromCart(itemName) {
    var itemIndex = cartItems.findIndex(item => item.name === itemName);
    if (itemIndex !== -1) {
        cartItems.splice(itemIndex, 1);
    }
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    var cartContainer = document.getElementById("cart-container");
    cartContainer.innerHTML = "";

    var total = 0;
    for (var i = 0; i < cartItems.length; i++) {
        var item = cartItems[i];
        cartContainer.innerHTML += `<div class="cart-item">${item.name} - Quantity: ${item.quantity} - $${(item.price * item.quantity).toFixed(2)} <button onclick="removeFromCart('${item.name}')">Remove</button></div>`;
        total += item.price * item.quantity;
    }

    cartContainer.innerHTML += `<div class="cart-total">Total: $${total.toFixed(2)}</div>`;
}
