let cart = {}; // Stores items as { productName: { quantity: X, price: Y } }

function addToCart(buttonElement) {
    const productElement = buttonElement.closest('.product');
    const productName = productElement.querySelector('h3').dataset.name;
    const productPrice = parseFloat(productElement.querySelector('p').dataset.price);

    if (cart[productName]) {
        cart[productName].quantity++;
    } else {
        cart[productName] = { quantity: 1, price: productPrice };
    }
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = ''; // Clear current display
    let total = 0;

    for (const productName in cart) {
        const item = cart[productName];
        const listItem = document.createElement('li');
        const itemTotalPrice = item.quantity * item.price;
        listItem.textContent = `${productName} (x${item.quantity}) - $${itemTotalPrice.toFixed(2)}`;
        cartItemsList.appendChild(listItem);
        total += itemTotalPrice;
    }

    document.getElementById('cart-total').textContent = total.toFixed(2);
}