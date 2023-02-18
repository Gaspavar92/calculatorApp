
// Defining variables holding the numbers inputted by the user

let numArray = [];
let num1 = 0;
let num2 = 0;
let operationFunction = null;
let result = 0;

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
    result = operation(num1, num2);
}

// Defining button event listeners to activate functions

const number1 = document.querySelector(".num1");
const number2 = document.querySelector(".num2");
const number3 = document.querySelector(".num3");
const number4 = document.querySelector(".num4");
const number5 = document.querySelector(".num5");
const number6 = document.querySelector(".num6");
const number7 = document.querySelector(".num7");
const number8 = document.querySelector(".num8");
const number9 = document.querySelector(".num9");
const number0 = document.querySelector(".num0");

const addition = document.querySelector(".addition");
const subtraction = document.querySelector(".subtraction");
const multiplication = document.querySelector(".multiplication");
const division = document.querySelector(".division");
const equals = document.querySelector(".equals");

const dot = document.querySelector(".dot")


// Targeting the div that contains the display's numbers

const calcDisplay = document.querySelector(".display");


number1.addEventListener("click", () => {
    numArray.push(number1.textContent)
    calcDisplay.textContent = numArray.join("");
})

number2.addEventListener("click", () => {
    numArray.push(number2.textContent)
    calcDisplay.textContent = numArray.join("");
})

number3.addEventListener("click", () => {
    numArray.push(number3.textContent)
    calcDisplay.textContent = numArray.join("");
})

number4.addEventListener("click", () => {
    numArray.push(number4.textContent)
    calcDisplay.textContent = numArray.join("");
})

number5.addEventListener("click", () => {
    numArray.push(number5.textContent)
    calcDisplay.textContent = numArray.join("");
})

number6.addEventListener("click", () => {
    numArray.push(number6.textContent)
    calcDisplay.textContent = numArray.join("");
})

number7.addEventListener("click", () => {
    numArray.push(number7.textContent)
    calcDisplay.textContent = numArray.join("");
})

number8.addEventListener("click", () => {
    numArray.push(number8.textContent)
    calcDisplay.textContent = numArray.join("");
})

number9.addEventListener("click", () => {
    numArray.push(number9.textContent)
    calcDisplay.textContent = numArray.join("");
})

number0.addEventListener("click", () => {
    numArray.push(number0.textContent)
    calcDisplay.textContent = numArray.join("");
})

dot.addEventListener("click", () => {
    numArray.push(dot.textContent)
    calcDisplay.textContent = numArray.join("")
})

addition.addEventListener("click", () => {
    if (num1 == 0) {
        num1 = parseFloat(calcDisplay.textContent);
        calcDisplay.textContent = "";
    } else {
        num2 = parseFloat(calcDisplay.textContent);
        calcDisplay.textContent = "";
    }
    if (num1 && num2) {
        operate(num1, operationFunction, num2)
        if (result.toString().includes(".") && result.toString().length > 9) {
            calcDisplay.textContent = parseFloat(result.toFixed(9));
        } else {
            calcDisplay.textContent = result;
        }
        num1 = result;
        num2 = 0;
    }
    numArray = [];
    operationFunction = add;
})

subtraction.addEventListener("click", () => {
    if (num1 == 0) {
        num1 = parseFloat(calcDisplay.textContent);
        calcDisplay.textContent = "";
    } else {
        num2 = parseFloat(calcDisplay.textContent);
        calcDisplay.textContent = "";
    }
    if (num1 && num2) {
        operate(num1, operationFunction, num2)
        if (result.toString().includes(".") && result.toString().length > 9) {
            calcDisplay.textContent = parseFloat(result.toFixed(9));
        } else {
            calcDisplay.textContent = result;
        }
        num1 = result;
        num2 = 0;
    }
    numArray = [];
    operationFunction = subtract;
    })

division.addEventListener("click", () => {
    if (num1 == 0) {
        num1 = parseFloat(calcDisplay.textContent);
        calcDisplay.textContent = "";
    } else {
        num2 = parseFloat(calcDisplay.textContent);
        calcDisplay.textContent = "";
    }
    if (num1 && num2) {
        operate(num1, operationFunction, num2)
        if (result.toString().includes(".") && result.toString().length > 9) {
            calcDisplay.textContent = parseFloat(result.toFixed(9));
        } else {
            calcDisplay.textContent = result;
        }
        num1 = result;
        num2 = 0;
    }
    numArray = [];
    operationFunction = divide;
    })

multiplication.addEventListener("click", () => {
    if (num1 == 0) {
        num1 = parseFloat(calcDisplay.textContent);
        calcDisplay.textContent = "";
    } else {
        num2 = parseFloat(calcDisplay.textContent);
        calcDisplay.textContent = "";
    }
    if (num1 && num2) {
        operate(num1, operationFunction, num2)
        if (result.toString().includes(".") && result.toString().length > 9) {
            calcDisplay.textContent = parseFloat(result.toFixed(9));
        } else {
            calcDisplay.textContent = result;
        }
        num1 = result;
        num2 = 0;
    }
    numArray = [];
    operationFunction = multiply;
    })

    // Equals function

    const equalFunction = () => {
        num2 = parseFloat(calcDisplay.textContent)
        if (operationFunction == divide && num2 == 0) {
            alert("You can't divide by zero!")
            calcDisplay.textContent = "";
            numArray = [];
            num1 = 0;
            num2 = 0;
            return
        } else {
           operate(num1, operationFunction, num2) 
        }
        if (result.toString().includes(".") && result.toString().length > 9) {
            calcDisplay.textContent = parseFloat(result.toFixed(9));
        } else {
            calcDisplay.textContent = result;
        }
        num1 = 0;
        num2 = 0;
    }

equals.addEventListener("click", equalFunction)

// Defining function to clear the display

const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");

clearButton.addEventListener("click", () => {
    num1 = 0;
    num2 = 0;
    numArray = [];
    calcDisplay.textContent = "";
})

deleteButton.addEventListener("click", () => {
    numArray.splice(-1);
    calcDisplay.textContent = numArray.join("");
})