/* 1) Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

"1999" --> "20th"
"2011" --> "21st"
"2154" --> "22nd" */

const wrapperCentury = document.querySelector(".century");
const yearInput = document.querySelector("#input1");
const btnCentury = document.querySelector("#btnCentury");

const resultCentury = document.createElement("p");
const getCentury = function (year) {
  let century = Math.ceil(year / 100);
  if (year.length > 4) {
    return "You should enter only four numbers.";
  }
  if (year <= 0) {
    return `${year} is not allow for a year.`;
  }
  switch (year % 10) {
    case 1:
      century += "st century.";
      break;
    case 2:
      century += "nd century.";
      break;
    case 3:
      century += "rd century.";
      break;
    default:
      century += "th century.";
  }
  return `${year} year is ${century}`;
};

btnCentury.addEventListener("click", () => {
  resultCentury.innerHTML = getCentury(yearInput.value);
  wrapperCentury.append(resultCentury);
});

/* 2) Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's
and non-vowels become 0's. All non-vowels including non alpha characters (spaces,commas etc.) should be included.

vowelOne( "abceios" ) // "1001110"
vowelOne( "aeiou, abc" ) // "1111100100" */

const wrapperVowel = document.querySelector(".vowelsLetter");
const lettersInput = document.querySelector("#input2");
const btnReplace = document.querySelector("#btnVowel");

const resultReplacement = document.createElement("p");

function vowelOne(string) {
  let withoutVowels = "";
  const vowel = "aeiuoAEIUO";
  for (let i = 0; i < string.length; i++) {
    if (vowel.includes(string[i])) {
      withoutVowels += "1";
    } else {
      withoutVowels += "0";
    }
  }
  return withoutVowels;
}

btnReplace.addEventListener("click", () => {
  resultReplacement.innerHTML = vowelOne(lettersInput.value);
  wrapperVowel.append(resultReplacement);
});

/* 3) Write a function that takes in a string of one or more words, and returns the same string,
but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces.
Spaces will be included only when more than one word is present.

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
spinWords( "This is a test") => returns "This is a test"
spinWords( "This is another test" ) => returns "This is rehtona test" */

const reverse = document.querySelector(".reverse");
const reverseInput = document.querySelector("#input3");
const btnReverse = document.querySelector("#btnReverse");

const resultReverse = document.createElement("p");

const spinWords = function (string) {
  const result = string
    .split(" ")
    .reduce(
      (elem, word) => [
        ...elem,
        word.length > 5 ? [...word].reverse().join("") : word,
      ],
      []
    )
    .join(" ");
  return result;
};

btnReverse.addEventListener("click", () => {
  resultReverse.innerHTML = spinWords(reverseInput.value);
  reverse.append(resultReverse);
});

/* 4) You are given a string of space separated numbers, and have to return the highest and lowest number.

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5" */

const wrapperHighAndLow = document.querySelector(".highAndLow");
const highAndLowInput = document.querySelector("#input4");
const btnHighAndLow = document.querySelector("#btnHighAndLow");

const resultHighAndLow = document.createElement("p");

const highAndLow = function (numbers) {
  numbers = numbers.split(" ");
  console.log(numbers);
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
  if (isNaN(max) || isNaN(min)) {
    return "You entered wrong data. Please enter only number.";
  }
  return `The max number is ${max} and the nim number is ${min}.`;
};

btnHighAndLow.addEventListener("click", () => {
  resultHighAndLow.innerHTML = highAndLow(highAndLowInput.value);
  wrapperHighAndLow.append(resultHighAndLow);
});

/* 5) Write a function that accepts an array of 10 integers (between 0 and 9),
that returns a string of those numbers in the form of a phone number.

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890" */

const wrapperPhone = document.querySelector(".phone");
const phoneInput = document.querySelector("#input5");
const btnPhone = document.querySelector("#btnPhone");

const resultPhone = document.createElement("p");

const createPhoneNumber = function (numbers) {
  if (numbers < 0) {
    return "You should enter the positive numbers only.";
  }
  if (numbers.length > 10) {
    return "You should enter only ten numbers.";
  }
  if (numbers.length < 10) {
    return "You entered an incomplete phone number.";
  }

  let firstpart = "";
  let secondpart = "";
  let thirdpart = "";
  for (let i = 0; i < numbers.length; i++) {
    if (i < 3) {
      firstpart += numbers[i].toString();
    } else if (i >= 3 && i < 6) {
      secondpart += numbers[i].toString();
    } else if (i >= 6) {
      thirdpart += numbers[i].toString();
    }
  }
  return `You entered the phone number (${firstpart}) ${secondpart}-${thirdpart}.`;
};

btnPhone.addEventListener("click", () => {
  resultPhone.innerHTML = createPhoneNumber(phoneInput.value);
  wrapperPhone.append(resultPhone);
});
