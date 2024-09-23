document.addEventListener('DOMContentLoaded', () => {
    const languageSelector = document.getElementById('language-selector');
    const texts = {
        en: {
            homeTitle: "Welcome to Butterfly Cakes",
            homeDescription: "Delicious cakes for every occasion!",
            servicesTitle: "Our Services",
            aboutTitle: "About Us",
            aboutDescription: "At Butterfly Cakes, we specialize in creating delightful cakes that bring joy to your special moments. Our passionate bakers use the finest ingredients to craft cakes that not only taste great but also look stunning.",
            galleryTitle: "Gallery"
        },
        am: {
            homeTitle: "በበutterfly ኬክ ወደ መግቢያ",
            homeDescription: "ለእያንዳንዱ የእንኳን የሚሰጥ ኬክ!",
            servicesTitle: "እኛ የአገልግሎት",
            aboutTitle: "ወይዘር እንኳን",
            aboutDescription: "በበutterfly ኬክ የምንኖር ከእውነት ይኖረዋል እና የምንኖር ይደርስባቸው ይታወቃሉ ያንን ወቀነዋቸው ወርዖይ እንደምንይቶች",
            galleryTitle: "ግምት"
        }
    };

    // Function to change language
    const changeLanguage = (language) => {
        document.getElementById('home-title').innerText = texts[language].homeTitle;
        document.getElementById('home-description').innerText = texts[language].homeDescription;
        document.getElementById('services-title').innerText = texts[language].servicesTitle;
        document.getElementById('about-title').innerText = texts[language].aboutTitle;
        document.getElementById('about-description').innerText = texts[language].aboutDescription;
        document.getElementById('gallery-title').innerText = texts[language].galleryTitle;
    };

    // Event listener for language change
    languageSelector.addEventListener('change', (event) => {
        changeLanguage(event.target.value);
    });

    // Initial language setting
    changeLanguage('en');

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            alert('This is a beautiful cake!');
        });
    });
});
