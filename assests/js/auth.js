// Predefined login credentials (for demo purposes)
const validUsername = "admin";
const validPassword = "password123";

// Handle login form submission
document.getElementById('login-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === validUsername && password === validPassword) {
    // Store login status in localStorage
    localStorage.setItem('isLoggedIn', 'true');
    alert('Login successful!');
    // Redirect to the homepage
    window.location.href = "index.html";
  } else {
    // Show error message
    document.getElementById('error-message').style.display = "block";
  }
});

// Check login status on protected pages
function checkLogin() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  if (!isLoggedIn || isLoggedIn !== 'true') {
    // Redirect to the login page
    window.location.href = "login.html";
  }
}

// Call `checkLogin` on protected pages like about.html, services.html, etc.
