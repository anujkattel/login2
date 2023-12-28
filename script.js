function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check if the username and password are 'admin'
    if (username === 'admin' && password === 'admin') {
        // Save user details in local storage
        saveUserDetails(username);

        // Redirect to the home page
        window.location.href = 'new.html';
    } else {
        // Display an error message or handle authentication failure
        alert('Test user id password is admin');
    }
}

function saveUserDetails(username) {
    // Save username in local storage
    localStorage.setItem('username', username);
}

// Function to check if the user is already logged in
function checkLoggedIn() {
    var username = localStorage.getItem('username');

    if (!username) {
        // User is not logged in, redirect to login page
        window.location.href = '/'; // Update with your login page URL
    }
}

// Call checkLoggedIn on page load
checkLoggedIn();
