let a = +prompt("Введіть перше число");
let op = prompt("Введіть оператор (+,-,*,/,^)");
let b = +prompt("Введіть друге число");



function calc(a, b, op) {
    if (isNaN(a) || isNaN(b)) {
        alert('error');
    }
    else if (op == "+") {
        return a + b;
    }
    else if (op == "-") {
        return a - b;
    }
    else if (op == "*") {
        return a * b;
    }
    else if (op == "/") {
        return a / b;
    }
    else if (op == "^") {
        return a ** b;
    }
    else {
        alert('error');
    }
}

let result = calc(a, b, op);
document.querySelector("#first").innerHTML = "Перше число: " + a;
document.querySelector("#second").innerHTML = "Друге число: " + b;
document.querySelector("#result").innerHTML = "Результат: " + result;
