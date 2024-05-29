// LOGIN-WINDOW::START
const loginButton = document.getElementById("login-button");
const loginWindow = document.getElementById("login-window");
const closeButton = document.getElementById("login-close-button");
const loginOverlay = document.getElementById("login-overlay");
const scrollArrow = document.getElementById("scrollToTop");
6
loginButton.addEventListener("click", () => {
  loginWindow.style.display = "flex";
  loginOverlay.classList.add("active");
  scrollArrow.style.display = "none";
});

closeButton.addEventListener("click", () => {
  closeLoginWindow();
});