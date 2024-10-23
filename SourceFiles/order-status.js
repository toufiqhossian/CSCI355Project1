const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')
const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})

toggle.addEventListener('click', function(){
    nav.classList.toggle('active')
})