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
document.getElementById('hamburger').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    navbar.style.display = (navbar.style.display === 'flex') ? 'none' : 'flex';
});

