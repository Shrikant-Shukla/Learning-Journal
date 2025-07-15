const form = document.querySelector("#loginForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username= document.querySelector('#username');
  const password= document.querySelector('#password');
  const result= document.querySelector('#result');

  if (username === '' || password === ''){
    result.innerText = "Please fill in both fields.";
  } else {
    result.innerText = 'Welcome, ${username}! Password length: ${password.length} characters.';
  }
});
