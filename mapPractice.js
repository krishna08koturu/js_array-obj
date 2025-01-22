const numbers = [1, 2, 3, 4, 5];
const doubles = numbers.map((num) => num * 2);

console.log("Original Numbers:", numbers);
console.log("Double Numbers:", doubles);

// numbers filtering even or odd

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Even Numbers", evenNumbers);

const numbers2 = [20, 8, 3, 16, 21, 11];
const numbers2Triple = numbers2.map((num) => num * 3);
console.log("Triple Number", numbers2Triple);

// numbers2 sorting in ascending and descending order

const ascending = numbers2.sort((a, b) => a - b);
console.log("Numbers Ascending Order:", ascending);

const descending = numbers2.sort((a, b) => b - a);
console.log("Numbers Ascending Order:", descending);

const movieList = [
  { title: "Movie 1", price: 200 },
  { title: "Movie 2", price: 150 },
  { title: "Movie 3", price: 300 },
];

const formtedMoviesList = movieList.map((movie) => {
  return {
    title: movie.title,
    formatedPrice: `₹${movie.price}`,
  };
});

console.log("formated price movies list", formtedMoviesList);

// 3️⃣ BookMyShow Scenario
const showTimings = [
  { time: "10:00 AM", seats: 50 },
  { time: "2:00 PM", seats: 0 },
  { time: "6:00 PM", seats: 25 },
];

const availabilityStatus = showTimings.map((showTime) => {
  return {
    time: showTime.time,
    status: showTime.seats > 0 ? "Available" : "Housefull",
    seatsLeft: showTime.seats,
  };
});

console.log(availabilityStatus);

// 🎯 YOUR CHALLENGES:
// 1. Create an array of 5 movie objects with: title, rating, price
// 2. Use map to create a "premium" price (original price + 100)
// 3. Use map to create movie recommendations based on rating
// 1. Create an array of 5 movie objects with: title, rating, price

const moviesData = [
  { title: "KGF", rating: 4, price: 120 },
  { title: "Pushpa", rating: 4.2, price: 200 },
  { title: "Daku Maharaj", rating: 3.8, price: 150 },
  { title: "Mufasa", rating: 4, price: 100 },
  { title: "Devara", rating: 3.1, price: 150 },
];

// 2. Use map to create a "premium" price (original price + 100)

const updatedMoviesData = moviesData.map((movie) => {
  return {
    title: movie.title,
    rating: movie.rating,
    price: {
      normal: movie.price,
      premium: movie.price + 100,
    },
  };
});

console.log("Updated Price Movies Data", updatedMoviesData);

// 3. Use map to create movie recommendations based on rating

const moviesDataRecommandations = moviesData.map((movie) => {
  return {
    title: movie.title,
    rating: movie.rating,
    price: movie.price,
    recommendation: movie.rating > 4 ? "Highly Recommanded" : "Recommanded",
  };
});

console.log("Updated movies recommandations", moviesDataRecommandations);
