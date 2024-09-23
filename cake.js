// Login Functionality
document.getElementById('loginBtn').addEventListener('click', function() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Get stored user data
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Check if credentials match
    if (username === storedUsername && password === storedPassword) {
        alert('Login successful! You can now view the cake categories.');
        document.getElementById('signupForm').style.display = 'none'; // Hide signup form
        document.getElementById('loginForm').style.display = 'none'; // Hide login form
        document.getElementById('main-content').style.display = 'block'; // Show main content
    } else {
        alert('Invalid username or password.');
    }
});

// Toggle between Login and Signup Forms
function toggleForms() {
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
    signupForm.style.display = signupForm.style.display === 'none' ? 'block' : 'none';
    loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
}

// Signup Functionality
document.getElementById('signupBtn').addEventListener('click', function() {
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;

    if (username && password) {
        // Save user data in localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        alert('Signup successful! You can now login.');
        toggleForms(); // Switch to login form after signup
    } else {
        alert('Please fill in both fields.');
    }
});

// Login Functionality
document.getElementById('loginBtn').addEventListener('click', function() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Get stored user data
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Check if credentials match
    if (username === storedUsername && password === storedPassword) {
        alert('Login successful!');
        // You can redirect the user to a dashboard or another page here
    } else {
        alert('Invalid username or password.');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const cartCount = document.getElementById('cart-count');
    let itemCount = 0;

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
document.addEventListener('DOMContentLoaded', () => {
    const cartCount = document.getElementById('cart-count');
    let itemCount = 0;

    // Handle add to cart button click
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent triggering card flip

            itemCount++;
            cartCount.textContent = itemCount;
        });
    });

    // Handle remove from cart button click
    document.querySelectorAll('.remove-from-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent triggering card flip

            if (itemCount > 0) { // Ensure item count doesn't go below 0
                itemCount--;
                cartCount.textContent = itemCount;
            }
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

