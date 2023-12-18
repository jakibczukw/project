let numberOfFilms;

function start() {
  numberOfFilms = +prompt("How many films have you already watched?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("How many films have you already watched?", "");
  }
}
start();
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const film = prompt("One of the last films you watched?");
    const rating = prompt(`How would you rate "${film}"?`);

    if (
      film === null ||
      film === "" ||
      rating === null ||
      rating === "" ||
      film.length > 50
    ) {
      console.log("Invalid input. Skipping this entry...");
      i--;
      continue;
    }

    personalMovieDB.movies[film] = rating;
  }
}
rememberMyFilms();

function writeMyGenres() {
  for (let i = 0; i < 3; i++) {
    const genre = prompt("Your favorite film genre number " + (i + 1));
    if (genre === null || genre === "" || genre.length > 50 || !isNaN(genre)) {
      console.log("Invalid input. Skipping this entry...");
      i--;
      continue;
    }
    personalMovieDB.genres[i] = genre;
  }
}
writeMyGenres();

function showMyDB() {
  if (!personalMovieDB.private) {
    console.log(personalMovieDB);
  }
}
showMyDB();

function detectPersonalLvl() {
  if (numberOfFilms < 10) {
    console.log("Low amount of films");
  } else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
    console.log("Average amount of films");
  } else if (numberOfFilms > 30) {
    console.log("High amount of films");
  } else {
    console.log("Error");
  }
}
detectPersonalLvl();
