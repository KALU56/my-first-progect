
document.getElementById('language-selector').addEventListener('change', function() {
    const selectedLanguage = this.value;

    // Change text content based on the selected language for all elements with data attributes
    document.querySelectorAll('[data-en]').forEach(element => {
        const newContent = element.getAttribute(`data-${selectedLanguage}`);
        if (newContent) {
            element.innerText = newContent;
        }
    });
});

const toggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const currentTheme = localStorage.getItem('theme') || 'light';

document.body.setAttribute('data-theme', currentTheme);
themeIcon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';

toggleButton.addEventListener('click', () => {
  let theme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.body.setAttribute('data-theme', theme);
  themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  localStorage.setItem('theme', theme);
});

document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    const icon = document.getElementById('theme-icon');
    if (document.body.classList.contains('dark-theme')) {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
});


