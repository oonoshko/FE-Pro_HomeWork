/* Створити функцію-конструктор Людини. Властивості, які будуть описувати екземпляр Людини - ім'я, вік, стать, національність,
країна, список країн для подорожей. Створити універсальні функції - знайомство, прокидатися, засинати й список країн, які Людина хоче відвідати.
Роботу цих функцій можна виводити через console.log. Але в кожній з функцій повинно використовуватись якомога більше
характеристик конкретної Людини на якій ця функція викликається (підказка: тут треба використатии call/apply/bind) */

function Person(name, age, sex, nationality, country, travelList) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.nationality = nationality;
  this.country = country;
  this.travelList = travelList;
}

const oleg = new Person("Oleg", 38, "man", "Ukrainian", "Ukraine", [
  "USA",
  "Canada",
  "Spain",
  "Portugal",
  "Italy",
]);

const iryna = new Person("Iryna", 33, "women", "Ukrainian", "Ukraine", [
  "Japan",
  "Malta",
  "Spain",
  "Singapur",
  "Italy",
]);

function acquaintance() {
  console.group(`${this.name} info:`);
  console.log(`Hello! Let introduce myself. My name is ${this.name}.`);
  console.log(
    `I'm from ${this.country} and I've ${this.nationality} nationality.`
  );
  console.log(`My age is ${this.age} years old, and I'm a ${this.sex}.`);
  console.log(`I would like to travel to next countries ${this.travelList}.`);
  console.groupEnd();
}

function wakeUp() {
  console.log(
    `${this.name} which from ${this.country} and has ${this.nationality} nationality usually wake up at 07:30.`
  );
}

function sleep() {
  console.log(
    `${this.name} which has ${this.age} years should go to sleep at 22:30. He/She did this in ${this.country}.`
  );
}
function getCountry() {
  console.log(
    `${this.name} is a ${this.sex} would like to travel to next countries ${this.travelList}.`
  );
}

acquaintance.apply(oleg);
wakeUp.apply(oleg);
sleep.apply(oleg);
getCountry.apply(oleg);

acquaintance.call(iryna);
wakeUp.call(iryna);
sleep.call(iryna);
getCountry.call(iryna);

/* Створити власну реалізацію методу .bind (підказка: в кінці треба помістити цю власну функцію у прототип -
  Function.prototype.myOwnBind = function () { [тут_код_кастомного_bind] } */

const myFunc = function (city) {
  console.log(`My name is ${this.name} and I like my city ${city}.`);
};

Function.prototype.myOwnBind = function (oleg, ...args) {
  const func = this;
  return function () {
    func.apply(oleg, [...args]);
  };
};

const newFunc = myFunc.myOwnBind(oleg, "Kyiv");
newFunc();

/* Cтворити функцію, котра приймає 2 параметри - об'єкти. Функція повинна перевіряти чи ці 2 обʼєкти абсолютно ідентичні та повертає результат у зрозумілому форматі */

const firstObj = { name: "Oleg", age: 38, one: { two: 2 } };
const secondObj = { name: "Oleg", age: 38, one: { two: 2 } };

function isObjectEquals(firstObj, secondObj) {
  if (
    firstObj === null ||
    secondObj === null ||
    firstObj === undefined ||
    secondObj === undefined
  ) {
    console.log(
      "You entered a non-existing object. Please enter real objects for comparison."
    );
  } else {
    const result = JSON.stringify(firstObj) === JSON.stringify(secondObj);
    console.log(`These two objects equals each other or not? It's ${result}.`);
  }
}
isObjectEquals();

isObjectEquals(firstObj, secondObj);

/* Створіть функцію-конструктор Calculator, який створює об’єкти з трьома методами:
enterData - запитує два значення за допомогою prompt і запам’ятовує їх у властивостях об’єкта.
calculateSum() повертає суму цих властивостей.
calculateNSD() повертає результат пошуку НСД
calculateNSK() повертає результат пошуку НСК */

function Calculator(firstNumber, secondNumber) {
  this.enterData = function () {
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
    console.log(firstNumber, secondNumber);
    if (firstNumber <= 0 || firstNumber === "" || isNaN(firstNumber)) {
      console.log(
        "You entered incorrect first number. Please enter number more than 0."
      );
    } else if (
      secondNumber <= 0 ||
      secondNumber === "" ||
      isNaN(secondNumber)
    ) {
      console.log(
        "You entered incorrect second number. Please enter number more than 0"
      );
    } else {
      this.calculateSum = function () {
        return this.firstNumber + this.secondNumber;
      };

      this.calculateNSD = function () {
        while (this.firstNumber !== this.secondNumber) {
          if (this.firstNumber > this.secondNumber) {
            this.firstNumber -= this.secondNumber;
          } else {
            this.secondNumber -= this.firstNumber;
          }
        }
        return this.firstNumber;
      };

      this.calculateNSK = function () {
        return (firstNumber * secondNumber) / this.calculateNSD();
      };
    }
  };
}

const calculator = new Calculator(
  +prompt("Please enter first any number."),
  +prompt("Please enter second any number.")
);
calculator.enterData();

console.log(`Sum=${calculator.calculateSum()}`);
console.log(`NSD=${calculator.calculateNSD()}`);
console.log(`NSK=${calculator.calculateNSK()}`);
