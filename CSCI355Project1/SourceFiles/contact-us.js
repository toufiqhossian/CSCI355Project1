// Search Functionality
const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
  search.classList.toggle('active');
  input.focus();
});

// Navigation Toggle (if applicable)
const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');

if (toggle) {
  toggle.addEventListener('click', function () {
    nav.classList.toggle('active');
  });
}


document.addEventListener('DOMContentLoaded', function () {
    const panels = document.querySelectorAll('.panel');
    const locationInfo = document.getElementById('location-info');
    const locationsContainer = document.querySelector('.locations-container');
  
    panels.forEach(panel => {
      // When panel is clicked, expand it
      panel.addEventListener('click', () => {
        removeActiveClasses();  // Collapse all other panels
        panel.classList.add('active');  // Expand the clicked panel
        locationInfo.textContent = panel.dataset.address;  // Show the address
        locationInfo.classList.add('show');  // Display the address
      });
    });
  
    // Remove "active" class from all panels to collapse them
    function removeActiveClasses() {
      panels.forEach(panel => {
        panel.classList.remove('active');
      });
    }
  
    // Collapse expanded panel when the mouse leaves the container
    locationsContainer.addEventListener('mouseleave', () => {
      removeActiveClasses();  // Collapse all panels when mouse leaves container
      locationInfo.classList.remove('show');  // Hide the address
    });
  });
  
  



// Cart Functionality
const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
const cartContainer = document.querySelector('.cart-container');
const cartPreview = document.getElementById('cart-preview');
const cartCount = document.getElementById('cart-count');

// Update cart count badge
cartCount.textContent = cartItems.length;

// Show cart preview on hover
cartContainer.addEventListener('mouseenter', () => {
  cartPreview.style.display = 'block';
});

cartContainer.addEventListener('mouseleave', () => {
  cartPreview.style.display = 'none';
});

// Populate cart preview
const cartItemsContainer = document.getElementById('cart-items');
const cartMessage = document.getElementById('cart-message');

if (cartItems.length > 0) {
  cartMessage.style.display = 'none'; // Hide "No items in your cart." message
  cartItemsContainer.innerHTML = ''; // Clear existing items

  cartItems.forEach((item) => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');

    // Create item name element
    const itemName = document.createElement('span');
    itemName.textContent = item.name; // Assuming each item has a 'name' property
    cartItem.appendChild(itemName);

    cartItemsContainer.appendChild(cartItem);
  });
} else {
  cartMessage.style.display = 'block'; // Show "No items in your cart." message
}
