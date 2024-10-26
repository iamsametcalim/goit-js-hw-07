function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.getElementById("controls");
const boxesContainer = document.getElementById("boxes");
const input = controls.querySelector("input");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");

createButton.addEventListener("click", () => {
  const amount = parseInt(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  }
});

destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  destroyBoxes();
  let boxSize = 30;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxSize += 10;
    fragment.appendChild(box);
  }

  boxesContainer.appendChild(fragment);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
