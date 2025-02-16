document.addEventListener('mousemove', (e) => {
    const movingText = document.querySelector('.shadow-text');
    const container = document.querySelector('.header');

    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    const shadowX = deltaX / 30;
    const shadowY = deltaY / 30;

    movingText.style.textShadow = `${shadowX}px ${shadowY}px 8.5px rgba(107, 107, 107, 0.7)`;
});

const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.classList.add('active');
    });
});