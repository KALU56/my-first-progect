// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const navbar = document.getElementById('navbar');
const icon = themeToggle.querySelector('i'); // Get the icon element

// Check if dark mode is already enabled (for user preference)
const darkModeEnabled = localStorage.getItem('dark-mode') === 'true';

// If dark mode was previously enabled, apply the styles
if (darkModeEnabled) {
    document.body.classList.add('dark-mode');
    navbar.classList.replace('navbar-light', 'navbar-dark');
    navbar.classList.replace('bg-light', 'bg-dark');
    icon.classList.replace('fa-moon', 'fa-sun'); // Switch to sun icon
}

// Event listener for the theme toggle button
themeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode'); // Toggle dark mode class
    if (document.body.classList.contains('dark-mode')) {
        navbar.classList.replace('navbar-light', 'navbar-dark');
        navbar.classList.replace('bg-light', 'bg-dark');
        icon.classList.replace('fa-moon', 'fa-sun'); // Switch to sun icon
        localStorage.setItem('dark-mode', 'true'); // Save dark mode preference
    } else {
        navbar.classList.replace('navbar-dark', 'navbar-light');
        navbar.classList.replace('bg-dark', 'bg-light');
        icon.classList.replace('fa-sun', 'fa-moon'); // Switch back to moon icon
        localStorage.setItem('dark-mode', 'false'); // Save light mode preference
    }
});

// Login/Logout Functionality
let isLoggedIn = false;

function toggleLoginLogout() {
    const button = document.getElementById('loginLogoutButton');
    isLoggedIn = !isLoggedIn; // Toggle the login state
    
    if (isLoggedIn) {
        button.textContent = 'Logout'; // Change button text to 'Logout'
    } else {
        button.textContent = 'Login'; // Change button text to 'Login'
    }
}

// Image Slideshow Functionality
const images = document.querySelectorAll('.intro-image img');
let currentIndex = 0;

// Function to update the visible image
function updateImage() {
    images.forEach((img, index) => {
        img.classList.remove('active'); // Hide all images
        if (index === currentIndex) {
            img.classList.add('active'); // Show the current image
        }
    });
}

// Show next image
document.getElementById('nextButton').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length; // Increment index
    updateImage(); // Update displayed image
});

// Show previous image
document.getElementById('prevButton').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Decrement index
    updateImage(); // Update displayed image
});

// Automatic image change every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length; // Move to the next image
    updateImage(); // Update displayed image
}, 5000);
