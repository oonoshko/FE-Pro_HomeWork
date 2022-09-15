const rightResult = 0.1 + 0.2;
console.log(+rightResult.toFixed(1));

const userLogin = prompt("Which is your login");
const userPassword = prompt("Which is your password");
console.log(`You enter login - ${userLogin}`);
console.log(`You enter password - ${userPassword}`);
const adminLogin = "admin";
const adminPassword = "12pass33210";

let assets =
  userLogin === adminLogin && userPassword === adminPassword
    ? `You have entered to personal account successfully.`
    : userLogin === adminLogin || userPassword === adminPassword
    ? `Unfortunately, you entered the wrong login or password.`
    : `Unfortunately, this user doesn't have access to this personal account.`;
console.log(assets);

const howMoney = +prompt("How much money you have?", 0);
const priceWatermelon = 21;
const priceCarrot = 8;
const pricePotato = 12;
const priceApple = 15;

console.log(`Watermelon = ${priceWatermelon} UAH,
Carrot = ${priceCarrot} UAH,
Potato = ${pricePotato} UAH,
Apple = ${priceApple} UAH`);

console.log(`You have ${howMoney} UAH.`);

if (howMoney < 8) {
  console.log(
    "Unfortunately, you do not have enough money to buy at least 1(one) any product. Please, come back later."
  );
} else if (howMoney >= 8) {
  const whatBuy = prompt("What would you like to buy?");
  const watermelon = "watermelon";
  const carrot = "carrot";
  const potato = "potato";
  const apple = "apple";

  if (howMoney < priceWatermelon && whatBuy === watermelon) {
    console.log(
      `You do not have enough money to buy at least 1(one) ${watermelon}.`
    );
  } else if (howMoney < priceCarrot && whatBuy === carrot) {
    console.log(
      `You do not have enough money to buy at least 1(one) ${carrot}.`
    );
  } else if (howMoney < pricePotato && whatBuy === potato) {
    console.log(
      `You do not have enough money to buy at least 1(one) ${potato}.`
    );
  } else if (howMoney < priceApple && whatBuy === apple) {
    console.log(
      `You do not have enough money to buy at least 1(one) ${apple}.`
    );
  } else if (whatBuy === watermelon) {
    console.log(
      `You can buy ${Math.floor(
        howMoney / priceWatermelon
      )} ${watermelon}(-s) for ${howMoney} UAH and you'll have a change ${
        howMoney % priceWatermelon
      } UAH.`
    );
  } else if (whatBuy === carrot) {
    console.log(
      `You can buy ${Math.floor(
        howMoney / priceCarrot
      )} ${carrot}(-s) for ${howMoney} UAH and you'll have a change ${
        howMoney % priceCarrot
      } UAH.`
    );
  } else if (whatBuy === potato) {
    console.log(
      `You can buy ${Math.floor(
        howMoney / pricePotato
      )} ${potato}(-s) for ${howMoney} UAH and you'll have a change ${
        howMoney % pricePotato
      } UAH.`
    );
  } else if (whatBuy === apple) {
    console.log(
      `You can buy ${Math.floor(
        howMoney / priceApple
      )} ${apple}(-s) for ${howMoney} UAH and you'll have a change ${
        howMoney % priceApple
      } UAH.`
    );
  }
}

let oneSide = +prompt(`Enter the number side "A"`, 0);
let twoSide = +prompt(`Enter the number side "B"`, 0);
let threeSide = +prompt(`Enter the number side "C"`, 0);

console.log(`side A =  ${oneSide}`);
console.log(`side B =  ${twoSide}`);
console.log(`side C = ${threeSide}`);

let check =
  oneSide + twoSide > threeSide &&
  twoSide + threeSide > oneSide &&
  threeSide + oneSide > twoSide
    ? `This triangle is exist.`
    : "This triangle is not exist.";
console.log(check);

(2 && 0 && 3) || (true && false); // false
false || " " || (3 && true); //" "
(1 && 1000 && "0") ||
  (0 &&
    "Bob" - // '0'
      1) ||
  0 ||
  (0 && "") ||
  1010; // -1
