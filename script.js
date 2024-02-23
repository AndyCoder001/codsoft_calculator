const display = document.getElementById('display');
let firstOperand = null;
let secondOperand = null;
let currentOperator = null;

function appendNumber(number) {
    if (currentOperator === null) {
        firstOperand = firstOperand !== null ? parseFloat(`${firstOperand}${number}`) : number;
        display.value = firstOperand;
    } else {
        secondOperand = secondOperand !== null ? parseFloat(`${secondOperand}${number}`) : number;
        display.value = secondOperand;
    }
}

function setOperator(operator) {
    if (firstOperand !== null && secondOperand !== null) {
        calculateResult();
    }
    currentOperator = operator;
}

function calculateResult() {
    let result;
    const prevOperator = currentOperator;

    if (firstOperand !== null && secondOperand !== null) {
        switch (prevOperator) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '/':
                if (secondOperand === 0) {
                    alert('Error: Division by zero is not allowed.');
                    return;
                }
                result = firstOperand / secondOperand;
                break;
            default:
                return;
        }
        firstOperand = result;
        secondOperand = null;
        currentOperator = null;
        display.value = firstOperand;
    }
}

function clearDisplay() {
    firstOperand = null;
    secondOperand = null;
    currentOperator = null;
    display.value = '';
}