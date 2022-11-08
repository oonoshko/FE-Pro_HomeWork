/* Input-поле із кнопкою «Start timeout» — у інпут-полі користувач може ввести кількість відповідних секунд,
які залишилися у росії та росіяни до їх зникнення */
const wrapper = document.querySelector(".wrapperTimeout");
const startTimeout = document.querySelector("#btn");
const number = document.querySelector("#input");
const p = document.createElement("p");

function countDown() {
  if (number.value <= 0) {
    p.innerHTML = "A number must be positive.";
    wrapper.append(p);
  } else {
    number.innerHTML = number.value;
    number.value--;
    setTimeout(countDown, 1000);
  }
}

startTimeout.addEventListener("click", countDown);

/* Input-поле з типом date та кнопка Start Campaign. Користувач обирає дату. Після того, клікає Start Campaign.
Задача - відобразити таймер, до дати яку обрав користувач у вигляді "До старту кампанії залишилосьРОКИ:МІСЯЦІ:ГОДИНИ:ХВИЛИНИ" */

const date = document.querySelector(".time");
const startCampaign = document.querySelector("#button");

const year = document.querySelector(".year");
const mnth = document.querySelector(".month");
const hr = document.querySelector(".hour");
const mnts = document.querySelector(".minutes");
const sec = document.querySelector(".second");

const getTimeRemaining = function () {
  const deadline = new Date(date.value).getTime();
  const currentYear = new Date().getTime();

  const diff = deadline - currentYear;

  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  const month = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
  const hour = Math.floor((diff / (1000 * 60 * 60)) % 60);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const secund = Math.floor((diff / 1000) % 60);

  year.innerHTML = years;
  mnth.innerHTML = month;
  hr.innerHTML = hour;
  mnts.innerHTML = minutes;
  sec.innerHTML = secund;

  setTimeout(getTimeRemaining, 1000);
};

startCampaign.addEventListener("click", getTimeRemaining);

/* 3 select-поля та кнопка Calculate. Поле 1 - модель телефону. Поле 2 - кількість оперативної пам'яті.
Поле 3 - обʼєм вбудованої пам'яті. При натисканні на кнопку - вивести ціну обраного телефону.
Зауважте, що кожний телефон може мати всі поля, тобто уявімо, що всі iPhone/Samsung/Pixel/OnePlus можуть мати 2, 4, 6 та 8 ГБ оперативнох пам'яті,
та 64, 128, 256 та 512 ГБ вбудованої пам'яті. Але ціноутворення відрізняється. Тобто iPhone/64/512 коштуватиме дорожче за Samsung/64/512 */

const calculate = document.querySelector(".blockCalculate");

const phone = document.querySelector("#phone");
const ram = document.querySelector("#ram");
const memory = document.querySelector("#memory");

const totalPrice = document.querySelector("#totalPrice");

function calculateAmount() {
  if (phone.value === "0" || ram.value === "0" || memory.value === "0") {
    const result = document.createElement("p");
    result.textContent = "Please select all the fields.";

    calculate.append(result);
  } else {
    const count = document.createElement("p");
    const result =
      Number(phone.value) + Number(ram.value) + Number(memory.value);

    count.textContent = `The mobile phone you have selected costs ${result} UAH.`;
    calculate.append(count);
  }
}

totalPrice.addEventListener("click", calculateAmount);
