const toggle = document.getElementById('nav-toggle')
const nav = document.getElementById('nav')
const toggles = document.querySelectorAll('.faq-toggle')

toggle.addEventListener('click', function(){
    nav.classList.toggle('active')
})

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})