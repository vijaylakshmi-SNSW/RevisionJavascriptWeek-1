//"""""""""""""""""""""""""""""""""""""""""""{{{{{{{{{{{{{{{{  SWITCH STATEMENT  }}}}}}}}}}}}}}}}}}}}}"""""""""""""""""""""""""""""""""""""""""

//let harryPotterSeries = 1;

// switch (harryPotterSeries) {
//     case 1:
//         console.log("The Philosopher's Stone");
//         break;
//     case 2:
//         console.log("The Chamber of Secretse");
//         break;
//     case 3:
//         console.log("The Prisoner of Azkaban");
//         break;
//     case 4:
//         console.log("The Globlet of Fire");
//         break;

//     case 5:
//         console.log("The order of the Phoenix");
//         break;
//     case 6:
//         console.log("The Half-Blood Prince");
//         break;
//     case 7:
//         console.log("The Deathly Hallows");
//         break;

//     default:
//         console.log("Please select between option 1-7");
//         break;
// }
//"""""""""""""""""""""""""""""""""{{{{{{{{{{{{{{{}}}}}}}}}}}}}}} IF ELSE }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}"""""""""""""""""""""""""""""""""""""""
// let harryPotterSeries = 4;

// if (harryPotterSeries == 1) {

//     console.log("The Philosopher's Stone");
// }
// else if (harryPotterSeries == 2) {

//     console.log("The Chamber of Secretse");
// }
// else if (harryPotterSeries == 3) {
//     console.log("The Prisoner of Azkaban");
// }
// else if (harryPotterSeries == 4) {
//     console.log("The Globlet of Fire");

// }
// else if (harryPotterSeries == 5) {
//     console.log("The order of the Phoenix");

// }
// else if (harryPotterSeries == 6) {
//     console.log("The Half-Blood Prince");
// }
// else if (harryPotterSeries == 7) {
//     console.log("The Deathly Hallows");
// }

// else {
//     console.log("Please select between option 1-7");
// }

//{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{       SWITCH STATEMENT USING "STRING"          }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}

// let dayOfTheWeek = "Thursday";
// switch (dayOfTheWeek) {
//     case ("Saturday"):
//         console.log("Ahh, I can finally relax");
//         break;
//     case ("Sunday"):
//         console.log("Ah well, the weekend is nearly over");
//         break;
//     case ("Friday"):
//     case ("Thursday"):
//         console.log("Yay, it's almost the weekend");
//         break;

//     default:
//         console.log("Time for work then...");
//         break;
// }
//{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{       IF ELSE STATEMENT USING "STRING"          }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}

// let dayOfTheWeek = "Saturday";

// if (dayOfTheWeek == "Saturday") {

//     console.log("Ahh, I can finally relax");
// } else if (dayOfTheWeek == "Sunday") {

//     console.log("Ah well, the weekend is nearly over");
// } else if (dayOfTheWeek == "Friday" || "Thursday") {

//     console.log("Yay, it's almost the weekend");
// } else {
//     console.log("Time for work then...");
// }

//[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[      FUNCTIONS         ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
//Q1 Create a function that takes in a name and writes "Hello" and then the person's name to the console.
// function printName(name){
//     console.log("Hello" + " " + name);
// }
// printName ("Lakshmi");

// // Q2 Create a function that takes in a name and returns a string with the value "Hello" and then the person's name
// function printName(name){
//     return "Hello" + " " +name ;
// }
// console.log(printName ("Luke"));

// //Q3. Create a function that takes in 2 numbers and logs the largest of those numbers to the console
// function checkLargestNum (num1, num2) {
//     if (num1 > num2){
//         console.log(num1);
//     } else {
//         console.log(num2);
//     }
// }

// checkLargestNum (7,3);

//Q4. Create a function that takes in 2 numbers and returns the smallest of those numbers
// function getSmallestNum (num1, num2) {
//    let answer = null;
//     if (num1 < num2){
//         answer = num1;
//     } else {
//         answer = num2;
//     }
//     return (answer);
// }
// console.log(getSmallestNum (7,3));

