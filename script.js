const allNumbers = document.querySelector("#allNumbers");

const showNumbers = (num) => {
  const numbers = document.createElement("div");
  numbers.classList.add("number");
  numbers.textContent = num;

  let isPrime = num > 1;
  for (let j = 2; j <= Math.sqrt(num); j++) {
    if (num % j === 0) {
      isPrime = false;
      break;
    }
  }
  numbers.style.backgroundColor = isPrime
    ? "red"
    : num % 2 === 0
    ? "green"
    : "blue";
  allNumbers.appendChild(numbers);
};

for (let i = 1; i <= 1000; i++) {
  showNumbers(i);
}

const button = document.querySelector(".button");
const input = document.querySelector(".input");

button.addEventListener("click", () => {
  const currentNum = input.value;
  allNumbers.innerHTML = "";

  for (let k = 1; k < currentNum; k++) {
    showNumbers(k);
  }
});

input.addEventListener("input", () => {
  if (input.value === "") {
    allNumbers.innerHTML = "";
    for (let i = 1; i <= 1000; i++) {
      showNumbers(i);
    }
  }
});