// Language change functionality
document.getElementById('language-selector').addEventListener('change', function() {
    const selectedLanguage = this.value;

    // Select all elements with a data attribute for the selected language
    document.querySelectorAll('[data-en]').forEach(element => {
        const newContent = element.getAttribute(`data-${selectedLanguage}`);
        if (newContent) {
            element.innerText = newContent;
        }
    });
});

// Toggle the display of the navbar when the hamburger icon is clicked
document.getElementById('hamburger').addEventListener('click', () => {
    const navbar = document.getElementById('navbar');
    // Toggle the 'show' class to display or hide the navbar
    navbar.classList.toggle('show');
});
document.getElementById('language-selector').addEventListener('change', function() {
    const selectedLanguage = this.value;

    // Get the home section and the background image for the selected language
    const homeSection = document.getElementById('home');
    const newBgImage = homeSection.getAttribute(`data-${selectedLanguage}`);
    
    // Only set the background image, do not modify the content
    if (newBgImage) {
        homeSection.style.backgroundImage = `url('${newBgImage}')`;
    }
});



