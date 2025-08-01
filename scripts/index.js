const popUp = document.querySelector(".popup");
const closeButton = document.querySelector(".popup__button-close");
const editButton = document.querySelector(".main__button-edit");

const nameInput = document.querySelector("#completename");
const aboutInput = document.querySelector("#occupation");
const form = document.querySelector(".form");
const userName = document.querySelector(".main__profile-completename");
const userAbout = document.querySelector(".main__profile-occupation");
closeButton.addEventListener("click", function () {
  popUp.classList.add("popup-hidden");
});

editButton.addEventListener("click", function () {
  popUp.classList.remove("popup-hidden");
  nameInput.value = userName.textContent;
  aboutInput.value = userAbout.textContent;
});
form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userAbout.textContent = aboutInput.value;
  popUp.classList.add("popup-hidden");
});
