function signIn() {
  var email = document.getElementById('email').value;
  var pw = document.getElementById('password').value;

  //Check-out on email and password
  if (email == "" && pw == "") {
    alert("Email e password obbligatori");
    return false;
  } 

  //Fetch method
  fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        "email": email,
        "password": pw
      })})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    if (data.token) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('email', email);
      localStorage.setItem('password', pw);
      window.location.href='homepage.html';
    }
    console.log(data);
  });
}

//Function that verifies the token at the very first loading of the page
function verifyToken() {
  var token = localStorage.getItem("token");
  var email = localStorage.getItem("email");
  if (token != null) {
    document.getElementById('email').innerHTML = email;
    document.getElementById('token').innerHTML = token;
  }else {
    window.location.href='loginpage.html';
  }
}

//Function that clears the localStorage and takes the user back to the login page
function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  window.location.href='loginpage.html';
}