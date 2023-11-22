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

// Text Count length

let limit = 50;
result.textContent = `0/${limit}`;

messageText.addEventListener("input", (e) => {
  e.preventDefault();
  let lengthText = messageText.value.length;
  result.textContent = `${lengthText}/${limit}`;
  if (lengthText >= 50) {
    messageText.style.borderColor = "red";
    messageText.style.color = "red";
  } else {
    messageText.style.borderColor = "";
    messageText.style.color = "";
  }
});

// Checking Whether input is filled or not

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let allInputsValid = true;
  if (inputName.value === "") {
    inputName.style.borderColor = "red";
    document.querySelector(".name").textContent = "Please enter your name!";
    allInputsValid = false;
  } else {
    inputName.style.borderColor = "";
    document.querySelector(".name").textContent = "";
  }

  if (inputSurname.value === "") {
    inputSurname.style.borderColor = "red";
    document.querySelector(".surname").textContent =
      "Please enter your surname!";
    allInputsValid = false;
  } else {
    inputSurname.style.borderColor = "";
    document.querySelector(".surname").textContent = "";
  }

  if (inputEmail.value === "") {
    inputEmail.style.borderColor = "red";
    document.querySelector(".email").textContent = "Please enter your email!";
    allInputsValid = false;
  } else {
    inputEmail.style.borderColor = "";
    document.querySelector(".email").textContent = "";
  }

  if (messageText.value === "") {
    messageText.style.borderColor = "red";
    document.querySelector(".text").textContent =
      "Please write any message here!";
    allInputsValid = false;
  } else {
    messageText.style.borderColor = "";
    document.querySelector(".text").textContent = "";
  }

  // Clearing Input values

  if (allInputsValid) {
    inputName.value = "";
    inputEmail.value = "";
    inputSurname.value = "";
    messageText.value = "";

    setTimeout(() => {
      alert("Successfully Submitted Thanks!");
    }, 1000);
  }
});
