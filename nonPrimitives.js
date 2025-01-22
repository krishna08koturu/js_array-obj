const movies = [
  "Inception",
  "The Dark Knight",
  "Interstellar",
  "Tenet",
  "Oppenheimer",
];

console.log("Movies:", movies);
console.log("Number of movies:", movies.length);
const movieDetails = {
  title: "Inception",
  director: "Christopher Nolan",
  year: 2010,
  price: {
    normal: 200,
    premium: 350,
  },
  showTimings: ["10:00 AM", "2:00 PM", "6:00 PM"],
};

console.log("Movie Details:", movieDetails.showTimings[0]);

// 🎬 YOUR TURN! Create:
// 1. An array of your favorite movies
// 2. An object representing a movie ticket booking

const favouriteMovies = ["KGF", "Pushpa", "Sitharam", "Kalki", "Pokiri"];
console.log(favouriteMovies);

const movieTicketBooking = {
  title: "Pushpa",
  director: "Sukumar",
  year: 2024,
  price: {
    normal: 180,
    premium: 300,
  },
  showTimings: ["10:00 AM", "2:00 PM", "6:00 PM"],
};

console.log(movieTicketBooking);
