window.addEventListener('scroll', function() {
    const image = document.querySelector('.main-image');
    const scrollPosition = window.scrollY;

    if(scrollPosition > 50) { 
        image.classList.add('shrink');
    } else {
        image.classList.remove('shrink');
    }
});
window.button
