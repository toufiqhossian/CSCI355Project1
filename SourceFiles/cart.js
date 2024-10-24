// Select the container that will hold the cart items from the DOM
const cartItemsContainer = document.querySelector('.cart-items');

// Select the total element from the cart summary where the total price will be displayed
const totalElement = document.querySelector('.cart-summary h2');

// Select the element that will display the cart count in the navbar
const cartCountElement = document.getElementById('cart-count');

// Retrieve the cart items from localStorage. If no items are found, initialize an empty array.
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to update the cart count displayed in the navbar
function updateCartCount() {
  // Calculate the total number of items in the cart by summing up the quantity of each item
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  // Update the text content of the cart count element with the total number of items
  cartCountElement.textContent = totalItems;
}

// Function to render the cart items on the webpage
function renderCartItems() {
  // Clear the cart items container to avoid displaying duplicate items
  cartItemsContainer.innerHTML = ''; 
  let total = 0; // Initialize a variable to keep track of the total price

  // Loop through each item in the cart array
  cart.forEach(item => {
    // Create a new div element for each cart item
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item'); // Add a class for styling

    // Construct the image path based on the item's name
    const imagePath = `/SourceFiles/CS355 Project images/${item.name}.jpg`;

    // Set the inner HTML of the cart item, including the item's image, name, price, quantity controls, and a trash icon
    cartItem.innerHTML = `
      <img src="${imagePath}" alt="${item.name}"> <!-- Item image -->
      <div class="item-details"> <!-- Container for item details -->
        <h3>${item.name}</h3> <!-- Item name -->
        <p>$${item.price.toFixed(2)}</p> <!-- Item price formatted to two decimal places -->
        <div class="item-quantity"> <!-- Container for quantity controls -->
          <i class="fas fa-minus-circle decrease"></i> <!-- Decrease quantity button -->
          <span class="quantity">${item.quantity}</span> <!-- Display current quantity -->
          <i class="fas fa-plus-circle increase"></i> <!-- Increase quantity button -->
        </div>
        <i class="fas fa-trash trash-icon" aria-label="Remove Item"></i> <!-- Trash icon for removing item -->
      </div>
    `;

    // Append the cart item element to the cart items container in the DOM
    cartItemsContainer.appendChild(cartItem);

    // Update the total price by multiplying the item price by its quantity
    total += item.price * item.quantity;

    // Event listener for increasing the item quantity
    cartItem.querySelector('.increase').addEventListener('click', () => {
      item.quantity++; // Increment the quantity of the item
      updateCart(); // Update the cart in localStorage and re-render items
    });

    // Event listener for decreasing the item quantity
    cartItem.querySelector('.decrease').addEventListener('click', () => {
      if (item.quantity > 1) { // Prevent quantity from going below 1
        item.quantity--; // Decrement the quantity of the item
        updateCart(); // Update the cart in localStorage and re-render items
      }
    });

    // Event listener for removing the item from the cart
    cartItem.querySelector('.trash-icon').addEventListener('click', () => {
      // Filter out the item that matches the current item's name, effectively removing it from the cart
      cart = cart.filter(cartItem => cartItem.name !== item.name);
      updateCart(); // Update the cart in localStorage and re-render items
    });
  });

  // Update the total element with the calculated total price
  totalElement.textContent = `Total: $${total.toFixed(2)}`; // Display total price formatted to two decimal places
  updateCartCount(); // Update the cart count displayed in the navbar
}

// Function to update the cart in localStorage and re-render the cart items
function updateCart() {
  // Save the updated cart array to localStorage as a string
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCartItems(); // Re-render the cart items to reflect any changes
}

// Initialize the cart rendering when the script runs
renderCartItems();
