// Select elements
const textBoxes = document.querySelectorAll('.text-box'); // All text boxes
const imageContainer = document.getElementById('imageContainer'); // Image container

// Array of images corresponding to text boxes
const images = [
    'images/image01.jpeg',
    'images/image02.jpeg',
    'images/image03.jpeg',
    'images/image04.jpeg',
    'images/image05.jpeg',
    'images/image06.jpeg',
    'images/image07.jpeg',
    'images/image08.jpeg',
    'images/image09.jpeg',
    'images/image10.jpeg',
    'images/image11.jpeg',
    'images/image12.jpeg'
];

// Function to set the background image based on the active text box index
function setBackgroundImage(index) {
    const imageUrl = images[index]; // Get image URL from the array
    imageContainer.style.backgroundImage = `url(${imageUrl})`; // Set background image
    imageContainer.style.opacity = 1; // Fade in the image container
}

// Create an IntersectionObserver to detect when text boxes are in view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { // Check if text box is in view
            const index = Array.from(textBoxes).indexOf(entry.target); // Get index of the active text box
            setBackgroundImage(index); // Change background image
            textBoxes.forEach(box => box.classList.remove('active')); // Remove active class from all text boxes
            entry.target.classList.add('active'); // Add active class to the current text box
        }
    });
}, {
    threshold: 0.5 // Trigger when at least 50% of the text box is visible
});

// Observe each text box
textBoxes.forEach(box => observer.observe(box));

// Set initial background image and opacity
setBackgroundImage(0); // Set background image to the first one
imageContainer.style.opacity = 1; // Ensure the first image is visible
