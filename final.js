// 📝 Final Project: Mini BookMyShow (Extra Credit)
// Combine all concepts to create a small movie booking system:

// Create an array of movie objects
const movieCollection = [
  {
    title: "Inception",
    price: 200,
    seatsAvailable: 50,
    ratings: 4.5,
  },
  {
    title: "The Dark Knight",
    price: 150,
    seatsAvailable: 20,
    ratings: 3.5,
  },
  {
    title: "Interstellar",
    price: 220,
    seatsAvailable: 0,
    ratings: 3.8,
  },
  {
    title: "Tenet",
    price: 250,
    seatsAvailable: 10,
    ratings: 4.2,
  },
  {
    title: "Oppenheimer",
    price: 200,
    seatsAvailable: 0,
    ratings: 4.1,
  },
];

// 1. Use map to display all movies with their details
movieCollection.map((movie) => console.log(movie));

const moviesDisplay = movieCollection.map((movie) => {
  return {
    title: movie.title,
    price: movie.price,
    seatsAvailable: movie.seatsAvailable,
    ratings: movie.ratings,
  };
});

console.log("Movies Data", moviesDisplay);

// 2. Use map to show only available movies

const availableMovies = movieCollection.filter((movie) => {
  if (movie.seatsAvailable > 0) {
    return movie;
  }
});

console.log("Available movies only", availableMovies);

// 3. Use map to apply weekend surge pricing
const weekendSurgePricing = 1.15;

const updatedMoviesWeekendSurgePrice = movieCollection.map((movie) => {
  return {
    title: movie.title,
    price: Math.round(movie.price * weekendSurgePricing),
    seatsAvailable: movie.seatsAvailable,
    ratings: movie.ratings,
  };
});

console.log(updatedMoviesWeekendSurgePrice);
