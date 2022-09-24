const checkingForValidation = (date) => {
  if (date === undefined || date === null) {
    return true;
  }
  return false;
};

/*Cтворити функцію, яка створює та реєструє нову команду у автопробізі.
Під час виклику функції потрібно передати дані про команду - назва команди, ім'я водія, рік народження водія, марка автомобіля,
спонсор команди та чи водій допущений до автопробігу*/

const avtoprobig = () => {
  nameComand = prompt(`Please enter a name of your comand`);
  nameOfDriver = prompt(`Please enter a name of driver`);
  yearOfBirthday = prompt(`Please enter a year of driver's birthday`);
  carBrand = prompt(`Please enter a car brand`);
  sponsorOfComsnd = prompt(`Please enter is sponsor of your comand`);
  isAllowedToDrive = prompt(`Please enter this driver allowed to avtoprobig`);

  if (
    checkingForValidation(nameComand) ||
    nameComand === "" ||
    checkingForValidation(nameOfDriver) ||
    nameOfDriver === "" ||
    checkingForValidation(yearOfBirthday) ||
    yearOfBirthday === "" ||
    checkingForValidation(carBrand) ||
    carBrand === "" ||
    checkingForValidation(sponsorOfComsnd) ||
    sponsorOfComsnd === "" ||
    checkingForValidation(isAllowedToDrive)
  ) {
    return console.log(
      "You entered incorrect information. Please, enter information one more."
    );
  } else {
    let newComand = {
      nameComand,
      nameOfDriver,
      yearOfBirthday,
      carBrand,
      sponsorOfComsnd,
      isAllowedToDrive,
    };
    console.log(newComand);
  }
};
avtoprobig();

/* Запитати дані (через prompt та циклічно) про нового користувача у системі та зберегти його в об'єкт.
Дані про користувача - логін, пароль, місто, країна, стать, вік*/

let login = prompt(`Please, enter your login.`);
let password = prompt(`Please, enter your password.`);
let city = prompt(`Please, enter your city.`);
let country = prompt(`Please, enter your country.`);
let sex = prompt(`Please, enter your sex.`);
let age = prompt(`Please, enter your age.`);
let user;
if (
  checkingForValidation(login) ||
  login === "" ||
  checkingForValidation(password) ||
  password === "" ||
  checkingForValidation(city) ||
  city.length < "" ||
  checkingForValidation(country) ||
  country === "" ||
  checkingForValidation(sex) ||
  sex === "" ||
  checkingForValidation(age) ||
  age === ""
) {
  console.log(
    `You entered incorrect information. Please, enter information one more.`
  );
} else {
  user = {
    login,
    password,
    city,
    country,
    sex,
    age,
  };
}

// console.log(user);

/*Створити функцію, яка буде міняти дані в конкретного користувача створеного пунктом вище.
Наприклад сhangeUserData(user_1, city, 'Kherson). Де user_1 - обʼєкт в якому буде мінятись, city - поле,
яке буде мінятися на нове значення - 'Kherson'*/

let user_1 = user;

const сhangeUserData = () => {
  if (city.length > "") {
    return (user_1.city = "Kherson");
  }
};

сhangeUserData();
// console.log(user_1);
// console.log(user);

/*Створити об'єкт cтудента - name, surname, age, course, city, greeting, addHomework.
greeting - метод, котрий виводить повідомлення через console.log('Hi. everyone!').
addHomework - метод, котрий виводить повідомлення через console.log('Sending my howework... Please, wait')*/

const student = {
  name: "Oleg",
  surname: "Onoshko",
  age: 38,
  course: "Front-End Pro",
  city: "Kyiv",
  greeting: function () {
    console.log(`Hi. everyone!`);
  },
  addHomework: function () {
    console.log(`Sending my howework... Please, wait`);
  },
};
// console.log(student);
// console.log(student.greeting());
// console.log(student.addHomework());

/* Cтворити функцію isEmpty, яка повертає true, якщо об’єкт не має властивостей (порожній), інакше false.*/

function isEmpty(empty) {
  for (let object in empty) {
    return false;
  }
  return true;
}
isEmpty();
// console.log(isEmpty());

/* Створити об’єкт для зберігання виручки команди продавців, наприклад: {Taras: 2000, Marta: 10 Ivan: 1200, Petro: 400, Roma: 366, Alina: 829}*/

const salesTeamRevenue = {
  Taras: 2000,
  Marta: 10,
  Ivan: 1200,
  Petro: 400,
  Roma: 366,
  Alina: 829,
};

/*Створити фукнцію, яка працює з цим обʼєктом та обчислює суму всіх виручок та виводить результат через сonsole.log*/

const countSum = function () {
  let sumOfRevenue = 0;
  for (let key in salesTeamRevenue) {
    sumOfRevenue += salesTeamRevenue[key];
  }
  return console.log(`Сума виручки команди = ${sumOfRevenue} грн.`);
};
countSum();

/*Створити фукнцію, яка працює з цим обʼєктом та яка знаходить продавця з найменшою виручкою та
виводить результат через сonsole.log у зрозумілому форматі*/

const minRevenue = () => {
  const ArrayValueRevenue = Object.values(salesTeamRevenue).filter(Boolean);
  const filteredByValue = Object.fromEntries(
    Object.entries(salesTeamRevenue).filter(
      ([key, value]) => value === Math.min(...ArrayValueRevenue)
    )
  );
  return console.log(
    `${Object.keys(
      filteredByValue
    )} має найменшу суму виручки = ${Object.values(filteredByValue)} грн.`
  );
};
minRevenue();

/*Створити фукнцію, яка знаходить продавця з найбільшою виручкою та
виводить результат через сonsole.log у зрозумілому форматі*/
const maxRevenue = () => {
  const ArrayValueRevenue = Object.values(salesTeamRevenue).filter(Boolean);
  const filteredByValue = Object.fromEntries(
    Object.entries(salesTeamRevenue).filter(
      ([key, value]) => value === Math.max(...ArrayValueRevenue)
    )
  );
  return console.log(
    `${Object.keys(
      filteredByValue
    )} має найменшу суму виручки = ${Object.values(filteredByValue)} грн.`
  );
};
maxRevenue();

/* Створити фукнцію, яка випадковим чином вибирає продавця місяця та виводить привітання цьому працівнику через сonsole.log у зрозумілому форматі*/

const random = () => {
  const ArrayKeyRevenue = Object.keys(salesTeamRevenue);
  const random =
    ArrayKeyRevenue[Math.floor(Math.random() * ArrayKeyRevenue.length)];
  return console.log(`Вітаємо в цьому місяці ${random} є продавцем місяця.`);
};
random();
