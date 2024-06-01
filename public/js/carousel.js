document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.getElementById('carousel-container');
    const leftButton = document.getElementById('swipper-button-left');
    const rightButton = document.getElementById('swipper-button-right');

    const scrollAmount = 300;

    leftButton.addEventListener('click', () => {
        carouselContainer.scrollBy({
            top: 0,
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    rightButton.addEventListener('click', () => {
        carouselContainer.scrollBy({
            top: 0,
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    carouselContainer.addEventListener('scroll', () => {
        const scrollWidth = carouselContainer.scrollWidth - carouselContainer.clientWidth;
        leftButton.disabled = carouselContainer.scrollLeft === 0;
        rightButton.disabled = carouselContainer.scrollLeft === scrollWidth;
    });
});
