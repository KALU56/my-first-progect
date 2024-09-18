document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const cartCount = document.getElementById('cart-count');
    let itemCount = 0;

    // Handle card flip
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });

    // Handle add to cart button click
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent triggering card flip

            itemCount++;
            cartCount.textContent = itemCount;
        });
    });

    // Category filter
    document.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Hide all cake lists
            document.querySelectorAll('.cake-list').forEach(list => {
                list.style.display = 'none';
            });

            // Show the selected cake list
            const category = this.getAttribute('data-category');
            document.getElementById(category).style.display = 'block';
        });
    });
});
