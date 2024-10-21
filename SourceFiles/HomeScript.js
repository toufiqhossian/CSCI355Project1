const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

toggle.addEventListener('click', function(){
    nav.classList.toggle('active')
})

const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');

const testimonials = [
  {
    name: 'Miyah Myles',
    photo:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
    text:
      "EGGTech delivered my laptop faster than expected, and the quality was top-notch. Highly recommend this website for tech purchases!",
  },
  {
    name: 'June Cha',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    text:
      "I bought a gaming monitor from EGGTech, and the entire process was seamless. Excellent customer service and great prices!",
  },
  {
    name: 'Iida Niskanen',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    text:
      "EGGTech is my go-to for tech gadgets! The variety is fantastic, and I’ve never been disappointed with the quality.",
  },
  {
    name: 'Renee Sims',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    text:
      "The checkout experience on EGGTech was smooth, and they offered competitive prices on the latest electronics. Definitely a site to trust!",
  },
  {
    name: 'Jonathan Nunfiez',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    text:
      "I had an issue with my order, but EGGTech's customer support resolved it quickly and professionally. I’ll definitely shop here again.",
  },
  {
    name: 'Sasha Ho',
    photo:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
    text:
      "EGGTech offers great deals on tech products, and I was impressed with the fast shipping. My new headphones are amazing!",
  },
  {
    name: 'Troy Brampton',
    photo: 'https://randomuser.me/api/portraits/men/97.jpg',
    text:
      "I’ve ordered from EGGTech multiple times, and they consistently deliver great products and superb service. Always a pleasure shopping here!",
  },
];

let idx = 1;

function updateTestimonial() {
  const { name, photo, text} = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 10000);

