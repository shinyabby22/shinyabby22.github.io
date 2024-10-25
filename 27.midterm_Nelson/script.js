const carouselWrapper = document.querySelector('.carousel-wrapper');
const textDisplay = document.getElementById('textDisplay');
const items = document.querySelectorAll('.carousel-item');

let currentIndex = 0;
const totalItems = items.length;

function updateCarousel() {
    // Hide all items
    items.forEach(item => item.classList.remove('active'));
    
    // Show current item
    items[currentIndex].classList.add('active');
    
    // Update the text
    const currentText = items[currentIndex].getAttribute('data-text');
    textDisplay.innerText = currentText;
}

window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        currentIndex = (currentIndex + 1) % totalItems;
    } else {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    }
    updateCarousel();
});

// Initialize carousel by showing the first item
updateCarousel();
