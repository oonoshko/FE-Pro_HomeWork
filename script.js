/*  1. Створити калькулятор, як приклад у прикріпленому відео
    2. Не обов'язково ідеально повинен бути той самий дизайн, стилі, ефекти, тощо. Головне - функіонал. Стилі та ефекти - на власний смак та розсуд
    3. Функціонал повинен бути зрозумілим та робочим
    4. Ділення на 0 або інші математично не правильні операції - закінчуватись повідомленням - Not a number, або Error: Invalid operation
    5. Кнопка АС - затирає вміст на екрані вводу
    6. Кнопки % та +/- НЕ ПОТРІБНО додавати */

let num1 = "";
let num2 = "";
let sign = "";
let finish = false;

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const operator = ["-", "+", "x", "/"];

const display = document.querySelector(".calculatorScreen p");
const ac = document.querySelector(".ac");

ac.addEventListener("click", () => {
  num1 = "";
  num2 = "";
  sign = "";
  finish = false;
  display.textContent = 0;
  display.classList.remove("fontSize");
});

const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (event) => {
  if (!event.target.classList.contains("btn")) {
    return;
  }
  if (event.target.classList.contains("ac")) {
    return;
  }
  if (event.target.classList.contains("dot")) {
    if (num1.includes(".") || num2.includes(".")) {
      return;
    }
  }

  display.textContent = "";

  const key = event.target.textContent;

  if (num1.length > 7 || num2.length > 7) {
    display.classList.add("fontSize");
    display.textContent = "Number is too long";
    return;
  }

  if (numbers.includes(key)) {
    if (num2 === "" && sign === "") {
      num1 += key;
      display.textContent = num1;
    } else if (num1 !== "" && num2 !== "" && finish) {
      num2 = key;
      finish = false;
      display.textContent = num2;
    } else {
      num2 += key;
      display.textContent = num2;
    }
    return;
  }

  if (operator.includes(key)) {
    sign = key;
    display.textContent = sign;
    return;
  }

  if (key === "=") {
    if (num2 === "") {
      num2 = num1;
    }
    switch (sign) {
      case "+":
        num1 = Number(num1) + Number(num2);
        break;
      case "-":
        num1 -= num2;
        break;
      case "x":
        num1 *= num2;
        break;
      case "/":
        if (num2 === "0" || num1 === "0") {
          display.classList.add("fontSize");
          display.textContent = "Error: Invalid operation";
          return;
        }
        num1 /= num2;
        break;
      default:
        console.log("Please add operator");
    }
    finish = true;
    display.textContent = num1;
  }

  if (num1.toString().length > 14) {
    display.classList.add("fontSize");
    display.textContent = "Result is too long";
  } else if (num1.toString().length > 7) {
    display.classList.add("fontSize");
  }
});

/*  1. Створити ToDo List, як на прикладі у прикліпленому відео
    2. Кожен елемент - додається при кліку на кнопку
    3. Стилі та ефекти - на власний смак та розсуд */

const wrapper = document.querySelector(".wrapper");
const input = document.querySelector("#input");
const button = document.querySelector("#btn");

const result = document.createElement("ul");
wrapper.append(result);

button.addEventListener("click", () => {
  if (input.value === "") {
    return;
  }
  createDeleteElements(input.value);
  input.value = "";
});

// create, add and delete tasks

function createDeleteElements(value) {
  const li = document.createElement("li");
  li.classList.add("li");
  li.innerHTML = value;

  const btn = document.createElement("button");
  btn.classList.add("btn-red");
  btn.innerHTML = "Delete";
  li.appendChild(btn);

  // remove todo Task

  btn.addEventListener("click", () => {
    result.removeChild(li);
  });

  // toggle class li-active

  li.addEventListener("click", () => {
    li.classList.toggle("li-active");
  });

  result.appendChild(li);
}
