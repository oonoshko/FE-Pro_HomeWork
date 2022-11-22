const API_KEY = "27ff6d2e";

const input = document.querySelector("#input1");
const button = document.querySelector("#btn");
const result = document.querySelector("#result");

const detailsMovie = document.querySelector(".detailsMovie");

let counter = 1;
const MoviesPerPage = 10;

const loadMovies = function () {
  const url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${input.value}&page=${counter}`;

  const getPromise = fetch(url);

  getPromise
    .then((success) => {
      if (success.status === 200) {
        return success.json();
      }
    })
    .then((movies) => {
      const moviesList = movies.Search;
      const moviesTotalList = movies.totalResults;

      displayMovies(moviesList);

      displayPagination(moviesTotalList);
    })
    .catch((error) => {
      error = document.createElement("div");
      error.classList.add("mistake");
      error.innerHTML = `
      <img class='error' src='./images/notfound.png' alt="pictupe">
      <p class='textError'>Movie not found</p>`;
      result.append(error);
      console.log("Movie not found");
    });
  input.value = "";
  // counter += 1;
};

const displayPagination = function (total) {
  const pagination = document.querySelector("#pagination");
  for (let i = 0; i < total / MoviesPerPage; i++) {
    const spanEl = document.createElement("span");

    spanEl.innerHTML = i + 1;

    pagination.append(spanEl);

    spanEl.addEventListener("click", (event) => {
      counter = event.target;
      console.log(counter);
    });
  }
};

const displayMovies = function (moviesList) {
  result.innerHTML = "";

  moviesList.forEach((elem) => {
    const cardMovies = document.createElement("div");
    cardMovies.classList.add("cardMovies");
    const bntDetails = document.createElement("button");
    bntDetails.classList.add("moreDetails");

    if (elem.Poster !== "N/A") {
      cardMovies.innerHTML = `
        <img class='poster' src='${elem.Poster}' alt="${elem.Title}">
        <p class='title'>${elem.Title}</p>
        <p class='year'>${elem.Year}</p>`;
    } else {
      cardMovies.innerHTML = `
        <img class='poster' src='./images/image_not_found.png' alt="pictupe">
        <p class='title'>${elem.Title}</p>
        <p class='year'>${elem.Year}</p>`;
    }

    bntDetails.innerHTML = "Details";
    cardMovies.appendChild(bntDetails);

    bntDetails.addEventListener("click", () => {
      loadDetails(elem.imdbID);
    });
    result.appendChild(cardMovies);
  });
};

button.addEventListener("click", loadMovies);

const loadDetails = function (id) {
  const urlDetails = `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`;

  const getDataDetails = fetch(urlDetails);

  getDataDetails
    .then((success) => {
      if (success.status === 200) {
        return success.json();
      }
    })
    .then((info) => {
      displayMoviesDetails(info);
    })
    .catch((error) => {
      console.log("Movie not found");
    });
};

const cardMoviesDetails = document.createElement("div");
cardMoviesDetails.classList.add("cardMoviesDetails");

const displayMoviesDetails = function (info) {
  console.log(info);
  detailsMovie.innerHTML = "";

  cardMoviesDetails.innerHTML = `
    <p>Name: ${info.Title}</p>
    <p>${info.Year} release year</p>
    <p>Genre: ${info.Genre}</p>
    <p>Actors: ${info.Actors}</p>
    <p>Discription: ${info.Plot}</p>
    <p>Runtime: ${info.Runtime}</p>        
    <p>Rating: ${info.imdbRating}</p>        
    `;

  detailsMovie.appendChild(cardMoviesDetails);
};
