//Вивести в console числа, від 10 до 25 з кроком 0.5 (10 й 25 включно)

let i = 10;
while (i <= 25) {
  console.log(i);
  i += 0.5;
}

// Запитати та зберегти число введене із prompt.
//Визначати чи це число просте

const enteredNumber = +prompt(`Please, enter any number.`);
let isPrimeNum = `The number ${enteredNumber} is Prime.`;
for (let i = 2; i < enteredNumber; i++) {
  if (enteredNumber % i === 0) {
    isPrimeNum = `The number ${enteredNumber} is't Prime.`;
  }
}
console.log(isPrimeNum);

//Запитати та зберегти суму покупки введене із prompt. Обрахувати знижку та повідомити користувачу значення знижки. Якщо сума покупки до 100 UAН - знижка 3%; якщо сума покупки до 200 UAH - знижка 5%; якщо сума покупки перевищує 200 UAH - знижка 7%

const howMuchMoney = +prompt(`What is the sum of your purchase?`);
let discount = 0;
for (let i = 0; i <= howMuchMoney; i++) {
  if (i < 100) {
    discount = 3;
  }
  if (i >= 100 && howMuchMoney < 200) {
    discount = 5;
  }
  if (i >= 200) {
    discount = 7;
  }
}
console.log(
  `The discount of your purchase for ${howMuchMoney} UAH is ${
    (howMuchMoney * discount) / 100
  } UAH`
);

// Вивести таблицю множення чисел від 2 до 9 у зрозумілому форматі

for (let i = 2; i <= 9; i++) {
  for (j = 2; j <= 9; j++) {
    const result = i * j;
    console.log(`${i} * ${j} = ${result}`);
  }
}

// Умова: один долар коштує 36,76 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів. Формат (10 USD = 3 676 UAH)

const oneUSD = 36.76;
let k = 10;
do {
  let tenUSD = oneUSD * k;
  console.log(`${k} USD = ${tenUSD.toFixed(2)} UAH.`);
  k += 10;
} while (k <= 100);

// Запитати у користувача 15 чисел і обрахувати, скільки серед них додатніх, від’ємних і нулів.
// Також визначатити кількість парних і непарних.Вивести статистику через console у зрозумілому форматі.
// *** Достатньо однієї змінної(не 15) для введення чисел користувачем.

const number = prompt(`Enter 15 numbers via /`);
const arrayNumberList = number.split(`/`);
let positive = 0;
let nevative = 0;
let zero = 0;
let even = 0;
let odd = 0;

for (let i = 0; i < arrayNumberList.length; i++) {
  let = arrayNumber = +arrayNumberList[i];
  if (arrayNumber > 0) {
    positive++;
  }
  if (arrayNumber < 0) {
    nevative++;
  }
  if (arrayNumber === 0) {
    zero++;
  }
  if (arrayNumber % 2 === 0) {
    even++;
  }
  if (arrayNumber % 2 !== 0) {
    odd++;
  }
}
console.log(number);
console.log(`Додатні = ${positive}
Відємні = ${nevative}
Нуль = ${zero}
Парні ${even}
Не парні ${odd}`);
