/* - Створити масив, довжину та елементи якого задає користувач (через prompt). Елементами масиву повинні бути числа */

const arrayNumbers = [];
while (true) {
  let value = prompt(`Please enter any number`);

  // Обриваємо введення даних?
  if (value === "" || value === null || !isFinite(value)) {
    break;
  }
  arrayNumbers.push(+value);
}
// console.log(arrayNumbers);

/* - Відсортувати масив за зростанням. */

arrayNumbers.sort((lessNumber, moreNumber) => lessNumber - moreNumber);

// console.log(arrayNumbers);

/* Дано масив - список покупок. Кожен елемент масиву - це обʼєкт вигляду: 
{productName: 'bread', productPrice: 14.5, productQuantity: 2}. 
Мінімальний довжина такого масиву - 6 */

const arrayProduct = [
  { productName: "bread", productPrice: 14.5, productQuantity: 2 },
  { productName: "milk", productPrice: 30.25, productQuantity: 1 },
  { productName: "eggs", productPrice: 3.05, productQuantity: 30 },
  { productName: "sugar", productPrice: 35, productQuantity: 5 },
  { productName: "watermelon", productPrice: 25, productQuantity: 8 },
  { productName: "potato", productPrice: 13.18, productQuantity: 3 },
  { productName: "apple", productPrice: 16, productQuantity: 1.5 },
];

/* - Порахувати загальну вартість корзини та вивести суму у зрозумілому форматі */

const getTotalCostOfShopping = arrayProduct.reduce(
  (prev, curr) => curr.productPrice * curr.productQuantity + prev,
  0
);

console.log(
  `The total sum of the shopping cart is ${getTotalCostOfShopping} UAH.`
);

/* - Порахувати найменшу кількість продукту, який потрібно купити */

const getMinQuantityOfProduct = Math.min(
  ...arrayProduct.map((element) => element.productQuantity)
);

const getNameMinQuantityOfProduct = arrayProduct.find(
  (element) => element.productQuantity === getMinQuantityOfProduct
);

console.log(
  `The smallest product quantity, which need to buy is ${getMinQuantityOfProduct} pieces. It's a ${getNameMinQuantityOfProduct.productName}.`
);

/* - Порахувати загальну кількість продуктів */

const getTotalQuantityOfProducts = arrayProduct.reduce(
  (prev, curr) => prev + curr.productQuantity,
  0
);

console.log(
  `The total quantity of products is ${getTotalQuantityOfProducts} pieces.`
);

/* - Знайти найдорожчий продукт */

const getTheMostExpensiveProduct = arrayProduct.find(
  (element) =>
    element.productPrice ===
    Math.max(...arrayProduct.map((element) => element.productPrice))
);

console.log(
  `The most expensive product, which need to buy is "${getTheMostExpensiveProduct.productName}".`
);

// /* Створити функцію, яка повинна додавати новий продукт в існуючий масив
//    Дані про новий продукт - користувач вводить із prompt */

function addNewProduct() {
  const newProduct = {};

  newProduct.productName = prompt("Please enter a product name", "lemon");
  newProduct.productPrice = +prompt("Please enter a product price", 1);
  newProduct.productQuantity = +prompt("Please enter a product quantity", 1);
  if (newProduct.productName === null || newProduct.productName === "") {
    console.log(
      `You didn't enter any product name. Please enter a product name (e.g. lemon).`
    );
  } else if (newProduct.productPrice <= 0 || isNaN(newProduct.productPrice)) {
    console.log(
      `${newProduct.productName} can't have price ${newProduct.productPrice}. Please enter a real price.`
    );
  } else if (
    newProduct.productQuantity <= 0 ||
    isNaN(newProduct.productQuantity)
  ) {
    console.log(
      `You can't add ${newProduct.productQuantity} ${newProduct.productName}. Please enter a quantity to add ${newProduct.productName}.`
    );
  } else {
    arrayProduct.push(newProduct);
    "Added:\n", arrayProduct[arrayProduct.length - 1];
  }
}

addNewProduct();
// console.log(arrayProduct);

/* Створити функцію, яка повинна видаляти конкретний продукт із існуючий масиву продуктів
Дані про видалення такого продукту - користувач вводить із prompt лише назву */

function deleteProduct() {
  const deleteProductByName = prompt(
    "Please enter a product name starting with a small letter (e.g. apple)."
  );

  const index = arrayProduct.findIndex(
    (element) => element.productName === deleteProductByName
  );
  if (index > -1) {
    arrayProduct.splice(index, 1);
  } else {
    console.log(
      `You entered an incorrect product name ${deleteProductByName}. Please enter a product name (e.g. apple).`
    );
  }
}
deleteProduct();
// console.log(arrayProduct);

/* Дано масив */

const array = [
  16, -3, 54, -4, 72, -56, 47, -12, 4, -16, 25, -37, 46, 4, -51, 27, -8, 4, -54,
  76, -4, 12, 6, -35,
];

/* - Знайти суму та кількість позитивних елементів. */

const getSumPositiveElementsArray = array.reduce(function (sum, current) {
  return current > 0 ? sum + current : sum;
});

const getNumbersOfPositiveElementsArray = array.filter(
  (element) => element > 0
).length;

console.log(
  `The sum of positive elements = ${getSumPositiveElementsArray} and their quantity = ${getNumbersOfPositiveElementsArray}.`
);

/* - Знайти мінімальний елемент масиву та його порядковий номер. */

const getMinElementArray = Math.min(...array);

const getIndexMinElementArray = array.findIndex(
  (element) => element === getMinElementArray
);

console.log(
  `The minimum array element is ${getMinElementArray} and its sequence number = ${getIndexMinElementArray}.`
);

/* - Знайти максимальний елемент масиву та його порядковий номер. */

const getMaxElementArray = Math.max(...array);

const getIndexMaxElementArray = array.findIndex(
  (element) => element === getMaxElementArray
);

console.log(
  `The maximum array element is ${getMaxElementArray} and its sequence number = ${getIndexMaxElementArray}.`
);

/* - Визначити кількість негативних елементів */

const getNumbersNegativeElementsArray = array.filter(
  (element) => element < 0
).length;

console.log(
  `The number of negative elements is ${getNumbersNegativeElementsArray}.`
);

/* - Знайти кількість непарних позитивних елементів. */

const getNumbersOddPositiveElementsArray = array.filter(
  (element) => element > 0 && element % 2 !== 0
).length;

console.log(
  `The number of odd positive elements is ${getNumbersOddPositiveElementsArray}.`
);

/* - Знайти суму парних позитивних елементів. */

const getSumEvenPositiveElementsArray = array.reduce(function (sum, current) {
  return current > 0 && current % 2 === 0 ? sum + current : sum;
});

console.log(
  `The sum of even positive elements is ${getSumEvenPositiveElementsArray}.`
);

/* - Знайти добуток позитивних елементів. */

const getMultiplicationPositiveElementsArray = array.reduce(function (
  sum,
  current
) {
  return current > 0 ? sum * current : sum;
});

console.log(
  `The multiplication of positive elements is ${getMultiplicationPositiveElementsArray}.`
);
