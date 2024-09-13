const display = document.getElementById('display');

function appendNumber(number) {
    if (display.value === "0") {
        display.value = number;
    } else {
        display.value += number;
    }
}

function appendOperator(operator) {
    if (operator === "x") {
        display.value += ` x `;
    } else {
        display.value += operator;
    }
}

function deleteNumber() {
    display.value = display.value.slice(0, -1);
    if (display.value === '') {
        display.value = '0';
    }
}

function resetDisplay() {
    display.value = "0";
}

function calculate() {
    try {
        // Replace "x" with "*" 
        let expression = display.value.replace(/x/g, "*");
        
        // Evaluate the expression
        let result = eval(expression);
        
        if (Number.isInteger(result)) {
            display.value = result;
        } else {
            display.value = result.toFixed(3); //  3 decimal places
        }
    } catch (error) {
        display.value = "Error";
    }
}
