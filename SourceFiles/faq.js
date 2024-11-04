const cartCountElement = document.getElementById('cart-count');

// Load cart from local storage and update cart count
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    cartCountElement.textContent = cartCount;
}

updateCartCount();

// FAQ Toggle
document.querySelectorAll('.faq-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const faq = button.parentElement;
        faq.classList.toggle('active');
    });
});
