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


const exitBtn = document.querySelector('.panel-exit');
const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');
let selectedRating = 'Satisfied';

setTimeout(() => {
    panel.classList.remove('hidden');
}, 2500);

exitBtn.addEventListener('click', (e) => {
    panel.classList.add('hidden');
});

ratingsContainer.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('rating') && e.target.nextElementSibling) {
        removeActive();
        e.target.parentNode.classList.add('active');
        selectedRating = e.target.nextElementSibling.innerHTML;
    } else if(
        e.target.parentNode.classList.contains('rating') &&
        e.target.previousSibling &&
        e.target.previousElementSibling.nodeName === 'IMG'
    ) {
        removeActive();
        e.target.parentNode.classList.add('active');
        selectedRating = e.target.innerHTML;
    }
});

sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve EGGTech.</p>
    `;

    setTimeout(() => {
        panel.classList.add('hidden');
    }, 2500);
});

function removeActive() {
    for(let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active');
    }
}