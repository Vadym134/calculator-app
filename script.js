const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let firstNumber 
let operator
let secondNumber
let displayText = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const type = button.dataset.type;
    const value = button.dataset.value;

    if (type === "number") {
        if (currentInput === "Error") {
          currentInput = '';
          displayText = '';
        }
        currentInput += value;
        displayText += value;
        display.textContent = displayText;

    } else if (type === "operator") {
        if (currentInput === "") {
          return;
        }
        firstNumber = currentInput;
        operator = value;
        currentInput = '';

        displayText += operator;
        display.textContent = displayText;

    } else if (type === "action" && value === "C") {
        currentInput = '';
        displayText = '';
        display.textContent = '0';

    } else if (type === "action" && value === "=") {
        secondNumber = currentInput;
        const result = calculate(firstNumber, operator, secondNumber);
        console.log(result);
        currentInput = String(result);
        displayText = String(result);
        display.textContent = displayText;
        firstNumber = undefined;
        secondNumber = undefined;
        operator = undefined;
    }

    console.log(firstNumber, operator, currentInput);

  });
});

function calculate(firstNumber, operator, secondNumber) {
  if (operator === "+") {
    return Number(firstNumber) + Number(secondNumber);
  } else if (operator === "-") {
    return Number(firstNumber) - Number(secondNumber);
  } else if (operator === "*") {
    return Number(firstNumber) * Number(secondNumber);
  } else if (operator === "/" && secondNumber === "0") {
    return "Error";
  } else if (operator === "/") {
    return Number(firstNumber) / Number(secondNumber);
  } 
}

