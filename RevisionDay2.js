//Q1
// if(false){
//   console.log("this statement prints if the boolean is true");
// } else {
//   console.log("this statement prints if the boolean is false ")
// }

//   // //Q2
//   if(10-10){
//     console.log("this condition evaluates true");
//   } else{
//     console.log("this condition evaluate false ")
//   }

//   // //Q3
//   if(12-45){
//     console.log("this condition evaluates true ")
//   } else {
//     console.log("this condition evaluate false");
//   }

//   // //Q4
//   if("0"){
//     console.log("All the values inside the quotation evaluates true");
//   } else {
//     console.log("this evaluates if its a false statement");
//   }

//   //............................................IF ELSE Statement ..............................................
// //Q1
//   let food = "Galetto";
// if (food == "Pizza"){
//   Console.log("I like Pizza");
// } else if (food == "Pasta"){
// console.log("I like Pasta");
// } else if (food == "Spagatti") {
//   console.log("I like Spagatti")
// } else if (food == "Galetto") {
//   console.log("I like galetto the most")
// }
// else {
//   console.log("I wish I had Italian food")
// }

// // //Q2.
// let food = "Paneer curry";
// if (food == "Paneer curry"){
//   Console.log("I love Paneer curry");
// } else if (food == "Butter Chicken"){
// console.log("I am Vegitarian")
// } else {
//   console.log("I wish I had Indian pure vegitarian food")
// }
// let food = "Pizza";

// switch (food) {
//   case ("Pizza"):
//     console.log("I like Pzza")
//     break; 

//     case ("Pasta"):
//     console.log("I like Pasta")
//     break;

//   default: ("I wish I had Italian food")
//     break;
// }

//.........................................NESTED IF CONDITION................................
// Write a decision tree that checks the color and price of a car
// If the price is over 50000 and the color is red then log "I like red cars"
// If the price is over 50000 and the color is not red then log "That's too expensive"
// If the price is under 50000 but over 10000 and the color is blue then log
// "I like blue cars too". If the price is under 50000 and over 10000 and the color is red
// then log "I like red cars, and this one's a bargain".
// If the price is under 10000 then log "Wow, what a bargain"


// let carColor = "Red";
// let carPrice = 15000;

// if (carPrice > 50000) {
//   if (carColor == "Red") {
//     console.log("I like Red Car")
//   } else {
//     console.log("Thats too Expensive")

//   }
// }
// else if (carPrice < 50000) {
//   if (carPrice > 10000) {
//     if (carColor == "Blue") {
//       console.log("I like blue car too");
//     } else if (carColor == "Red") {
//       console.log("I like red cars, and this one's a bargain")
//     }

//   } else {
//     console.log("Woow, What a bargain");

//   }
// }
// //.....................................................................
// let favGenre = " Rock";
// let favPeriod = "90s";

// if (favGenre == "Rock") {
//   if (favPeriod == "80s") {
//     console.log("my Fav 80s rock artist is ABC");
//   } else if (favPeriod == "90s") {
//     console.log("my Fav 90s rock artist is DEF");
//   }

//   else {
//     console.log("Please recommend a good rock artist")
//   }
// }

// else if (favGenre == "Jazz") {
//   if (favPeriod == "80s") {
//     console.log("my fav 80s Jazz artist is GHI")
//   } else if (favPeriod == "60s") {
//     console.log("my fav 60s Jazz artist is JKL ")
//   }
//   else {
//     console.log("Please recommend good Jazz artist")
//   }
// }
// else {
//   console.log("Please Recommend a pop artist");
// }

//..................................Conditional OPerator......................



// let carColor = "red"
// let carValue = (carColor = "red") ? "50000" : "10000"
// console.log(carValue);


// let name = "Lakshmi"
// let setMessage = (name == "Lakshmi") ? "Hello Me" : "Hello" + name
// console.log(setMessage);

let array = [2,5,3,6,4];
console.log(array[0]);
