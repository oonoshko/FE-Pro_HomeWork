let userName = prompt('What is your name?');
let userSurname = prompt('What is your Surname?');
let favoriteNumber = prompt('What is your favorite number?');

console.log(`Hello ${userName} ${userSurname}! Your favorite number is ${favoriteNumber}`);

let num1 = prompt('Enter first number?',0);
let num2 = prompt('Enter second number?',0);

console.log(`Sum ${num1} + ${num2} is ${+num1 + +num2}`);
console.log(`Sum ${num1} - ${num2} is ${+num1 - +num2}`);
console.log(`Sum ${num1} * ${num2} is ${+num1 * +num2}`);
console.log(`Sum ${num1} / ${num2} is ${+num1 / +num2}`);

let yearBorn = prompt('In what year were you born?');
let age = 2022 - yearBorn;
console.log(`Your age is ${age} years.`);

let number1 = 125;
let number2 = 10;
console.log(`Остача від ділення числа ${number1} на число ${number2} рівна ${number1 %= number2}`);

let number = prompt('Enter a number?',0);
result = (number % 2 == 0) ? "even" : "odd";
console.log(`The number is ${result}.`);
