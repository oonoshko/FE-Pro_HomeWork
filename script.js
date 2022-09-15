//Вивести в console числа, від 10 до 25 з кроком 0.5 (10 й 25 включно)

let i = 10;
while (i <= 25) {
  console.log(i);
  i += 0.5;
}

// Запитати та зберегти число введене із prompt.
//Визначати чи це число просте

let enteredNumber = +prompt(`Please, enter any number.`);
let isPrimeNum = true;
for (let i = 2; i < enteredNumber; i++) {
  if (enteredNumber % i === 0) {
    isPrimeNum = false;
  }
}

if (isPrimeNum === true) {
  console.log(`The number ${enteredNumber} is Prime.`);
} else {
  console.log(`The number ${enteredNumber} is't Prime.`);
}

//Запитати та зберегти суму покупки введене із prompt. Обрахувати знижку та повідомити користувачу значення знижки. Якщо сума покупки до 100 UAН - знижка 3%; якщо сума покупки до 200 UAH - знижка 5%; якщо сума покупки перевищує 200 UAH - знижка 7%

let howMuchMony = +prompt(`What is the sum of your purchase?`);
let discount = 0;
for (let i = 0; i <= howMuchMony; i++) {
  if (i < 100) {
    discount = 3;
  }
  if (i >= 100 && howMuchMony < 200) {
    discount = 5;
    break;
  }
  if (i >= 200) {
    discount = 7;
  }
}
console.log(
  `The discount of your purchase for ${howMuchMony} UAH is ${
    (howMuchMony * discount) / 100
  } UAH`
);

// Вивести таблицю множення чисел від 2 до 9 у зрозумілому форматі

for (let i = 2; i <= 9; i++) {
  for (j = 2; j <= 9; j++) {
    let number = i * j;
    console.log(`${i} * ${j}= ${number}`);
  }
}

// Умова: один долар коштує 36,76 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів. Формат (10 USD = 3 676 UAH)

const oneUSD = 36.76;
for (let i = 10; i <= 100; i += 10) {
  let tenUSD = oneUSD * i;
  console.log(`${i} USD = ${tenUSD.toFixed(2)} UAH.`);
}

// Запитати у користувача 15 чисел і обрахувати, скільки серед них додатніх, від’ємних і нулів.
// Також визначатити кількість парних і непарних.Вивести статистику через console у зрозумілому форматі.
// *** Достатньо однієї змінної(не 15) для введення чисел користувачем.

const number = prompt(`Enter 15 numbers via /`);
const numberList = number.split(`/`);
let positive = 0;
let nevative = 0;
let zero = 0;
let even = 0;
let odd = 0;

for (let i = 0; i < numberList.length; i++) {
  let = element = +numberList[i];
  if (element > 0) {
    positive++;
  }
  if (element < 0) {
    nevative++;
  }
  if (element === 0) {
    zero++;
  }
  if (element % 2 === 0) {
    even++;
  }
  if (element % 2 !== 0) {
    odd++;
  }
}
console.log(number);
console.log(`Додатні = ${positive}
Відємні = ${nevative}
Нуль = ${zero}
Парні ${even}
Не парні ${odd}`);
