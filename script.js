let userName = prompt('What is your name?');
let userSurname = prompt('What is your Surname?');
let favoriteNumber = prompt('What is your favorite number?');

console.log(`Hello ${userName} ${userSurname}! Your favorite number is ${favoriteNumber}`);

let num1 = prompt('Enter first number?',0);
let num2 = prompt('Enter second number?', 0);

let addition = +num1 + +num2;
let subtraction = +num1 - +num2;
let multiplication = +num1 * +num2;
let division = +num1 / +num2;

console.log(`Sum ${num1} + ${num2} is ${addition}`);
console.log(`Sum ${num1} - ${num2} is ${subtraction}`);
console.log(`Sum ${num1} * ${num2} is ${multiplication}`);
console.log(`Sum ${num1} / ${num2} is ${division}`);

let yearBorn = prompt('In what year were you born?');
let age = 2022 - yearBorn;
console.log(`Your age is ${age} years.`);

let number1 = 125;
let number2 = 10;
let resultModulus = `Остача від ділення числа ${number1} на число ${number2} рівна ${number1 %= number2}`;
console.log(resultModulus);

let number = prompt('Enter a number?',0);
result = (number % 2 == 0) ? "even" : "odd";
console.log(`The number is ${result}.`);