//{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{   DEFAULT VALUES     }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}]]]]]]]]]]]]]]]]]]]]]]]]]]]]
//Q1 Update so that the name defaults to your name

// function printName(name = "Lakshmi"){
//         console.log("Hello" + " " + name);
//     }
//     printName();
// //Q2 Update so that the name defaults to Luke
//     function printName(name = "Luke") {

//             return "Hello" + " " +name ;
//         }
//         console.log(printName ());
        
// //Q3 Update so that the second parameter defaults to 100
//         function checkLargestNum (num1, num2 = 100) {
//                 if (num1 > num2){
//                     console.log(num1);
//                 } else {
//                     console.log(num2);
//                 }
//             }
            
//             checkLargestNum (7);
// //Q4 Update so that both parameters default to 5
//             function getSmallestNum (num1 = 5, num2 = 5) {
//                    let answer = null;
//                     if (num1 < num2){
//                         answer = num1;
//                     } else if (num1 > num2){
//                         answer = num2;
//                     } else {
//                         answer = "Both the inputs are equal";
//                     }
//                     return (answer);
//                 }
//                 console.log(getSmallestNum ());

 // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[  CHANGING THE FUNCTION INTO ARROW FUNCTION    ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

 //Step 1. Convert the function into a function expression
// Before:
// function addTwo(num) {
//   return num + 2;
// }
// After:
// const addTwo = function(num) {
//   return num + 2;
// }

 

// //Step 2. Remove the function keyword and add the arrow
// Before:
// const addTwo = function(num) {
//   return num + 2;
// }
// After:
// const addTwo = (num) => {
//   return num + 2;
// }

 

// //Step 3 (Optional). If there is only 1 parameter, remove the brackets around it
// Before:
// const addTwo = (num) => {
//   return num + 2;
// }
// After:
// const addTwo = num => {
//   return num + 2;
// }

 

// //Step 4 (Optional). If there is only 1 line in the function body, remove the curly brackets that declare the function body and remove 
// //the return keyword
// Before:
// const addTwo = num => {
//   return num + 2;
// }
// After:
// const addTwo = num => num + 2;

//{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{   CHANGING INTO ARROW FUNCTION Q1-Q4  }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}

//Q1 Create a function that takes in a name and writes "Hello" and then the person's name to the console.
// const printName =name => console.log("Hello" + " " + name);
// printName ("Lakshmi");

// // // Q2 Create a function that takes in a name and returns a string with the value "Hello" and then the person's name
// printName = name => "Hello" + " " +name;
// console.log(printName ("Luke"));

// // //Q3. Create a function that takes in 2 numbers and logs the largest of those numbers to the console
// checkLargestNum = (num1, num2) => {
//     if (num1 > num2){
//         console.log(num1);
//     } else {
//         console.log(num2);
//     }
// }

// checkLargestNum (7,3);

//Q4. Create a function that takes in 2 numbers and returns the smallest of those numbers
// getSmallestNum = (num1, num2)  => {
//    let answer = null;
//     if (num1 < num2){
//         answer = num1;
//     } else {
//         answer = num2;
//     }
//     return (answer);
// }
// console.log(getSmallestNum (7,3));

// getSmallestNum = (num1, num2)  => { return (num1 <num2) ? num1:num2;
//     let answer = null;
//      if (num1 < num2){
//          answer = num1;
//      } else {
//          answer = num2;
//      }
//      return (answer);
//  }
//  console.log(getSmallestNum (7,3));

//{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{   ARRAY     }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
// Q1 Create an array of numbers. There should be at least 5 elements
// let numArray = [1,3,5,2,3,5,6];
// console.log(numArray);
// // Q2 Add a number to the end of the number array
// numArray.push(16);
// console.log(numArray);
// //Q3 Add a number to the front of the number array
// numArray.unshift(14);
// console.log(numArray);
// //Q4 Change the value of the last element in the array to another number
// numArray[8] = 100;
// console.log(numArray);
// //Q5 Remove the last element of the array
// numArray.pop(100);
// console.log(numArray);
// //Q6 Remove the first 2 elements of the array
// numArray.shift(14);
// numArray.shift(1);
// console.log(numArray);
// //Q7-Q8 Update the second element in the array to be a new string.
// let strArray= ["Luke", "Tom", "Farry" , "Sara"];
// strArray[1] = "Rex";
// console.log(strArray);

// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[  ARRAY AND FOR LOOP   ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
//Q1 Create an array of strings
//  let strArray = ["This", "is", "the", "right", "way"];

// // //Q2 Loop over the array of strings and log each one to the console
// for(i = 0; i< strArray.length; i++){
//     console.log(strArray[i]);
// }

// //Q3 Create an array of numbers

// let numArray = [3,5,2,3,4];

// //Q4  - Loop over the array of numbe
// let arrayNew = [];
// for (let i = 0; i < numArray.length; i++) {
//     let element = numArray[i];
//     let newElement = element * 2;
//     arrayNew.push(newElement);
// }
// console.log(arrayNew);

//{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{  FOR ....OF LOOP }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

//Q1 Loop over an array of strings and log each one to the console using a for..of loop
// let strArray = ["This", "is", "the", "right", "way"];
// for (const element of strArray) {
//  console.log(element);
// }


// //Q2. Loop over an array of numbers and log the number times by 2 for each element in the array using a for..of loop
// let numArray = [3,5,2,3,4];
// console.log(numArray);
// let arrayNew = [];
// for (const iterator of numArray) {
//     let newElement = iterator * 2;
//     arrayNew.push(newElement);
// }
// console.log(arrayNew);

//{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{   MULTI DIMISIONAL ARRAY     }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}

// let naughtsAndCrosses = [
//     [" ", " ", "X"],
//     [" ", " ", " "],
//     [" ", "O", " "]
// ];

// for (const row of naughtsAndCrosses) {
//     let rowText = `${row[0]} | ${row[1]} | ${row[2]}`;

//     console.log(rowText);
// }

// {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{          COMPLEX ARRAY          }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
// Q1 - Declare an empty array using the new Array syntax
// Q2 - Push 3 string values to the array
// Q3 - Log all the string values in reverse order (last element logged first, etc.)
// Q4 - Create an array of numbers. There should be at least 4 elements in the array
// Q5 - Add a new element at the start and end of the array
// Q6 - Log all the elements with an even index
// Q7 - Log all the elements that are divisible by 2 (use a for..in loop)
// Q8 - Create a new array and fill it with all the elements that are greater than or equal to 10

//Q1 Declare an empty array using the new Array syntax
 let newArray = new Array();

// // //Q2 Push 3 string values to the array

newArray.push("value1");
newArray.push("value2");
newArray.push("value3");
console.log(newArray);

// // //Q3 Log all the string values in reverse order (last element logged first, etc.)
let newArray = ["value1", "value2", "value3"];
for (let j= newArray.length-1; j>=0; j--) {
   let  element= newArray[j];
   console.log(element);   
}
// for (let i = 2; i >= 0; i--) {
//     const element = array[i];
//     if(i <= 0) {
//         console.log(element)
//     }
    
//}

// //Q4.Create an array of numbers. There should be at least 4 elements in the array
let numArray = [34,63,72,54]
// //Q5. Add a new element at the start and end of the array
numArray.unshift(16);
numArray.push(07);
console.log(numArray);

//Q6. Log all the elements with an even index
let numArray = [34,63,72,54,43,83,53,55,43,56]
for (let i = 0; i < numArray.length; i++) {
  if(i%2 == 0){
    console.log(numArray[i]);
  }
}
//Q7. Log all the elements that are divisible by 2 (use a for..of loop)
let numArray = [34,63,72,54,43,83,53,55,43,56]
for (const iterator of numArray) {
  if (iterator%2==0) {
    console.log(iterator);
  }
}
//Q8. Create a new array and fill it with all the elements that are greater than or equal to 10
let array = [45,9,36,10,3,45];
let greaterThanTen = [];
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element >=10){
        greaterThanTen.push(element)
    }
    
}
console.log(greaterThanTen);




