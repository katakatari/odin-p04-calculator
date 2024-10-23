const add = (...num) => {
  return num.reduce((acc, curr) => acc + curr, 0)
};

const subtract = (...num) => {
  return num.reduce((acc, curr) => acc - curr, 0)
}

const multiply = (...num) => {
  return num.reduce((acc, curr) => acc * curr)
}

const divide = (...num) => {
  return num.reduce((acc, curr) => acc / curr)
}

const run = (a, op, b) => {
  if (op === "+") return add(a, b);
  else if (op === "-") return subtract(a, b);
  else if (op === "*") return multiply(a, b);
  else if (op === "/") return divide(a, b);
}