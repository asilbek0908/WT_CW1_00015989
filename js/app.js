// Year

const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();

// Navbar menu

const menuBar = document.querySelector(".bar");
const navbar = document.querySelector(".navigation-bar__up");

menuBar.addEventListener("click", function () {
  navbar.classList.toggle("active");
});

// Elements
const inputName = document.querySelector(".input__name");
const inputSurname = document.querySelector(".input__surname");
const inputEmail = document.querySelector(".input__email");
const messageText = document.querySelector(".message");
const submitBtn = document.querySelector(".btn_submit");
const result = document.querySelector("#result");

// Checking Whether input is filled or not

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (inputName.value === "") {
    inputName.style.borderColor = "red";
    document.querySelector(".name").textContent = "Please enter your name !";
  }
  if (inputSurname.value === "") {
    inputSurname.style.borderColor = "red";
    document.querySelector(".surname").textContent =
      "Please enter your surname !";
  }
  if (inputEmail.value === "") {
    inputEmail.style.borderColor = "red";
    document.querySelector(".email").textContent = "Please enter your email !";
  }
  if (messageText.value === "") {
    messageText.style.borderColor = "red";
    document.querySelector(".text").textContent =
      "Please write any message here !";
  }
});

// Counting text length

let limit = 50;
result.textContent = `0/${limit}`;

messageText.addEventListener("input", () => {
  let lengthText = messageText.value.length;
  result.textContent = `${lengthText}/${50}`;
  if (textLength >= 50) {
    messageText.style.borderColor = "red";
    messageText.style.color = "red";
  } else {
    messageText.style.borderColor = "";
    messageText.style.Color = "";
  }
});
