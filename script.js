// Comparison Operators: >, >=, <, <=, ==, !=, ===, !==
// Boolean Expression: Any expression using a comparison operator resulting in true or false
// Come up with 6 boolean expressions
// Use 6 different boolean operators
// Have 3 true and 3 falses appear

// let x = 0,
//   y = 10,
//   z = -5,
//   a = -5;
// let word1 = "puppy",
//   word2 = "kitten",
//   word3 = "PUPPY",
//   word4 = "0";

// // let bool1 = x < y;
// // console.log(bool1);

// // First Exercise
// let bool1 = z < y;
// console.log(bool1);

// let bool2 = x >= x;
// console.log(bool2);

// let bool3 = z != a;
// console.log(bool3);

// let bool4 = word1 == word3;
// console.log(bool4);

// let bool5 = x == word4;
// console.log(bool5);

// let bool6 = x === word4;
// console.log(bool6);

// Example. Surfs Up.
// let waveHeight = +prompt("How high are the waves?");

// if (waveHeight >= 6) {
//   console.log("Great day for surfing!");
// }

// Example. Comics.
// var hero = prompt("Enter a superhero");

// if (hero == "Batman") {
//   console.log("DC Comics");
// }
// if (hero == "Wonder Woman") {
//   console.log("DC Comics");
// }
// if (hero == "Captain America") {
//   console.log("Marvel");
// }
// if (hero == "Spiderman") {
//   1;
//   console.log("Marvel");
// }

// Example Secret Number
// var secretNumber = 7;
// var guess = +prompt("Guess a number between 1 and 10");

// if (guess == secretNumber) {
//   // true? run this code
//   console.log("YOU WIN!");
// } else {
//   // false? run this code instead
//   console.log("Sorry, you lose");
// }
// console.log("Thanks for playing"); // run either way

// Example. Surfs Up Part 2.
// let waveHeight = +prompt("How high are the waves?");

// if (waveHeight >= 6) {
//   console.log("Great day for surfing!");
// } else {
//   console.log("Go body boarding!");
// }
// console.log("Have a nice day");

// Example. Circle Area.

// let rad = +prompt("Enter circle radius");

// if (rad < 0) {
//   alert("Negative radii are illegal.");
// } else {
//   let area = Math.PI * rad ** 2;
//   alert("The area of circle with radius " + rad + " is " + area.toFixed(2));
// }

// Example Secret Number Part 2.
// If user is wrong, says guess was too high / too low
// var secretNumber = 7;
// var guess = +prompt("Guess a number between 1 and 10");

// if (guess == secretNumber) {
//   console.log("YOU WIN!");
// } else {
//   console.log("Sorry, you lose");
//   if (guess > secretNumber) {
//     console.log("Your guess was too HIGH");
//   } else {
//     console.log("Your guess was too LOW");
//   }
// }
// console.log("Thanks for playing");

// Example. Even or Odd.

// let age = +prompt("How old are you?");

// if (age > 17) {
//   console.log("You can see R rated movies");
// } else if (age >= 13) {
//   console.log("You can see PG-13 rated movies");
// } else if (age >= 5) {
//   console.log("You can see PG/G rated movies");
// } else {
//   console.log("You are too young for movies");
// }

// // Example. Surfs Up Part 3.1
// let waveHeight = +prompt("How high are the waves?");

// if (waveHeight >= 6) {
//   console.log("Great day for surfing!");
// } else if (waveHeight >= 3) {
//   console.log("Go body boarding!");
// } else if (waveHeight >= 0) {
//   console.log("Go for a swim.");
// } else {
//   console.log("Whoa! What kind of surf is that?");
// }
// console.log("Have a nice day");

let copies = +prompt("Enter the number of copies to be printed: ");
let pricePerCopy;

if (copies > 1000) {
  console.log("Price per copy is: $0.25"), (pricePerCopy = 0.25);
} else if (copies >= 750) {
  console.log("Price per copy is: $0.26"), (pricePerCopy = 0.26);
} else if (copies >= 500) {
  console.log("Price per copy is: $0.27"), (pricePerCopy = 0.27);
} else if (copies >= 100) {
  console.log("Price per copy is: $0.28"), (pricePerCopy = 0.28);
} else if (copies >= 0) {
  console.log("Price per copy is: $0.30"), (pricePerCopy = 0.3);
}
console.log("Total cost is: $" + (copies * pricePerCopy).toFixed(2));
