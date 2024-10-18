// Selecting all necessary elements
const cartCountElement = document.getElementById('cart-count');
const items = document.querySelectorAll('.item');
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to update cart count in navbar
function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCountElement.textContent = totalItems;
}

// Function to add or update items in cart
function addToCart(itemName, itemPrice, itemQuantity) {
    const existingItem = cart.find(item => item.name === itemName);

    if (existingItem) {
        existingItem.quantity += itemQuantity;
    } else {
        cart.push({ name: itemName, price: itemPrice, quantity: itemQuantity });
    }

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Update cart count on page load
updateCartCount();

// Looping through each item
items.forEach(item => {
    const increaseBtn = item.querySelector('.increase');
    const decreaseBtn = item.querySelector('.decrease');
    const quantityElement = item.querySelector('.quantity');
    const addToCartBtn = item.querySelector('.add-to-cart-btn');
    let quantity = 0;

    // Increase quantity
    increaseBtn.addEventListener('click', () => {
        quantity++;
        quantityElement.textContent = quantity;
        quantityElement.classList.add('updated');
        addToCartBtn.style.display = 'block'; // Show the 'Add to Cart' button
        setTimeout(() => quantityElement.classList.remove('updated'), 200);
    });

    // Decrease quantity
    decreaseBtn.addEventListener('click', () => {
        if (quantity > 0) {
            quantity--;
            quantityElement.textContent = quantity;
            quantityElement.classList.add('updated');
            if (quantity === 0) {
                addToCartBtn.style.display = 'none'; // Hide the 'Add to Cart' button if quantity is 0
            }
            setTimeout(() => quantityElement.classList.remove('updated'), 200);
        }
    });

    // Add to cart functionality
    addToCartBtn.addEventListener('click', () => {
        const itemName = item.querySelector('h3').textContent;
        const itemPrice = parseFloat(item.querySelector('h2').textContent.slice(1));
        
        addToCart(itemName, itemPrice, quantity);
        
        alert(`Added ${quantity} item(s) to your cart!`);
        quantity = 0; // Reset quantity
        quantityElement.textContent = quantity;
        addToCartBtn.style.display = 'none'; // Hide the button again after adding
    });
});
