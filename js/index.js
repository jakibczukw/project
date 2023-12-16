const numberOfFilms = +prompt("How many films have u already watched?", '')

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt("One of last films u have watched?", ""),
      b = prompt("How would u rate them?", ""),
      c = prompt("One of last films u have watched?", ""),
      d = prompt("How would u rate them?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);