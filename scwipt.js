

// function increment() {
//     console.log("fart");
//     count += clickPower;
//     let countDisplayElement = document.getElementById("countDisplay");
//     countDisplayElement.innerHTML = count;
// }

// function increaseClick() {
//     clickPower += 1;
// }

let op1 = 0;
let op2 = 0;
let operator = "";

function operandPress(operand) {
    if (operator === "") {
        op1 = op1 * 10 + operand;
        document.getElementById("calculatorScreen").innerHTML = op1;
    }
    else {
        op2 = op2 * 10 + operand;
        document.getElementById("calculatorScreen").innerHTML = op2;
    }
}

function operatorPress(op) {
    operator = op;
    document.getElementById("calculatorScreen").innerHTML = operator;
}

function equalsPress() {
    switch (operator) {
        case "+":
            op1 = op1 + op2;
            break;
        case "-":
            op1 = op1 - op2;
            break;
        case "X":
            op1 = op1 * op2;
            break;
        case "/":
            op1 = op1 / op2;
    }

    document.getElementById("calculatorScreen").innerHTML = op1;
}