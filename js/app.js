// Year

const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();

// Navbar menu

const menuBar = document.querySelector(".bar");
const navbar = document.querySelector(".navigation-bar__up");

menuBar.addEventListener("click", function () {
  navbar.classList.toggle("active");
});
