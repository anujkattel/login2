function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin') {
        saveUserDetails(username);
        window.location.href = 'new.html';
    } else {
        alert('Test user id password is admin');
    }
}

function saveUserDetails(username) {
    localStorage.setItem('username', username);
}

function checkLoggedIn() {
    var username = localStorage.getItem('username');

    if (!username) {
        window.location.href = '/';
    }
}

checkLoggedIn();
