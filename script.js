//1. Написати функцію, яка приймає 4 аргументи і шукає найменше число серед них

function minNumber(number1, number2, number3, number4) {
  const result = Math.min(number1, number2, number3, number4);

  if (result === undefined || result === null || !isNaN(result)) {
    return `The min number is ${result}`;
  } else {
    return `Please, enter the correct numbers.`;
  }
}
minNumber();
const resultMinNumber = minNumber(14, 0, -5, `number`);
console.log(resultMinNumber); //Please, enter the correct numbers.
console.log(minNumber(5, -18, 0, -10)); // The min number is -18
console.log(minNumber(5, -18, 0)); // Please, enter the correct numbers.
console.log(minNumber(5, -15, 0, `8`)); // The min number is -15
console.log(minNumber(5, -7, 0, undefined)); // Please, enter the correct numbers.
console.log(minNumber()); // Please, enter the correct numbers.

//2. Написати функцію, яка приймає 2 аргументи та шукає найбільший спільний дільник для них.
//Якщо такого числа немає, то повідомляти про відсутність

const NOD = (num1, num2) => {
  if (
    (num1 && num2 === undefined) ||
    (num1 && num2 === null) ||
    isNaN(num1) ||
    isNaN(num2)
  ) {
    return `Please, enter the correct number.`;
  } else if (num1 === 0 && num2 === 0) {
    return `Please, enter two differnt numbers more or less instead of 0.`;
  } else if (num1 === num2) {
    return `Please, enter two differnt numbers.`;
  } else {
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);
    while (num2) {
      const resultNOD = num2;
      num2 = num1 % num2;
      num1 = resultNOD;
    }
    return `${num1} is the NOD number.`;
  }
};

NOD();
const NOD2 = NOD(0, 0); //Please, enter two differnt numbers.
console.log(NOD2);
console.log(NOD(75, 15)); // 15 is the NOD number.
console.log(NOD(8, 8)); // Please, enter two differnt numbers.
console.log(NOD(15, 48)); // 3 is the NOD number.
console.log(NOD(18, -28)); // 2 is the NOD number.
console.log(NOD(16)); // Please, enter the correct number.
console.log(NOD(8, "number")); // Please, enter the correct number.
console.log(NOD(undefined, 8)); // Please, enter the correct number.
console.log(NOD(9, null)); // Please, enter the correct number.
console.log(NOD(9)); // Please, enter the correct number.

//3. Написати функцію, яка приймає 1 аргумент та перевіряє чи дане число ідеальне

const perfectNumber = function (num1) {
  num1 = Math.round(num1);
  Math.pow(2, num1 - 1) * (Math.pow(2, num1) - 1);

  if (num1 === undefined || num1 === null) {
    return `Please, enter the correct number.`;
  } else if (num1 < 2 || num1 === typeof Number) {
    return `The number ${num1} is not the perfect number.`;
  } else if (!isNaN(num1)) {
    return `The number ${num1} is the perfect number.`;
  } else {
    return `Please, enter the correct number.`;
  }
};

perfectNumber();
const resultOfIdealNumber = perfectNumber();
console.log(perfectNumber(-3)); // The number -3 is not the perfect number.
console.log(perfectNumber(1)); // The number 1 is not the perfect number.
console.log(perfectNumber(2)); // The number 2 is the perfect number.
console.log(perfectNumber(`5`)); // The number 5 is the perfect number.
console.log(perfectNumber(`fdfsa`)); // Please, enter the correct number.
console.log(perfectNumber(undefined)); // Please, enter the correct number.
console.log(perfectNumber(null)); // Please, enter the correct number.
console.log(perfectNumber(7.5)); //The number 8 is the perfect number.

//4. Написати функцію, яка приймає 2 аргументи та обраховує суму в цьому проміжку. Зверніть увагу, що можна
//передати 10 та - 2, як аргументи.Суму всіх чисел в цьому проміжку також треба обчислити

const sumFromTo = function (from, to) {
  if (from === undefined || from === null || isNaN(from)) {
    return `Please, enter the correct number.`;
  } else if (to === undefined || to === null || isNaN(to)) {
    return `Please, enter the correct number.`;
  } else if (from === to) {
    return "Please, enter two different numbers";
  } else if (from > to) {
    let viceVersa = from;
    from = to;
    to = viceVersa;
  }

  let sum = 0;
  for (let i = Number(from); i <= Number(to); i++) {
    sum += i;
  }
  return `Sum of numbers from ${from} to ${to} = ${sum}`;
};

sumFromTo();
const resultSum = sumFromTo(-5, 2); // -12
console.log(resultSum);
console.log(sumFromTo(5, -2)); // 12
console.log(sumFromTo(5, null)); //Please, enter the correct number.
console.log(sumFromTo(5, 5)); //SPlease, enter two different numbers
console.log(sumFromTo(null, 0)); //Please, enter the correct number.
console.log(sumFromTo(undefined, 0)); //Please, enter the correct number.
console.log(sumFromTo(`fsfsa`, 0)); //Please, enter the correct number.
console.log(sumFromTo(`0`, 5)); // 15.

//5. Написати функцію, яка приймає та конвертує температуру із Цельсій у Фаренгейт

function celsiusToFahrenheit(degreeCelsius) {
  if (
    degreeCelsius === undefined ||
    degreeCelsius === null ||
    isNaN(degreeCelsius)
  ) {
    return `Please, enter the correct number.`;
  } else {
    const constanta = 1.8;
    const fahrenheit = 32;
    return `The ${degreeCelsius} °C = ${
      degreeCelsius * constanta + fahrenheit
    } °F`;
  }
}

celsiusToFahrenheit();
const fahrenheitIsEqual = celsiusToFahrenheit(-2);
console.log(fahrenheitIsEqual); //The -2 °C = 28.4 °F
console.log(celsiusToFahrenheit(`0`)); //The 0 °C = 32 °F
console.log(celsiusToFahrenheit(`word`)); //Please, enter the correct number.
console.log(celsiusToFahrenheit(null)); //Please, enter the correct number.
console.log(celsiusToFahrenheit(undefined)); //Please, enter the correct number.
console.log(celsiusToFahrenheit(2)); //The 0 °C = 35.6 °F

//6. Написати фунцію, яка генерує випадкове ціле число в проміжку від 0 до 40

const randomNumber = (numberForRandom) => {
  return Math.round(Math.random() * numberForRandom);
};
randomNumber();
console.log(randomNumber(40));
