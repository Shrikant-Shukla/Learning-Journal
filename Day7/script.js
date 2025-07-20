const form = document.getElementById("form");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const terms = document.getElementById("terms");
const submitBtn = document.getElementById("submitBtn");
const termsError = document.getElementById("termsError");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateEmail(email);
  validateName(fullName);
  validatePassword(password);
  validateConfirmPassword(password, password2);
  validateTerms();

  const allValid = checkAllValid();

  if (allValid) {
    document.getElementById("successMessage").style.display = "block";
  }
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
terms.addEventListener("change", () => {
  validateTerms();
  checkAllValid();
});

function validateTerms() {
  if (!terms.checked) {
    termsError.innerText = "*You must accept the terms.";
    termsError.classList.add("error");
  } else {
    termsError.innerText = "";
    termsError.classList.remove("error");
  }
}

function validateName(nameInput) {
  const value = nameInput.value.trim();
  if (value === "") {
    setErrorFor(nameInput, "Name cannot be empty");
  } else if (value.length < 3) {
    setErrorFor(nameInput, "Name should be at least 3 characters");
  } else {
    setSuccessFor(nameInput);
  }
}

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

function validatePassword(passwordInput) {
  const value = passwordInput.value.trim();
  if (value === "") {
    setErrorFor(passwordInput, "Password cannot be empty");
  } else if (value.length < 6) {
    setErrorFor(passwordInput, "Password should be at least 6 characters");
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
    setErrorFor(confirmPasswordInput, "Passwords do not match");
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
  return (
    fullName.parentElement.classList.contains("success") &&
    email.parentElement.classList.contains("success") &&
    password.parentElement.classList.contains("success") &&
    password2.parentElement.classList.contains("success") &&
    terms.checked
  );
}
