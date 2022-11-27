const API_KEY = "UWYF12mhrvAAHRqbwbbQZqA3QYN0Gwjh";

const input = document.querySelector("#input1");
const btnWeather = document.querySelector("#btnWeather");
const wrapperResult = document.querySelector("#result");
const neighbors = document.querySelector("#neighbors");

const pEl = document.createElement("p");
pEl.classList.add("errorCity");

const URL = "http://dataservice.accuweather.com/";

async function cityId() {
  try {
    const responseCity = await fetch(
      `${URL}locations/v1/cities/search?apikey=${API_KEY}&q=${input.value}`
    );
    if (responseCity.status === 200) {
      const responseCityJSON = await responseCity.json();
      const getCity = responseCityJSON[0].Key;
      getForecastsWeather(getCity);
      return;
    }
  } catch {
    wrapperResult.innerHTML = "";

    input.value === ""
      ? (pEl.innerHTML = "Please enter any city.")
      : (pEl.innerHTML = `Entered ${input.value} city not found.`);

    wrapperResult.append(pEl);
  }
}

async function getForecastsWeather(city) {
  try {
    const forecastsResponse = await fetch(
      `${URL}forecasts/v1/daily/5day/${city}?apikey=${API_KEY}`
    );
    if (forecastsResponse.status === 200) {
      const forecastsResponseJSON = await forecastsResponse.json();
      const resultDaily = forecastsResponseJSON.DailyForecasts;

      displayForecastsWeather(resultDaily);

      getNeighborsWeather(city);
    }
  } catch (error) {
    pEl.innerHTML = "Something went wrong.";
    wrapperResult.append(pEl);
  }
}

const displayForecastsWeather = function (resultDaily) {
  input.value = "";
  wrapperResult.innerHTML = "";

  resultDaily.forEach((el) => {
    const day = new Date(el.Date).toLocaleString().slice(0, 10);

    const minTemperature = Math.round(
      (el.Temperature.Minimum.Value - 32) / 1.8
    );

    const maxTemperature = Math.round(
      (el.Temperature.Maximum.Value - 32) / 1.8
    );

    const weatherDay = el.Day.IconPhrase;
    const weatherNight = el.Night.IconPhrase;
    const divEl = document.createElement("div");
    divEl.classList.add("wrapperWeather");

    const datePEl = document.createElement("p");
    datePEl.classList.add("date");
    datePEl.innerHTML = `${day}`;

    const dayPEl = document.createElement("p");
    dayPEl.classList.add("day");
    dayPEl.innerHTML = `Day: ${weatherDay}`;

    const nightPEl = document.createElement("p");
    nightPEl.classList.add("night");
    nightPEl.innerHTML = `Night: ${weatherNight}`;

    const temperatureMin = document.createElement("p");
    temperatureMin.classList.add("temperatureMin");
    minTemperature < 0
      ? (temperatureMin.style.color = "blue")
      : (temperatureMin.style.color = "red");
    temperatureMin.innerHTML = `Min: ${minTemperature}°C`;

    const temperatureMax = document.createElement("p");
    temperatureMax.classList.add("temperatureMax");
    maxTemperature > 0
      ? (temperatureMax.style.color = "red")
      : (temperatureMax.style.color = "blue");
    temperatureMax.innerHTML = `Max: ${maxTemperature}°C`;

    divEl.append(datePEl, dayPEl, nightPEl, temperatureMin, temperatureMax);
    wrapperResult.append(divEl);
  });
};

async function getNeighborsWeather(neighborsCity) {
  try {
    neighbors.innerHTML = "";
    const neighborsResponse = await fetch(
      `${URL}locations/v1/cities/neighbors/${neighborsCity}?apikey=${API_KEY}`
    );
    if (neighborsResponse.status === 200) {
      const neighborsResponseResponseJSON = await neighborsResponse.json();

      neighborsResponseResponseJSON.forEach((el) => {
        displayNeighborsWeather(el.LocalizedName);
      });
    }
  } catch {
    pEl.innerHTML = "Something went wrong.";
    wrapperResult.append(pEl);
  }
}

const displayNeighborsWeather = function (neighborsData) {
  const pEl = document.createElement("p");
  pEl.classList.add("neighborCity");
  pEl.innerHTML = `${neighborsData}`;
  neighbors.append(pEl);
};

btnWeather.addEventListener("click", cityId);

neighbors.addEventListener("click", (event) => {
  input.value = event.target.innerHTML;
  cityId();
  displayNeighborsWeather();
});
