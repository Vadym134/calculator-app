const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let currentInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const type = button.dataset.type;
    const value = button.dataset.value;

    console.log(type, value);
    
    currentInput += value;
    display.textContent = currentInput;
  });
});

if (type === number) {
    currentInput += value;
} 