let firstNumber = null;
let secondNumber = null;
let result = null;
let selectedOperator = "";
let displayValue = "";

const displayContainer = document.querySelector(".display");


const operate = function(operator, left, right) {
    switch(operator) {
        case "+":
            return add(left, right);
        case "-":
            return subtract(left, right);
        case "*":
            return multiply(left, right);
        case "/":
            return divide(left, right);
        default:
            return null;
    }
}

const add = function(left, right) {
    return left + right;
}

const subtract = function(left, right) {
    return left - right;
}

const multiply = function(left, right) {
    return left * right;
}

const divide = function(left, right) {
    return left / right;
}

const updateDisplay = function(newValue) {
    displayContainer.textContent = displayValue;
}

const selectOperator = function(value) {
    selectedOperator = value;
    firstNumber = Number(displayValue);
    operator = value;
    displayValue = "";
}

const submitOperation = function() {
    if(firstNumber === null) {
        return;
    } else {
        secondNumber = Number(displayValue);
        result = operate(selectedOperator, firstNumber, secondNumber);
    }

    displayValue = result;
    updateDisplay();

    // Reset for next operation
    displayValue = "";
    firstNumber = null;
}

const clearData = function() {
    firstNumber = 0;
    secondNumber = 0;
    result = 0;
    operator = "";
    displayValue = "";
    displayContainer.textContent = "0";
}

const onButtonPressed = function(value) {
    switch(value) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            displayValue += value;
            updateDisplay();
            break;
        case ".":
            if(!displayValue.includes(".")) {
                displayValue += value;
                updateDisplay();
            }
            break;
        case "+":
        case "-":
        case "*":
        case "/":
            selectOperator(value);
            break;
        case "=":
            submitOperation();
            break;
        case "C":
            clearData();
            break;
        default:
            break;
    }
}