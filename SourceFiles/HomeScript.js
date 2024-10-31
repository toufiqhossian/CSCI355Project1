const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function setTime() {
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM'

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`

    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()

setInterval(setTime, 1000)

const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

toggle.addEventListener('click', function(){
    nav.classList.toggle('active')
})

const testimonialContainer = document.querySelector('.testimonial-container');

const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');

const testimonials = [
  {
    name: 'Miyah Myles',
    photo:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
    text:
      "EGGTech has become my go-to for tech advice and product comparisons!",
  },
  {
    name: 'June Cha',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    text:
      "Fantastic website for staying up-to-date with the latest tech trends.",
  },
  {
    name: 'Iida Niskanen',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    text:
      "EGGTech helped me find the perfect laptop within my budget!",
  },
  {
    name: 'Renee Sims',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    text:
      "Customer service is top-notch!",
  },
  {
    name: 'Jonathan Nunfiez',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    text:
      "The best website for honest tech reviews.",
  },
  {
    name: 'Sasha Ho',
    photo:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
    text:
      "EGGTech saved me so much time with their easy-to-follow guides!",
  },
  {
    name: 'Veeti Seppanen',
    photo: 'https://randomuser.me/api/portraits/men/97.jpg',
    text:
      "EGGTech’s newsletter keeps me ahead of the curve!",
  },
];

let idx = 1;

function updateTestimonial() {
  const { name, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}
setInterval(updateTestimonial, 10000);