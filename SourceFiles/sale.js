let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to update cart count in the nav
function updateCartCount() {
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  document.getElementById('cart-count').textContent = cartCount;
}

// Function to add products to cart
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const productName = button.getAttribute('data-product');
    const price = parseFloat(button.getAttribute('data-price'));
    const quantityElement = button.previousElementSibling.querySelector('.quantity');
    const quantity = parseInt(quantityElement.textContent);

    // Check if the item is already in the cart
    const productInCart = cart.find(item => item.name === productName);
    if (productInCart) {
      productInCart.quantity += quantity;
    } else {
      cart.push({ name: productName, price, quantity });
    }

    // Save cart to local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Reset quantity back to 1
    quantityElement.textContent = 1;

    // Update cart count
    updateCartCount();
  });
});

// Quantity increase and decrease functionality
document.querySelectorAll('.quantity-controls').forEach(control => {
  const decreaseBtn = control.querySelector('.decrease-quantity');
  const increaseBtn = control.querySelector('.increase-quantity');
  const quantityElement = control.querySelector('.quantity');

  increaseBtn.addEventListener('click', () => {
    let currentQuantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = currentQuantity + 1;
  });

  decreaseBtn.addEventListener('click', () => {
    let currentQuantity = parseInt(quantityElement.textContent);
    if (currentQuantity > 1) {
      quantityElement.textContent = currentQuantity - 1;
    }
  });
});

// Update cart count on page load
updateCartCount();
