const UA =
  "https://upload.wikimedia.org/wikipedia/commons/d/d2/Flag_of_Ukraine.png";

const PL =
  "https://upload.wikimedia.org/wikipedia/commons/1/12/Flag_of_Poland.svg";

const NL =
  "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg";

const DE =
  "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg";

const SP =
  "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg";

const IT =
  "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg";

const USA =
  "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_the_U.S..svg";

const listProducts = [
  {
    productName: "Bread",
    productData: {
      weight: 200,
      certificate: true,
      dateOfExpiry: "30/10/2022",
      sugarFree: true,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: UA,
    productPrice: 11.75,
  },
  {
    productName: "Sugar",
    productData: {
      weight: 1000,
      certificate: true,
      dateOfExpiry: "21/12/2022",
      sugarFree: true,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: UA,
    productPrice: 35.75,
  },
  {
    productName: "Shampoo",
    productData: {
      weight: 360,
      certificate: false,
      dateOfExpiry: "21/09/2023",
      sugarFree: false,
    },
    productProvider: "Rocket, Ltd",
    productCountry: PL,
    productPrice: 179.0,
  },
  {
    productName: "Diesel",
    productData: {
      weight: 1000,
      certificate: true,
      dateOfExpiry: "21/01/2023",
      sugarFree: false,
    },
    productProvider: "Socar, Ltd",
    productCountry: DE,
    productPrice: 550.0,
  },
  {
    productName: "Orange",
    productData: {
      weight: 1000,
      certificate: true,
      dateOfExpiry: "21/11/2022",
      sugarFree: false,
    },
    productProvider: "Novus, Ltd",
    productCountry: SP,
    productPrice: 77.99,
  },
  {
    productName: "Apple",
    productData: {
      weight: 1000,
      certificate: true,
      dateOfExpiry: "21/12/2022",
      sugarFree: false,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: UA,
    productPrice: 14.99,
  },
  {
    productName: "Lemon",
    productData: {
      weight: 100,
      certificate: true,
      dateOfExpiry: "30/12/2022",
      sugarFree: false,
    },
    productProvider: "Novus, Ltd",
    productCountry: IT,
    productPrice: 5.99,
  },
  {
    productName: "Сhampignon mushroom",
    productData: {
      weight: 1000,
      certificate: true,
      dateOfExpiry: "30/11/2022",
      sugarFree: false,
    },
    productProvider: "Novus, Ltd",
    productCountry: UA,
    productPrice: 76.99,
  },
  {
    productName: "Whisky Bushmills Original",
    productData: {
      weight: 700,
      certificate: true,
      dateOfExpiry: "30/11/2022",
      sugarFree: true,
    },
    productProvider: "FOP Ruban M.O.",
    productCountry: USA,
    productPrice: 779.0,
  },
  {
    productName: "Cheese Hochland",
    productData: {
      weight: 130,
      certificate: false,
      dateOfExpiry: "30/11/2022",
      sugarFree: true,
    },
    productProvider: "FOP Ruban M.O.",
    productCountry: NL,
    productPrice: 39.9,
  },
  {
    productName: "Pig meat",
    productData: {
      weight: 1000,
      certificate: false,
      dateOfExpiry: "15/11/2022",
      sugarFree: false,
    },
    productProvider: "Silpo, Ltd",
    productCountry: PL,
    productPrice: 180.0,
  },
  {
    productName: "Banana",
    productData: {
      weight: 1000,
      certificate: true,
      dateOfExpiry: "15/11/2022",
      sugarFree: false,
    },
    productProvider: "Silpo, Ltd",
    productCountry: UA,
    productPrice: 75.0,
  },
  {
    productName: "Flour",
    productData: {
      weight: 1000,
      certificate: false,
      dateOfExpiry: "15/11/2023",
      sugarFree: false,
    },
    productProvider: "FOP Ruban M.O.",
    productCountry: UA,
    productPrice: 120.0,
  },
  {
    productName: "Sea salt",
    productData: {
      weight: 750,
      certificate: true,
      dateOfExpiry: "30/11/2023",
      sugarFree: false,
    },
    productProvider: "Silpo, Ltd",
    productCountry: SP,
    productPrice: 55.0,
  },
  {
    productName: "Food GOURMET Gold Pate",
    productData: {
      weight: 85,
      certificate: false,
      dateOfExpiry: "30/11/2023",
      sugarFree: true,
    },
    productProvider: "Novus, Ltd",
    productCountry: DE,
    productPrice: 22.0,
  },
];

const container = document.createElement("div");
container.classList.add("container");
document.body.prepend(container);

const productList = document.createElement("ul");
productList.classList.add("productList");
container.prepend(productList);

const generateProductCard = function (
  productName,
  productData,
  productProvider,
  productCountry,
  productPrice
) {
  return `
  <li class='productCard'> 
      <span class='productName'>${productName}:</span>
      <span class='productPrice'>Price: ${productPrice.toFixed(2)} UAH.</span>
      <span class='productProvider'>Provided by: ${productProvider}.</span>
      <span>Made in: <img src='${productCountry}'class='productCountry  alt='ukrainianFlag'></span>
      <p class='details'>Weight - ${productData.weight} gram.
       <span class='certificate'>Certificate: ${
         productData.certificate ? true : "!"
       }.</span>
      Date of expiry: ${productData.dateOfExpiry}.
      Has sugar: ${productData.sugarFree}.</p>        
  </li>`;
};

const productHTML = listProducts
  .map((elem) =>
    generateProductCard(
      elem.productName,
      elem.productData,
      elem.productProvider,
      elem.productCountry,
      elem.productPrice
    )
  )
  .join(" ");
productList.innerHTML = productHTML;

const getTotalPrice = function () {
  const totalPrice = document.createElement("p");
  totalPrice.classList.add("totalPrice");
  totalPrice.innerHTML = `The total price of products is ${listProducts.reduce(
    (sum, elem) => sum + elem.productPrice,
    0
  )} UAH.`;
  document.body.append(totalPrice);
};

getTotalPrice();

const getTheMostExpensiveProduct = function () {
  const mostExpensiveProduct = document.createElement("p");
  mostExpensiveProduct.classList.add("mostExpensiveProduct");
  const result = listProducts.find(
    (element) =>
      element.productPrice ===
      Math.max(...listProducts.map((element) => element.productPrice))
  );
  mostExpensiveProduct.innerHTML = `The most expensive product is "${result.productName}".`;
  document.body.append(mostExpensiveProduct);
};

getTheMostExpensiveProduct();

const getAveragePrice = function () {
  const averagePrice = document.createElement("p");
  averagePrice.classList.add("averagePrice");
  const totalPrice = listProducts.reduce(
    (sum, elem) => sum + elem.productPrice,
    0
  );
  averagePrice.innerHTML = `The average price of products is ${(
    totalPrice / listProducts.length
  ).toFixed(2)} UAH.`;
  document.body.append(averagePrice);
};

getAveragePrice();
