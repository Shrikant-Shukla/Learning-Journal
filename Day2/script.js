const form = document.querySelector("#loginForm");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  if (username === "" || password === "") {
    result.innerText = "Please fill in both fields.";
  } else {
    result.innerText = `Welcome, ${username}! Password length: ${password.length} characters.`;
  }
});
