// Select elements for clock and date display
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');

// Select the cart count element
const cartCountEl = document.getElementById('cart-count');

// Function to update cart count from local storage
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    cartCountEl.textContent = cartCount;
}

// Initial call to set the cart count on page load
updateCartCount();

// Update cart count when changes occur in local storage
window.addEventListener('storage', (event) => {
    if (event.key === 'cart') {
        updateCartCount();
    }
});

// Function to set and update time and date
function setTime() {
    const time = new Date();
    const hours = time.getHours();
    const hoursForClock = hours % 12 || 12; // Converts 24-hour time to 12-hour format
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Rotate clock hands
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`;

    // Set digital time display
    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;

    // Set date display
    const day = time.getDay();
    const date = time.getDate();
    const month = time.getMonth();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

// Utility function to scale numbers (for rotating clock hands)
function scale(num, in_min, in_max, out_min, out_max) {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

// Set initial time and update every second
setTime();
setInterval(setTime, 1000);

// Testimonial rotation
const testimonialContainer = document.querySelector('.testimonial-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');

const testimonials = [
    {
        name: 'Miyah Myles',
        photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
        text: "EGGTech has become my go-to for tech advice and product comparisons!",
    },
    {
        name: 'John Doe',
        photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=8a4e2cfcd56b9a3c3efc225d14b8a1b0',
        text: "Excellent service and reliable products. Highly recommend EGGTech!",
    },
    {
        name: 'Jane Smith',
        photo: 'https://images.unsplash.com/photo-1548142813-9b1a1a4d8551?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=6e9f35baf7191b0281e0ea62c09b70df',
        text: "A seamless shopping experience with top-notch customer support.",
    },
];

let idx = 0;

// Function to update testimonial
function updateTestimonial() {
    const { name, photo, text } = testimonials[idx];
    testimonial.innerHTML = text;
    userImage.src = photo;
    username.innerHTML = name;

    idx = (idx + 1) % testimonials.length;
}

// Update testimonial every 10 seconds
setInterval(updateTestimonial, 10000);
updateTestimonial(); // Initial call to set the first testimonial
