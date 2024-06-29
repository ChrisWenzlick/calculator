let firstNumber = 0;
let secondNumber = 0;
let operator = "";
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

const updateDisplay = function(newInput) {
    displayValue += newInput;
    displayContainer.textContent = displayValue;
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
            updateDisplay(value);
            break;
        default:
            break;
    }
}