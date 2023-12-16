const numberOfFilms = +prompt("How many films have you already watched?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

for (let i = 0; i < 2; i++) {
  let film = prompt("One of the last films you watched?");
  let rating = prompt(`How would you rate "${film}"?`);

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

if (numberOfFilms < 10) {
  console.log("Low amount of films");
} else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
  console.log("Average amount of films");
} else if (numberOfFilms > 30) {
  console.log("High amount of films");
} else {
  console.log("Error");
}
console.log(personalMovieDB);
