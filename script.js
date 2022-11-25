const API_KEY = "27ff6d2e";

const input = document.querySelector("#input1");
const button = document.querySelector("#btn");
const result = document.querySelector("#result");
const pagination = document.querySelector("#pagination");
const detailsMovie = document.querySelector(".detailsMovie");

let counter = 1;
const MOVIES_PER_PAGE = 10;

const loadMovies = function () {
  const url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${input.value}&page=${counter}`; // тут я захордкодив значення batman й пагінація працює

  fetch(url)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
    })
    .then((movies) => {
      const moviesList = movies.Search;
      const moviesTotalList = movies.totalResults;

      displayMovies(moviesList);

      displayPagination(moviesTotalList);
    })
    .catch((error) => {
      input.value = "";
      pagination.innerHTML = "";
      error = document.createElement("div");
      error.classList.add("mistake");

      const errorElImg = document.createElement("img");
      errorElImg.classList.add("error");
      errorElImg.src = "./images/notfound.png";

      const errorElP = document.createElement("p");
      errorElP.classList.add("textError");
      errorElP.innerHTML = "Movie not found";

      error.append(errorElImg, errorElP);
      result.append(error);
    });
};

const displayPagination = function (total) {
  pagination.innerHTML = "";
  detailsMovie.innerHTML = "";

  for (let i = 0; i < total / MOVIES_PER_PAGE && i < 100; i++) {
    const spanEl = document.createElement("span");
    spanEl.classList.add("page");

    spanEl.innerHTML = i + 1;

    pagination.append(spanEl);

    spanEl.addEventListener("click", navigatePages);
    if (counter !== 1) {
      counter = 1;
    }
  }
};

const navigatePages = function (event) {
  event.preventDefault();
  counter = +event.target.innerText;
  loadMovies();
  detailsMovie.innerHTML = "";
};

const displayMovies = function (moviesList) {
  result.innerHTML = "";

  moviesList.forEach((elem) => {
    const cardMovies = document.createElement("div");
    cardMovies.classList.add("cardMovies");

    const imgEl = document.createElement("img");
    imgEl.classList.add("poster");

    elem.Poster !== "N/A"
      ? (imgEl.src = elem.Poster)
      : (imgEl.src = "./images/image_not_found.png");

    const pTitle = document.createElement("p");
    pTitle.classList.add("title");
    pTitle.innerHTML = elem.Title;

    const pYear = document.createElement("p");
    pYear.classList.add("year");
    pYear.innerHTML = elem.Year;

    const bntDetails = document.createElement("button");
    bntDetails.classList.add("moreDetails");
    bntDetails.innerHTML = "Details";

    cardMovies.append(imgEl, pTitle, pYear, bntDetails);

    bntDetails.addEventListener("click", () => {
      loadDetails(elem.imdbID);
    });
    result.appendChild(cardMovies);
  });
};

button.addEventListener("click", loadMovies);

const loadDetails = function (id) {
  const urlDetails = `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`;

  fetch(urlDetails)
    .then((success) => {
      if (success.status === 200) {
        return success.json();
      }
    })
    .then((info) => {
      displayMoviesDetails(info);
    })
    .catch((error) => {
      error = document.createElement("div");
      error.classList.add("mistake");

      const errorElP = document.createElement("p");
      errorElP.classList.add("textError");
      errorElP.innerHTML = "Movie not found";

      error.append(errorElP);
      result.append(error);
    });
};

const displayMoviesDetails = function (info) {
  const cardMoviesDetails = document.createElement("div");
  cardMoviesDetails.classList.add("cardMoviesDetails");

  detailsMovie.innerHTML = "";

  const name = document.createElement("p");
  name.innerHTML = info.Title;

  const genre = document.createElement("p");
  genre.innerHTML = `Genre: ${info.Genre}`;

  const discription = document.createElement("p");
  info.Plot !== "N/A"
    ? (discription.innerHTML = `Discription: ${info.Plot}`)
    : (discription.innerHTML = "Discription: Not found.");

  const runtime = document.createElement("p");
  info.Runtime !== "N/A"
    ? (runtime.innerHTML = `Runtime: ${info.Runtime}`)
    : (runtime.innerHTML = "Runtime: Not found.");

  const actors = document.createElement("p");
  info.Actors !== "N/A"
    ? (actors.innerHTML = `Actors: ${info.Actors}`)
    : (actors.innerHTML = "Actors: Not found.");

  const rating = document.createElement("p");
  info.imdbRating !== "N/A"
    ? (rating.innerHTML = `Rating: ${info.imdbRating}`)
    : (rating.innerHTML = "Rating: Not found.");

  cardMoviesDetails.append(name, genre, discription, runtime, actors, rating);
  detailsMovie.append(cardMoviesDetails);
};

window.addEventListener("click", (e) => {
  e.preventDefault();
  detailsMovie.innerHTML = "";
});
