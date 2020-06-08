// let age = 16;
// let isDriving = true;
// let goingToWork = false;

// if(isDriving || age > 18 || goingToWork){
//     console.log("You should not drink");
// } else {
//     console.log("You can drink");
// }

// Restuarant
// let openTime = 17; 
// let closeTime = 22;
// let currentTime = 23;
//  let isMonday = false;

// if(currentTime < openTime   || currentTime > closeTime || isMonday) {
//     console.log("Restuarant is closed")
// } else {
//     console.log("Restuarant is open")
// }

//condition for restuarant is open, if current time is less than  closeTime and more than for openTime.
//consition for rest is closed, if current time is more than openTime and less than closeTime.


// let IfMonday = true;
// let firstName = null;
// let lastName = false;
// let customerId = null;
// let searchCustomer = firstName || lastName || customerId || "Incomplete Customer Detail";
// console.log(searchCustomer);

// ...................... &&............

// let openTime = 17; 
// let closeTime = 22;
// let currentTime = 14;
 

// if(currentTime < openTime && (currentTime > closeTime || currentTime < openTime ) ){
//     console.log("Restuarant is closed")
// } else {
//     console.log("Restuarant is open")
// }
// if (currentTime > openTime && currentTime < closeTime  ) {
//     console.log("Restuarant is open")
// } else {
//     console.log("Restuarant is closed")
// }



// if currentTime is less than openTime and currentTime is more than closeTiem - rest closed.

//if currentTime is greater than openTime and currentTime is less than closeTime - the rest open.

// let myFavRestuarant = null ;
// if (!myFavRestuarant) {
//     myFavRestuarant = "Thai Place";
// }
// console.log(myFavRestuarant);

//..............NULLISH coalescing operator '??'..........................
// let firstName = null;
// let lastName = undefined;
// let customerId = null;
// let searchCustomer = firstName ?? lastName ?? customerId ?? "Incomplete Customer Detail";
// console.log(searchCustomer);

// when it see the null or undefined, it act as a OR statement that means in the above example it takes the last value.

//.............................................LOOPING .........................
//Q1
// let i = 3;
// while(i<=8){
//     console.log(i);
//     i++;   
// }
// console.log("//////////////////////////");
// //Q2
// i = 14;
// while(i<=20){
//   if(i%2 == 0){
// console.log(i);

//   }
//   i++;
// }
// console.log("//////////////////////////");
// //Q3.
// i = 12;
// while(i>=7){
// console.log(i);
//   i--;
// }
// console.log("//////////////////////////");
// //Q4 Write all the numbers between 33 and 45 that are divisible by 3 in reverse order (inclusive)
// i = 45;
// while(i>=33){
//   if(i%3 == 0){
//     console.log(i);
//   }

//   i--;
// }
// Q1. ................................................................................
// //Q1.Write a for loop that logs all the numbers between 2 and 6
// console.log("///////////Q1//////////////");
// for (let i = 2; i <= 6; i++) {
//   console.log(i);  
// }
// // console.log("///////////Q2//////////////");
// //Q2. Write a for loop that logs all the odd numbers between 10 and 20
// for (let i = 10; i <= 20; i++) {
//   if(i%3 == 0){
//     console.log(i);
//   }
// }
// console.log("//////////Q3//////////////");
// //Q3.Write a for loop that logs all the numbers between negative 4 and positive 3 in reverse order
// for (let i = 3; i >= -4; i--) {
//   console.log(i);
// }
// console.log("////////////Q4/////////////");
// //Q4.Write a for loop that logs all the numbers that are multiples of 5 between 30 and 75
// for (let i = 30; i <= 75; i++) {
//   if(i%5 == 0){
//   console.log(i);
// }
// }
//Q1//////////////////////////////////////////////////////
// for (let i = 10; i <= 16; i++) {
//   if(i%2 !== 0){  
//     continue;
// }
// console.log(i);
// }
// console.log("///////////////////////////////////");

// //Q2.
// for (let i = 45; i >= 33; i--) {
//   if(i%2 == 0){  
//     continue;
// }
// console.log(i);
// }
// console.log("///////////////////////////////////");
// // //Q3.

// for (let i = 50; i <= 100; i++) {
//   if(i%10 !== 5){  
//     continue;
// }
// console.log(i);
// }
// console.log("///////////////////////////////////");

// //Q4
// i= 10;
// while(i<=16){
//   if(i%2 !== 0){ 
//     i++;    
//     continue;    
// } 
// console.log(i);
// i++;   
// }

// console.log("///////////////////////////////////");

// i= 45;
// while(i >= 33){
//   if(i%2 == 0){ 
//     i--; 
//     continue;
// } 
// console.log(i);
// i--;
// }
// console.log("///////////////////////////////////");
// i= 50;
// while(i <= 100){
//   if(i%10 !== 5){ 
//     i++; 
//     continue;
// }
// console.log(i);
// i++;
// }

// console.log("///////////////////////////////////");


