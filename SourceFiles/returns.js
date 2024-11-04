document.addEventListener('DOMContentLoaded', function () {
    const cartCountEl = document.getElementById('cart-count');
    const labels = document.querySelectorAll('.form-control label');
  
    // Function to calculate and update cart count based on items in local storage
    function updateCartCount() {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
      cartCountEl.textContent = cartCount;
    }
  
    // Initial update of the cart count on page load
    updateCartCount();
  
    // Listen for changes in local storage and update cart count if cart changes
    window.addEventListener('storage', (event) => {
      if (event.key === 'cart') {
        updateCartCount();
      }
    });
  
    // Animate label letters going up on focus
    labels.forEach(label => {
      label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('');
    });
  });
  