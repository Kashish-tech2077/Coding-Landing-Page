const header = document.querySelector(".header");
const nav_btn = document.querySelector(".mobile-navbar-btn");

// Toggle Nav Function
const togglenav = () => {
  header.classList.toggle("active");
};

nav_btn.addEventListener("click", () => {
  togglenav();
});
