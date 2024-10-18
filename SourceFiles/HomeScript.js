// Selecting all necessary elements
const cartCountElement = document.getElementById('cart-count');
const items = document.querySelectorAll('.item');
let cartCount = 0;

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
    cartCount += quantity;
    cartCountElement.textContent = cartCount; // Update cart count
    alert(`Added ${quantity} item(s) to your cart!`);
    quantity = 0; // Reset quantity
    quantityElement.textContent = quantity;
    addToCartBtn.style.display = 'none'; // Hide the button again after adding
  });
});
