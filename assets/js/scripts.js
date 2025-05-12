const subtractBtn = document.getElementById("subtract");
const addBtn = document.getElementById("add");
const resetBtn = document.getElementById("reset");
const counterDisplay = document.getElementById("currentNumber");

let count = 0;

function updateCounter() {
  counterDisplay.textContent = count;

  if (count < 0) {
    counterDisplay.classList.add("negative");
  } else {
    counterDisplay.classList.remove("negative");
  }
}

addBtn.addEventListener("click", () => {
  count++;
  updateCounter();
});

subtractBtn.addEventListener("click", () => {
  count--;
  updateCounter();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateCounter();

  counterDisplay.classList.add("negative");
  setTimeout(() => {
    counterDisplay.classList.remove("negative");
  }, 500);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    count++;
    updateCounter();
  } else if (e.key === "ArrowDown") {
    count--;
    updateCounter();
  } else if (e.key === "r" || e.key === "R") {
    count = 0;
    updateCounter();
  }
});

updateCounter();
