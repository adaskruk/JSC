"use strict";

const clearBtn = document.querySelector("#clear");
const searchEl = document.querySelector("#search");
const source = document.querySelector("#source");
const container = document.querySelector("#card-container");
const startEl = document.querySelector("#start");
const errContEl = document.querySelector("#error");
const errMsgEl = document.querySelector("#error-message");

const detailsEl = document.querySelector("#details");
const closeBtn = document.querySelector("#close-details-btn");
closeBtn.addEventListener("click", closeDetails);
const overlayEl = document.querySelector("#overlay");

clearBtn.addEventListener("click", clearSearch);
searchEl.addEventListener("change", searchMovie);
container.addEventListener("click", showDetails);

function clearSearch() {
  searchEl.value = "";
  removeAllCards();
  startEl.classList.remove("hidden");
  errContEl.classList.add("hidden");
}

function removeAllCards() {
  let allCards = container.querySelectorAll(".card");
  if (allCards.length > 0) {
    allCards.forEach((card) => {
      card.remove();
    });
  }
}

async function showDetails(e) {
  const thisCard = e.target.closest(".card");
  if (thisCard) {
    let imdbID = thisCard.dataset.imdb;
    let filmData = await getMovieDetails(imdbID);
    console.log(filmData);
    const directorDEl = document.querySelector("#director");
    const writerDEl = document.querySelector("#writer");
    const actorsDEl = document.querySelector("#actors");
    const yearDEl = document.querySelector("#year");
    const genreDEl = document.querySelector("#genre");
    const langDEl = document.querySelector("#language");
    const countryDEl = document.querySelector("#country");
    const awardsDEl = document.querySelector("#awards");
    const boxOfficeDEl = document.querySelector("#boxoffice");
    const imdbRatingDEl = document.querySelector("#imdbRating");

    directorDEl.textContent = filmData.Director;
    writerDEl.textContent = filmData.Writer;
    actorsDEl.textContent = filmData.Actors;
    yearDEl.textContent = filmData.Year;
    genreDEl.textContent = filmData.Genre;
    langDEl.textContent = filmData.Language;
    countryDEl.textContent = filmData.Country;
    awardsDEl.textContent = filmData.Awards;
    boxOfficeDEl.textContent = filmData.BoxOffice;
    imdbRatingDEl.textContent = filmData.imdbRating;
    overlayEl.classList.remove("hidden");
    detailsEl.classList.remove("hidden");
  }
}

function closeDetails() {
  overlayEl.classList.add("hidden");
  detailsEl.classList.add("hidden");
}

async function searchMovie() {
  startEl.classList.add("hidden");
  errContEl.classList.add("hidden");
  let searchPhrase = searchEl.value;
  let searchResults = await getMovieData(searchPhrase);
  if (typeof searchResults == "string") {
    removeAllCards();
    errContEl.classList.remove("hidden");
    errMsgEl.textContent = searchResults;
    return;
  }
  removeAllCards();
  if (searchResults.length > 0) {
    showSearchResults(searchResults);
  }
}

function showSearchResults(resultsArr) {
  resultsArr.forEach((movie) => {
    // check creating aliases for object props
    let title = movie.Title,
      year = movie.Year,
      posterUrl = movie.Poster,
      imdbID = movie.imdbID;
    createCard(title, year, posterUrl, imdbID);
  });
}

function createCard(title, year, imgsrc, imdbID) {
  const card = source.content.cloneNode(true);
  const cardEl = card.querySelector(".card"),
    titleEl = card.querySelector(".title"),
    yearEl = card.querySelector(".year"),
    img = card.querySelector(".image");
  img.setAttribute("src", imgsrc);
  titleEl.textContent = title;
  yearEl.textContent = year;
  cardEl.dataset.imdb = imdbID;
  container.append(card);
}

async function getMovieData(title) {
  let url = `https://www.omdbapi.com/?apikey=bd1896e6&s=${title}`;
  try {
    let res = await fetch(url);
    if (res.ok) {
      let movie = await res.json();
      if (movie.Response === "True") {
        return movie.Search;
      } else {
        console.error(movie.Error);
        return movie.Error;
      }
    } else {
      console.error(res.status);
    }
  } catch (err) {
    console.error(err);
  }
}

// Details page
async function getMovieDetails(imdbID) {
  let url = `https://www.omdbapi.com/?apikey=bd1896e6&i=${imdbID}`;
  try {
    let res = await fetch(url);
    if (res.ok) {
      let movie = await res.json();
      if (movie.Response === "True") return movie;
    }
  } catch (err) {
    console.error(err);
  }
}
