function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    if (b === 0) {
        return "Division By Zero!"
    }
    return a / b;
}
function operate(a, op, b) {
    if (op === "+") return add(a, b);
    if (op === "-") return sub(a, b);
    if (op === "*") return mul(a, b);
    if (op === "/") return div(a, b);
}
function roundIfNeeded(val) {
    if (typeof val === "number" && !Number.isInteger(val)) {
        return Math.round(val * 100) / 100;
    }
    return val;
}

const digis = document.querySelectorAll(".digits");
let op1 = "";
let op2 = "";
let currentOp = null;
let disp = document.querySelector(".display");
for (let i = 0; i < digis.length; i++) {
    digis[i].addEventListener("click", function (e) {
        if (currentOp === null) {
            op1 += e.target.textContent;
            disp.textContent = op1;
        } else {
            op2 += e.target.textContent;
            disp.textContent = op2;
        }
    });
}
const equalBtn = document.querySelector(".equal");
equalBtn.addEventListener("click", function () {
    if (op1 && currentOp && op2) {
        let result = operate(Number(op1), currentOp, Number(op2));
        result = roundIfNeeded(result);
        op1 = String(result);
        op2 = "";
        currentOp = null; // reset operator after =
        disp.textContent = op1;
    }
});

const ops = document.querySelectorAll(".operator");
for (let i = 0; i < ops.length; i++) {
    ops[i].addEventListener("click", function (e) {
        const op = e.target.textContent;
        if (op1 && currentOp && op2) {
            let result = operate(Number(op1), currentOp, Number(op2));
            result = roundIfNeeded(result);
            op1 = String(result);
            op2 = "";
            disp.textContent = op1;
        }
        currentOp = op;
    });
}
const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", function (e) {
    op1 = "";
    op2 = "";
    currentOp = null;
    disp.textContent = "";
});



