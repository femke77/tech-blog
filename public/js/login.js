const refer = document.getElementById("refer").value; //don't need this

const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (username && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });


    if (response.ok && document.referrer === "http://localhost:3002/") {
      window.location.assign("/dashboard");
    } else if (response.ok && document.referrer.split("/").includes("post")) {
      window.history.back();
    }
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

// const signupFormHandler = async (event) => {
//   event.preventDefault();

//       const username = document.querySelector('#user-signup').value.trim();
//   const password = document.querySelector('#password-signup').value.trim();

//   if (username && password) {
//     const response = await fetch('/api/user', {
//       method: 'POST',
//       body: JSON.stringify({ username, password }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       document.location.replace('/dashboard');
//     } else {
//       alert(response.statusText);
//     }
//   }
// };

// document
// .querySelector('.signup-form')
// .addEventListener('submit', signupFormHandler);
