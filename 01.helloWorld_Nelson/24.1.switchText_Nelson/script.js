// JavaScript to handle image and text cycling
let images = [
    'images/image1.jpeg',
    'images/image2.jpeg',
    'images/image3.jpeg'
];

let texts = [
    '"But I never go slow, I hit the, Imma hit the gas" Gas by NCT127',
    '"Another wish that I could go back. Cause I think maybe I grew up a little too fast" Novacaine by Key',
    '"Its a journey, yea life is a journey, its so fabulous" Life Is Beautiful by ONEUS',
];

let currentImageIndex = 0;
let currentTextIndex = 0;

const slideImage = document.getElementById('slideImage');
const textBox = document.getElementById('textBox');

slideImage.addEventListener('click', function() {
    // Cycle through images
    currentImageIndex = (currentImageIndex + 1) % images.length;
    slideImage.src = images[currentImageIndex];

    // Cycle through texts
    currentTextIndex = (currentTextIndex + 1) % texts.length;
    textBox.innerHTML = texts[currentTextIndex];
});
// JavaScript Document