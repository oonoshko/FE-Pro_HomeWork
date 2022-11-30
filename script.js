/* eslint-disable no-undef */
const API_KEY = "27ff6d2e";

const url = "https://www.omdbapi.com/";

const input = document.querySelector("#input1");
const button = document.querySelector("#btn");
const result = document.querySelector("#result");
const pagination = document.querySelector("#pagination");
const detailsMovie = document.querySelector(".detailsMovie");

const MOVIES_PER_PAGE = 10;

const loadMovies = async (page) => {
  try {
    const moviesResponse = await axios.get(
      `${url}?apikey=${API_KEY}&s=${input.value}&page=${page}`
    );

    const arrMovies = moviesResponse.data.Search;
    const moviesTotal = moviesResponse.data.totalResults;

    displayMovies(arrMovies);

    displayPagination(moviesTotal);
  } catch {
    input.value = "";

    const error = document.createElement("div");
    error.classList.add("mistake");

    const errorElImg = document.createElement("img");
    errorElImg.classList.add("error");
    errorElImg.src = "./images/notfound.png";

    const errorElP = document.createElement("p");
    errorElP.classList.add("textError");
    errorElP.innerHTML = "Movie not found";

    error.append(errorElImg, errorElP);
    result.append(error);
  }
};

const displayMovies = function (arrMovies) {
  result.innerHTML = "";

  arrMovies.forEach((elem) => {
    const {
      imdbID, Poster, Title, Year
    } = elem;
    const cardMovies = document.createElement("div");
    cardMovies.classList.add("cardMovies");

    const imgEl = document.createElement("img");
    imgEl.classList.add("poster");

    Poster !== "N/A"
      ? (imgEl.src = Poster)
      : (imgEl.src = "./images/image_not_found.png");

    const pTitle = document.createElement("p");
    pTitle.classList.add("title");
    pTitle.innerHTML = Title;

    const pYear = document.createElement("p");
    pYear.classList.add("year");
    pYear.innerHTML = Year;

    const bntDetails = document.createElement("button");
    bntDetails.classList.add("moreDetails");
    bntDetails.innerHTML = "Details";

    cardMovies.append(imgEl, pTitle, pYear, bntDetails);

    bntDetails.addEventListener("click", () => {
      loadDetails(imdbID);
    });
    result.appendChild(cardMovies);
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
  }
};

const navigatePages = function (event) {
  event.preventDefault();
  const currentPage = event.target.innerText;

  loadMovies(currentPage);
  detailsMovie.innerHTML = "";
};

pagination.addEventListener("click", navigatePages);

button.addEventListener("click", loadMovies);

const loadDetails = async (id) => {
  try {
    const responseDetails = await axios.get(`${url}?apikey=${API_KEY}&i=${id}`);
    const infoDetails = responseDetails.data;

    displayMoviesDetails(infoDetails);
  } catch {
    const error = document.createElement("div");
    error.classList.add("mistake");

    const errorElP = document.createElement("p");
    errorElP.classList.add("textError");
    errorElP.innerHTML = "Details not found";

    error.append(errorElP);
    detailsMovie.append(error);
  }
};

const displayMoviesDetails = function (details) {
  const {
    Title, Genre, Plot, Runtime, Actors, imdbRating
  } = details;

  const cardMoviesDetails = document.createElement("div");
  cardMoviesDetails.classList.add("cardMoviesDetails");

  detailsMovie.innerHTML = "";

  const name = document.createElement("p");
  name.innerHTML = Title;

  const genre = document.createElement("p");
  genre.innerHTML = `Genre: ${Genre}`;

  const discription = document.createElement("p");
  Plot !== "N/A"
    ? (discription.innerHTML = `Discription: ${Plot}`)
    : (discription.innerHTML = "Discription: Not found.");

  const runtime = document.createElement("p");
  Runtime !== "N/A"
    ? (runtime.innerHTML = `Runtime: ${Runtime}`)
    : (runtime.innerHTML = "Runtime: Not found.");

  const actors = document.createElement("p");
  Actors !== "N/A"
    ? (actors.innerHTML = `Actors: ${Actors}`)
    : (actors.innerHTML = "Actors: Not found.");

  const rating = document.createElement("p");
  imdbRating !== "N/A"
    ? (rating.innerHTML = `Rating: ${imdbRating}`)
    : (rating.innerHTML = "Rating: Not found.");

  cardMoviesDetails.append(name, genre, discription, runtime, actors, rating);
  detailsMovie.append(cardMoviesDetails);
};

window.addEventListener("click", (e) => {
  e.preventDefault();
  detailsMovie.innerHTML = "";
});
