
    const themeToggle = document.getElementById('theme-toggle');
    const navbar = document.getElementById('navbar');
    const icon = themeToggle.querySelector('i'); // Get the icon element

    // Check if dark mode is already enabled (for user preference)
    const darkModeEnabled = localStorage.getItem('dark-mode') === 'true';

    if (darkModeEnabled) {
        document.body.classList.add('dark-mode');
        navbar.classList.replace('navbar-light', 'navbar-dark');
        navbar.classList.replace('bg-light', 'bg-dark');
        icon.classList.replace('fa-moon', 'fa-sun'); // Switch to sun icon
    }

    themeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            navbar.classList.replace('navbar-light', 'navbar-dark');
            navbar.classList.replace('bg-light', 'bg-dark');
            icon.classList.replace('fa-moon', 'fa-sun'); // Switch to sun icon
            localStorage.setItem('dark-mode', 'true');
        } else {
            navbar.classList.replace('navbar-dark', 'navbar-light');
            navbar.classList.replace('bg-dark', 'bg-light');
            icon.classList.replace('fa-sun', 'fa-moon'); // Switch back to moon icon
            localStorage.setItem('dark-mode', 'false');
        }
    });
    let isLoggedIn = false;

    function toggleLoginLogout() {
      const button = document.getElementById('loginLogoutButton');
      isLoggedIn = !isLoggedIn; // Toggle the login state
      
      if (isLoggedIn) {
        button.textContent = 'Logout'; // Change button text
        // button.classList.remove('btn-outline-primary');
        // button.classList.add('btn-outline-danger'); // Change button style
      } else {
        button.textContent = 'Login'; // Change button text
        // button.classList.remove('btn-outline-danger');
        // button.classList.add('btn-outline-primary'); // Change button style
      }
    }


