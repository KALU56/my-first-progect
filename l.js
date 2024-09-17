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
