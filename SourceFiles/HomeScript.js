document.addEventListener('DOMContentLoaded', () => {
    // Loan Slider Functionality
    const loanSlider = document.getElementById("loanAmount");
    const amountValue = document.getElementById("amountValue");

    loanSlider.addEventListener('input', function () {
        amountValue.textContent = parseInt(loanSlider.value).toLocaleString(); // Update amount value in a readable format
    });

    // Mouse-following blue circle
    const mouseCircle = document.querySelector('.mouse-circle');
    document.addEventListener('mousemove', (e) => {
        mouseCircle.style.left = `${e.pageX}px`;
        mouseCircle.style.top = `${e.pageY}px`;
    });
});
