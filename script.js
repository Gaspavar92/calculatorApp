
// Defining variables holding the numbers inputted by the user

let num1 = 0;
let num2 = 0;

// Functions for basic operations

const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    return a / b;
}

// Defining a function that takes as parameters the numbers input and the selected operation

let operation = add;

const operate = (num1, operation, num2) => {
    return operation(num1, num2);
}




