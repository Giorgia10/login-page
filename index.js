
var name = document.getElementById('email');
var password = document.getElementById('password);

// Storing input from login-form
function store() {
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);
}

function check() {
    // stored data from the login-form
    var storedEmail = localStorage.getItem('email');
    var storedPassword = localStorage.getItem('password');
    // entered data from the login-form
    var userEmail = name;
    var userPassword = pw;
    // check if stored data from register-form is equal to data from login form
    if(userEmail.value == storedEmail && userPassword.value == storedPassword) {
        alert('You are loged in.');
    }else {
        alert('Error');
    }
}

fetch('https://reqres.in/api/login', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        "email": "eve.holt@reqres.in",
        "password": "abcd1234"
})})