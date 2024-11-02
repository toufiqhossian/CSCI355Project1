document.addEventListener('DOMContentLoaded', function () {
  const panels = document.querySelectorAll('.panel');
  const locationInfo = document.getElementById('location-info');
  const cartCountEl = document.getElementById('cart-count');

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

  // Handle interactions with location panels
  panels.forEach(panel => {
    panel.addEventListener('click', () => {
      // Remove "active" class from all panels
      panels.forEach(p => p.classList.remove('active'));
      // Add "active" class to clicked panel
      panel.classList.add('active');
      // Display the address in the location-info container
      locationInfo.textContent = panel.dataset.address;
      locationInfo.classList.add('show');
    });
  });

  // Hide the location-info text when mouse leaves the locations container
  const locationsContainer = document.querySelector('.locations-container');
  locationsContainer.addEventListener('mouseleave', () => {
    locationInfo.classList.remove('show');
  });
});
