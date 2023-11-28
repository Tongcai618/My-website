function getValue() {
    let n = document.getElementById("name");
    let nValue = n.value;

    let result = document.getElementById("nameResult");
    result.innerText = nValue;
}
function calValue() {
    let n = document.getElementById("number");
    let nValue = n.value;

    let result = document.getElementById("result");
    result.innerText
}

function calculateExpression() {
    let input = document.getElementById("expression").value;
    try {
        let result = evaluateExpression(input);
        document.getElementById("numberResult").innerText = result;
    } catch (error) {
        document.getElementById("numberResult").innerText = "Invalid expression";
    }
}

function evaluateExpression(expr) {
    // Split the expression by space to separate numbers and operators
    let tokens = expr.split(' ');

    // Stack for numbers
    let values = [];

    // Stack for Operators
    let ops = [];

    for (let i = 0; i < tokens.length; i++) {
        if (!isNaN(tokens[i])) {
            // If token is a number, push it to stack for numbers
            values.push(parseFloat(tokens[i]));
        } else if (tokens[i] === "+" || tokens[i] === "-" || tokens[i] === "*" || tokens[i] === "/") {
            // While the top of ops has the same or greater precedence to current token,
            // which is an operator. Apply operator on top of ops to top two elements in values stack.
            while (ops.length !== 0 && hasPrecedence(tokens[i], ops[ops.length - 1])) {
                values.push(applyOp(ops.pop(), values.pop(), values.pop()));
            }

            // Push current token to ops.
            ops.push(tokens[i]);
        }
    }

    // Entire expression has been parsed, apply remaining ops to remaining values
    while (ops.length !== 0) {
        values.push(applyOp(ops.pop(), values.pop(), values.pop()));
    }

    // Top of values contains result, return it
    return values.pop();
}

function hasPrecedence(op1, op2) {
    if (op2 === "(" || op2 === ")") {
        return false;
    }
    if ((op1 === "*" || op1 === "/") && (op2 === "+" || op2 === "-")) {
        return false;
    }
    return true;
}

function applyOp(op, b, a) {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/':
            if (b === 0) {
                throw "Cannot divide by zero";
            }
            return a / b;
    }
}