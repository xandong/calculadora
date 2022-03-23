const display = document.querySelector("#display");
const displayOperador = document.querySelector("#display-operador");

let [num1, num2, res, operador, isNum1, lastClickIsOperador] = [
  0,
  0,
  0,
  0,
  true,
  false,
];

function invertStateNum() {
  isNum1 = !isNum1;
}

function clickNum(num) {
  isNum1 ? (num1 = addNum(num1, num)) : (num2 = addNum(num2, num));
}

function addNum(num, recebe) {
  num == 0 ? (num = recebe) : (num = num * 10 + recebe);
  display.innerHTML = `${num.toFixed(2)}`;
  lastClickIsOperador = false;
  return num;
}

function selectOperator(op) {
  if (operador == 0) {
    invertStateNum();
  } else if (operador != 0) {
    if (lastClickIsOperador) {
      return;
    } else if (num1 != 0 && num2 != 0) {
      igual();
    } else {
    }
  }
  operador = op;
  displayOperador.innerHTML = `${op}`;
  // console.log(`Eh num1: ${isNum1}`);
  // console.log(`Operador: ${operador}`);
}

function igual() {
  if (operador == "+") res = num1 + num2;
  else if (operador == "-") res = num1 - num2;
  else if (operador == "*") res = num1 * num2;
  else if (operador == "/") res = num1 / num2;
  if (res == Infinity) {
    reset(0);
    (res = 0), (display.innerHTML = "Error");
  }
  // console.log(`${num1} ${operador} ${num2} = ${res}`);
  reset(res);
  // console.log(`${num1} ${operador} ${num2} = ${res}`);
}

function reset(res) {
  invertStateNum();
  [num1, num2, operador] = [res, 0, 0];
  displayOperador.innerHTML = "";
  display.innerHTML = `${res.toFixed(2)}`;
}
