const credential = {
    email: "eve.holt@reqres.in",
    password: "abcd1234",
  };
  
  function validateForm() {
    var email = document.getElementById("email").value;
    if (email == "") {
      alert("E-mail errata o obbligatoria!");
      return false;
    } else {
      http(email);
    }
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