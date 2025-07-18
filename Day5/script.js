const form = document.getElementById("form");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateEmail(email);
  validateName(fullName);
  validatePassword(password);
  validateConfirmPassword(password, password2);
  checkAllValid();
});

fullName.addEventListener("input", () => {
  validateName(fullName);
  checkAllValid();
});
email.addEventListener("input", () => {
  validateEmail(email);
  checkAllValid();
});
password.addEventListener("input", () => {
  validatePassword(password);
  checkAllValid();
});
password2.addEventListener("input", () => {
  validateConfirmPassword(password, password2);
  checkAllValid();
});

function validateEmail(emailInput) {
  const value = emailInput.value.trim();
  if (value === "") {
    setErrorFor(emailInput, "Email cannot be empty");
  } else if (!isEmailValid(value)) {
    setErrorFor(emailInput, "Email is not valid");
  } else {
    setSuccessFor(emailInput);
  }
}

function validateName(nameInput) {
  const value = nameInput.value.trim();
  if (value === "") {
    setErrorFor(nameInput, "Name cannot be empty");
  } else if (value.length < 3) {
    setErrorFor(nameInput, "Name should be atleast 3 characters");
  } else {
    setSuccessFor(nameInput);
  }
}

function validatePassword(passwordInput) {
  const value = passwordInput.value.trim();
  if (value === "") {
    setErrorFor(passwordInput, "Password cannot be empty");
  } else if (value.length < 6) {
    setErrorFor(
      passwordInput,
      "Password should be atleast 6 characters or numbers"
    );
  } else {
    setSuccessFor(passwordInput);
  }
}

function validateConfirmPassword(passwordInput, confirmPasswordInput) {
  const passwordValue = passwordInput.value.trim();
  const confirmValue = confirmPasswordInput.value.trim();
  if (confirmValue === "") {
    setErrorFor(confirmPasswordInput, "Confirm password");
  } else if (passwordValue !== confirmValue) {
    setErrorFor(confirmPasswordInput, "Re-type the same password");
  } else {
    setSuccessFor(confirmPasswordInput);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmailValid(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function checkAllValid() {
  const allValid =
    fullName.parentElement.classList.contains("success") &&
    email.parentElement.classList.contains("success") &&
    password.parentElement.classList.contains("success") &&
    password2.parentElement.classList.contains("success");

  document.getElementById("button").disabled = !allValid;
}
