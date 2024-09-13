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
