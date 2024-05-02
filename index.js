let number = 0;

function increase(event) {
  event.preventDefault();

  number += 1;
  let passangerElement = document.querySelector("#passangers");
  passangerElement.innerHTML = number;
}

let increaseButton = document.querySelector("#increase-btn");
increaseButton.addEventListener("click", increase);
