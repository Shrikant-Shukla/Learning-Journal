const toggleBtn = document.getElementById("toggleBtn");
const body = document.body;

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.add(savedTheme);
} else {
  body.classList.add("light-mode");
}

toggleBtn.addEventListener("click", () => {
  if (body.classList.contains("light-mode")) {
    body.classList.replace("light-mode", "dark-mode");
    localStorage.setItem("theme", "dark-mode");
  } else {
    body.classList.replace("dark-mode", "light-mode");
    localStorage.setItem("theme", "light-mode");
  }
});
