
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let operator = '';
let firstOperand = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        if (/[0-9]/.test(buttonText)) {
            currentInput += buttonText;
            updateDisplay();
        } else if (button.classList.contains('decimal')) {
            if (!currentInput.includes('.')) {
                currentInput += '.';
                updateDisplay();
            }
        } else if (button.classList.contains('operator')) {
            if (currentInput !== '') {
                if (firstOperand === null) {
                    firstOperand = parseFloat(currentInput);
                    operator = buttonText;
                    currentInput = '';
                } else {
                    firstOperand = calculate(firstOperand, parseFloat(currentInput), operator);
                    operator = buttonText;
                    currentInput = '';
                    updateDisplay(firstOperand);
                }
            }
        } else if (button.classList.contains('equals')) {
            if (firstOperand !== null && currentInput !== '') {
                const secondOperand = parseFloat(currentInput);
                const result = calculate(firstOperand, secondOperand, operator);
                updateDisplay(result);
                firstOperand = result;
                currentInput = '';
                operator = '';
            }
        } else if (button.classList.contains('clear')) {
            currentInput = '';
            operator = '';
            firstOperand = null;
            updateDisplay();
        }
    });
});

function updateDisplay(value = currentInput) {
    display.textContent = value || '0';
}

function calculate(a, b, op) {
    switch (op) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return b;
    }
}
