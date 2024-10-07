// JavaScript to handle image cycling
const images = [
    'images/image1.jpeg',
    'images/image2.jpeg',
    'images/image3.jpeg'
];

let currentImageIndex = 0;
const slideImage = document.getElementById('slideImage');

slideImage.addEventListener('click', function() {
    // Move to the next image
    currentImageIndex = (currentImageIndex + 1) % images.length;
    // Update the src of the image
    slideImage.src = images[currentImageIndex];
});
// JavaScript Document