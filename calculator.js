const add = (num) => Number(num.reduce((acc, curr) => acc + curr, 0).toFixed(2))

const subtract = (num) => Number(num.reduce((acc, curr) => acc - curr).toFixed(2))

const multiply = (num) => Number(num.reduce((acc, curr) => acc * curr).toFixed(2))

const divide = (num) => Number(num.reduce((acc, curr) => acc / curr).toFixed(2))

const buttons = document.querySelector("#calculator .buttons")
const input = document.querySelector("input")

const numButtons = [7, 8, 9, "Del", 4, 5, 6, "*", 1, 2, 3, "/", 0, "+", "-", "="]
const operators = ["+", "-", "*", "/", "Del", "="]

const isOperator = (value) => operators.find(operator => value === operator)

let op = "";
const showCalculator = () => {

  numButtons.forEach((item) => {
    const button = document.createElement("button");
    button.textContent = item;
    if (operators.includes(item)) { button.setAttribute("style", "background-color: rgb(3 105 161);color: var(--foreground)") }
    button.addEventListener("click", () => getInputValue(item.toString()));
    buttons.appendChild(button);
  })
}


// Check the value
const getInputValue = (value) => {
  if (typeof parseInt(value) !== NaN && value !== "=") {
    input.value += value
  }

  // if value is an mathematic operator
  if (isOperator(value)) {
    if (value === "=") {
      const nums = input.value.split(op).map(num => parseInt(num))

      if (op === "+") input.value = add(nums)
      else if (op === "-") input.value = subtract(nums)
      else if (op === "*") input.value = multiply(nums)
      else if (op === "/") input.value = divide(nums)
    }
    else op = value;
  }

  if (value.toLowerCase() === "del") input.value = "";
}

showCalculator()