const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');
const cartItemsContainer = document.querySelector('.cart-items');
const totalElement = document.querySelector('.cart-summary h2');
const cartCountElement = document.getElementById('cart-count');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to update cart count in navbar
function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCountElement.textContent = totalItems;
}

// Function to get image based on product name or ID
function getImageSrc(itemName) {
    switch(itemName) {
        case 'Computer Keyboard':
            return "/SourceFiles/CS355 Project images/pexels-olenkabohovyk-1772123.jpg";
        case 'Nikon Camera':
            return "/SourceFiles/CS355 Project images/pexels-pixabay-51383.jpg";
        case 'Lightning Cable':
            return "/SourceFiles/CS355 Project images/pexels-didsss-1643753.jpg";
        default:
            return "/SourceFiles/CS355 Project images/default-image.jpg"; // Fallback image
    }
}

// Render Cart Items
function renderCartItems() {
    cartItemsContainer.innerHTML = ''; // Clear existing items
    let total = 0;
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        const imageSrc = getImageSrc(item.name); // Get correct image based on item name
        cartItem.innerHTML = `
            <img src="${imageSrc}" alt="${item.name}">
            <div class="item-details">
                <h3>${item.name}</h3>
                <p>$${item.price}</p>
                <div class="item-quantity">
                    <i class="bi bi-dash-lg decrease"></i>
                    <span class="quantity">${item.quantity}</span>
                    <i class="bi bi-plus-lg increase"></i>
                </div>
                <i class="bi bi-trash trash-icon" aria-label="Remove Item"></i>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);

        total += item.price * item.quantity;

        // Handle increase and decrease quantity
        const increaseBtn = cartItem.querySelector('.increase');
        const decreaseBtn = cartItem.querySelector('.decrease');
        const quantityElement = cartItem.querySelector('.quantity');
        const trashIcon = cartItem.querySelector('.trash-icon');

        increaseBtn.addEventListener('click', () => {
            item.quantity++;
            quantityElement.textContent = item.quantity;
            updateCart();
        });

        decreaseBtn.addEventListener('click', () => {
            if (item.quantity > 1) {
                item.quantity--;
                quantityElement.textContent = item.quantity;
                updateCart();
            }
        });

        // Remove item from cart
        trashIcon.addEventListener('click', () => {
            cart = cart.filter(cartItem => cartItem.name !== item.name);
            updateCart();
        });
    });

    totalElement.textContent = `Total: $${total.toFixed(2)}`;
    updateCartCount(); // Update the cart count on render
}

// Update Cart in localStorage and re-render
function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCartItems();
}

// Render items and update count on page load
renderCartItems();
updateCartCount();
