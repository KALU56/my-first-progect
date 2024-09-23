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
