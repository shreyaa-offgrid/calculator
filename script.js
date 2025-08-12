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
        return "Division By Zero Error"
    }
    return a / b;
}
function operate(a, op, b) {
    if (op === "+") return add(a, b);
    if (op === "-") return sub(a, b);
    if (op === "*") return mul(a, b);
    if (op === "/") return div(a, b);

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

const ops = document.querySelectorAll(".operator");
for (let i = 0; i < ops.length; i++) {
    ops[i].addEventListener("click", function (e) {
        const op = e.target.textContent;
        if (op !== "=") {
            currentOp = op;
            disp.textContent = op1 + currentOp;
        } else {
            if (op1 !== "" && currentOp && op2 !== "") {
                const result = operate(Number(op1), currentOp, Number(op2));
                disp.textContent = result;
                op1 = String(result);
                op2 = "";
                currentOp = null;
            }




        }
    });
}



