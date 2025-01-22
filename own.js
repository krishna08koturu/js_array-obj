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

// console.log(movieCollection);

const new2 = movieCollection.filter((a) => {
  if (a.price > 200) {
    return a;
  }
});
// console.log(new2);

const students = [
  { name: "suresh", marks: 350 },
  { name: "Kumar", marks: 450 },
  { name: "Aravind", marks: 520 },
];

console.log(students);

const result = students.map((student) => {
  return {
    name: student.name,
    marks: student.marks,
    result: student.marks > 420 ? "Pass" : "Fail",
  };
});

console.log(result);

const marksAdded = students.map((std) => {
  if (std.name === "suresh") {
    return { ...std, marks: std.marks + 52 };
  } else {
    return std;
  }
});

console.log(marksAdded);

const ar = [12, 18, 14, 28, 31, 42, 56];
console.log(ar);

const idx = ar.findIndex((a) => a == 31);
console.log(idx);

// ar.forEach((a) => console.log(a));

// for (let a in ar) {
//   console.log("Array Element", ar[a]);
// }

let greet = "  Hello how are you!";

console.log(greet.toUpperCase());

console.log(greet.includes(" "));
// startsWith,endsWith,includes,toLowerCase, length,trim,find,indexOf,join,split
