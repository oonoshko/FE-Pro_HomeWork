const API_KEY = "h9sWQ7IaXwu93R1HW7b6NydfTSn1da7x";

const URL = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/";

const wrapper = document.querySelector(".wrapper");
const input = document.querySelector("#input1");
const btnWeather = document.querySelector("#btnWeather");
const wrapperResult = document.querySelector("#result");

const xhr = new XMLHttpRequest();

const locationCity = {
  Lviv: 324561,
  Kyiv: 324505,
  Kharkiv: 323903,
  Chernihiv: 322162,
  Odesa: 325343,
  Mariupol: 323037,
  Poltava: 325523,
  Zhytomyr: 326609,
  Cherkasy: 321985,
  London: 328328,
  Warsaw: 274663,
  "New York": 349727,
};

const p = document.createElement("p");

const getLocationCity = function () {
  for (const city in locationCity) {
    if (input.value === city) {
      return locationCity[city];
    }
  }

  p.innerHTML = "You entered wrong city.";
  wrapper.append(p);
};

const getInfoWeather = function (resultDaily) {
  for (const infoWeather of resultDaily) {
    const wrapperWeather = document.createElement("div");
    wrapperWeather.classList.add("wrapperWeather");

    const day = new Date(infoWeather.Date).getDate();
    const month = new Date(infoWeather.Date).getMonth();
    const year = new Date(infoWeather.Date).getFullYear();

    const minTemperature = Math.round(
      (infoWeather.Temperature.Minimum.Value - 32) / 1.8
    );

    const maxTemperature = Math.round(
      (infoWeather.Temperature.Maximum.Value - 32) / 1.8
    );

    const weatherDay = infoWeather.Day.IconPhrase;
    const weatherNight = infoWeather.Night.IconPhrase;

    wrapperWeather.innerHTML = `
        <p class='date'>${day}/${month}/${year}</p>
        <p class='temperature'>Min:<strong>${minTemperature}°C</strong> Max:<strong>${maxTemperature}°C</strong></p>
        <p class='dayNight'>Day: ${weatherDay}</p>
        <p class='dayNight'>Night:${weatherNight}</p>`;
    wrapperResult.append(wrapperWeather);
  }
};

function loadWeather() {
  xhr.open("GET", `${URL}${getLocationCity()}?apikey=${API_KEY}`);
  xhr.send();

  xhr.onload = function () {
    if (this.readyState === 4 && this.status === 200) {
      const result = JSON.parse(this.response);
      const resultDaily = result.DailyForecasts;
      getInfoWeather(resultDaily);
    } else if (this.status !== 200) {
      console.error(`Error ${xhr.status}: ${xhr.statusText}.`);
    } else {
      console.error("Something went wrong.");
    }
  };
  input.value = "";
  wrapperResult.innerHTML = "";
}

btnWeather.addEventListener("click", loadWeather);
