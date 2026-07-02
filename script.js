const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let currentInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const type = button.dataset.type;
    const value = button.dataset.value;

   // console.log(type, value);

    if (type === "number" || type === "operator") {
        currentInput += value;
        display.textContent = currentInput;
    } else if (type === "action" && value === "C") {
        currentInput = '';
        display.textContent = '0';
    }

  });
});   