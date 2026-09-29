const firstNumberInput = document.getElementById("firstNumber");
const secondNumberInput = document.getElementById("secondNumber");
const result = document.getElementById("result");

function calculate(operation) {
  const firstNumber = Number(firstNumberInput.value);
  const secondNumber = Number(secondNumberInput.value);

  if (!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)) {
    result.textContent = "Vui lòng nhập hai số nguyên.";
    return;
  }

  if (operation === "divide" && secondNumber === 0) {
    result.textContent = "Không thể chia cho 0.";
    return;
  }

  result.textContent =
    operation === "multiply"
      ? firstNumber * secondNumber
      : firstNumber / secondNumber;
}

document
  .getElementById("multiplyButton")
  .addEventListener("click", () => calculate("multiply"));
document
  .getElementById("divideButton")
  .addEventListener("click", () => calculate("divide"));
