document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the username and password (you can add validation here)
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // You can add your authentication logic here
    // For demonstration, we'll assume the login is always successful
    if (username && password) {
        // Redirect to the cake page
        window.location.href = "cake.html";
    } else {
        alert("Please enter valid credentials.");
    }
});
