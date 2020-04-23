const credential = {
  email: "eve.holt@reqres.in",
  password: "abcd1234",
};
  
function validateForm() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email == "" && password == "") {
    alert("Email e password obbligatori");
    return false;
  } else {
    http(email, password);
  }

  if (password == "") {
    alert("Inserisci la password");
    return false;
  } else {
    http(password);
    window.location.href="homepage.html";
  }
}

function logout() {
  localStorage.clear();
  window.location.href="loginpage.html";
}
  
  
function http(email) {
  fetch("https://reqres.in/api/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: email,
    password: "abcd1234",
  }),
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log('token -> ',data.token);
  });
}