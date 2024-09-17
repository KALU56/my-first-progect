// cake.js

document.addEventListener('DOMContentLoaded', () => {
    // Select all cards
    const cards = document.querySelectorAll('.card');

    // Add click event listener to each card
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Toggle the 'flipped' class on the clicked card
            card.classList.toggle('flipped');
        });
    });
});

