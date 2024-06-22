let firstNumber = 0;
let secondNumber = 0;
let operator = "";


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