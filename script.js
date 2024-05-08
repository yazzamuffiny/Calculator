//define variables
//get display element and set operands to empty strings       

const display = document.getElementById("display");
let currentOperand = "";
let previousOperand = "";
let operation = "";

//----helper functions

//update display
function updateDisplay() {
    display.value = currentOperand;
}

//append number to current operand
function appendNumber(number) {
    currentOperand += number;
    updateDisplay()
}

//set the chosen operand and reset the current
function chooseOperation(op) {
    previousOperand = currentOperand;
    currentOperand = "";
    operation = op;
}

//calculate
function calculate() {
    let result;
    //switch statement
    switch(operation) {
        case "+":
            //what happens if case is true
            result = parseFloat(previousOperand) + parseFloat(currentOperand);
            break;
        case "-":
            //what happens if case is true
            result = parseFloat(previousOperand) - parseFloat(currentOperand);
            break;
        case "*":
            result = parseFloat(previousOperand) * parseFloat(currentOperand);
            break;
        case "/":
            result = parseFloat(previousOperand) / parseFloat(currentOperand);
            break;
    }
    currentOperand = result.toString();
    updateDisplay();
}

//----event listeners 
//need one for each number button - run the append number function on each number button

document.querySelectorAll(".number").forEach(function(button) {
    button.addEventListener("click", function () {
        appendNumber(button.textContent);
    })
});

//operators 
document.querySelectorAll(".operator").forEach(function(button) {
    button.addEventListener("click", function () {
        chooseOperation(button.textContent);
    });
});

//clear button
document.getElementById("clear").addEventListener("click", function() {
    currentOperand = "";
    previousOperand = "";
    operation = "";
    updateDisplay();
});

//decimal point
document.getElementById("decimal").addEventListener("click", function() {
    if(!currentOperand.includes(".")) {
        appendNumber(".");
    }
});

// calculate
document.getElementById("calculate").addEventListener("click", function () {
    calculate();
});