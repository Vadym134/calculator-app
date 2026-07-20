const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let firstNumber 
let operator
let secondNumber
let displayText = '';
let isResult = false;
const MAX_INPUT_LENGTH = 12;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const type = button.dataset.type;
    const value = button.dataset.value;

    if (type === "number") {
        if (currentInput === "Error" || isResult === true) {
          isResult = false;
          currentInput = '';
          displayText = '';
          display.textContent = displayText;
        }
        if (currentInput.length === MAX_INPUT_LENGTH) {
          return
        } 
        currentInput += value;
        displayText += value;
        display.textContent = displayText;

    } else if (type === "operator") {
        if (currentInput === "") {
          return;
        }
        isResult = false;
        firstNumber = currentInput;
        operator = value;
        currentInput = '';

        displayText += operator;
        display.textContent = displayText;

    } else if (type === "action" && value === "C") {
        currentInput = '';
        displayText = '';
        isResult = false;
        display.textContent = '0';

    } else if (type === "action" && value === "=") {
        if (firstNumber === undefined || operator === undefined || currentInput === "") {
          return;
        } 
        secondNumber = currentInput;
        const result = calculate(firstNumber, operator, secondNumber);
        console.log(result);
        currentInput = String(result);
        displayText = String(result);
        isResult = true;
        display.textContent = displayText;
        firstNumber = undefined;
        secondNumber = undefined;
        operator = undefined;
        
    } else if (type === "point" && value === ".") {
        if (currentInput.includes(".")) {
          return;
        }
        if (currentInput === "") {
          currentInput = "0.";
          displayText += "0."
          display.textContent = displayText;
          return;
        }
        currentInput += value;
        displayText += value;
        display.textContent = displayText;
    }

  });
});

function calculate(firstNumber, operator, secondNumber) {
  if (operator === "+") {
    return Number(firstNumber) + Number(secondNumber);
  } else if (operator === "-") {
    return Number(firstNumber) - Number(secondNumber);
  } else if (operator === "*") {
    return Number(firstNumber) * Number(secondNumber);
  } else if (operator === "/" && Number(secondNumber) === 0) {
    return "Error";
  } else if (operator === "/") {
    return Number(firstNumber) / Number(secondNumber);
  } 
}