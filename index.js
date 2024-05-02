let number = 0;

function increase(event) {
  event.preventDefault();

  number += 1;
  let passangerElement = document.querySelector("#passangers");
  passangerElement.innerHTML = number;
}

let increaseButton = document.querySelector("#increase-btn");
increaseButton.addEventListener("click", increase);

function save(event) {
  event.preventDefault();
  let saveElement = document.querySelector("#previous-entries");
  let saveStr = number + " - ";
  saveElement.innerHTML += saveStr;
  passangerElement.innerHTML = 0;
  number = 0;
}

let saveButton = document.querySelector("#save-btn");
saveButton.addEventListener("click", save);
