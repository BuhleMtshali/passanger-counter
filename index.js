let passangerElement = document.querySelector("#passangers");
let passangerNumber = 0;

function increase() {
  passangerNumber += 1;

  passangerElement.innerHTML = passangerNumber;
}

let increaseButton = document.querySelector("#increase-btn");
increaseButton.addEventListener("click", increase);
