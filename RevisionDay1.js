// array = ["3", "6", "8", "3"]
// obj = {name: "Lak", age:30 }
// let answer =array.find(o => o == "3");

// console.log(answer);
// let pets = [
//     {
//       name: "Rex",
//       age: 4,
//       ownerId: 42
//     },{
//       name: "Spot",
//       age: 7,
//       ownerId: 132
//     },{
//       name: "Scooby",
//       age: 3,
//       ownerId: 546
//     },{
//       name: "Lucky",
//       age: 1,
//       ownerId: 42
//     }
//   ];
//   let people = [
//     {
//       name: "Luke",
//       id: 42
//     },{
//       name: "Shaggy",
//       id: 546
//     },{
//       name: "Jade",
//       id: 132
//     }
//   ]; 

// Use the Array.filter function to create an array of all the pets that are less than 5 years old and that have either a pet or owner name 
// that starts with "S"











// let personWithPet =people.map(pets => pets.id == people.ownerId);

//  function sameOwner () {

//  }

//  console.log(personWithPet);
// function person(name, age) {
//   return { name: name, age: age }
// }

// console.log(person("viji", 32));
// Create a function that takes an 2 arguments, an array of objects and a string character (eg. "a" or "b", etc.). The function should return 
// all the objects in the array where the property name of that object contains the string character.

// let array = [{ name: "Tom", age: 4 }, { name: "Ram", age: 3 }, { name: "Sam", age: 8 }, { name: "Eric", age: 5 }]



// function printObjName(arrayst, strObj) {


//   let arrayStr = [];
//   for (let i = 0; i <arrayst.length; i++) {
//     let element = arrayst[i];

//     let found = false;
//     for (let j = 0; j < element.name.length; j++) {
//       let letter = element.name[j];
//        if(letter == strObj){
//          found = true;
//        }

//     }
//     if(found){
//       arrayStr.push(element);
//     }
//     } 
//     return arrayStr;


//   }


//   console.log(printObjName(array, "a"));



// // return obj.name;
// // function people(array) {

// //   let oldestPerson;
// //   for (let i = 0; i < array.length; i++) {
// //     let person = array[i];
// //     if (oldestPerson) {
// //       if (person.age > oldestPerson.age) {

// //         oldestPerson = person;
// //        } 
// //       }
// //       else {
// //         oldestPerson = person;

// //       }

// //     }
// //   return oldestPerson.name;

// function people(array) {
//   array.filter(o => o.age> person.age)
//   return o.name;
// }

// console.log(people(array));
// Use the Array.filter function to create an array of all the pets that are less than 5 years old and that have either a pet or owner name 
// that starts with "S

// let pets = [
//   {
//     name: "Rex",
//     age: 4,
//     ownerName: "Luke"
//   },{
//     name: "Spot",
//     age: 7,
//     ownerName: "Jade"
//   },{
//     name: "Scooby",
//     age: 3,
//     ownerName: "Shaggy"
//   },{
//     name: "Lucky",
//     age: 1,
//     ownerName: "Luke"
//   },{
//     name: "Sadie",
//     age: 3,
//     ownerName: "Daniel"
//   },{
//     name: "Duke",
//     age: 5,
//     ownerName: "Sabine"
//   }
//  ];

// let petOwner = pets.find(s => s.age < 5 && s.name[0] == "S" || s.ownerName[0] == "S");

// console.log(petOwner);
// let numArray = [0,1,2,3,4,5,6,7,8,9];
// let phoneNum=0;
// function createPhoneNumber(numArray){
//   for (i=0; i< numArray.length; i++) {
//     phoneNum = phoneNum+numArray[i]; 


//   }
//   console.log(phoneNum);
// }
//   createPhoneNumber(numArray);

//let sentence = "The quick brown fox jumps over the lazy dog.";

// function senEng(word) {

//   return sentence.includes("fill");
// }

// console.log(senEng());


// function countOccurrences(searchTerm) {
//   let count = 0;
//   let startIndex = 0;
//   while (true) {
//       let index = sentence.indexOf(searchTerm, startIndex);
//       if (index == -1) {
//           break;
//       }
//       count++;
//       startIndex = index + 1;
//   }
//   return count;
// // }
// // console.log(countOccurrences("jump"));

// // let admin,name;
// // admin = "John";
// // name = admin;
// // conole.log(name);

// // let planet = earth;
// // let currentVisitor = 

// // let planeLeavingFrom = "Sydney"
// // let planeGoingTo = "Melbourne"



// // let a = 1, b = 1;
// // let c = ++a;
// // let d = b++;
// //.......................................................................
// let myVariable = "Lakshmi";
// // console.log(Number(myVariable));
// // console.log(typeof (myVariable));

// let myOtherVariable = true;
// let myOtherNumber = Number(myOtherVariable);
// // console.log(myOtherNumber);
// // console.log(typeof(myOtherNumber));


// let myVariableAndMyOtherVariable = myVariable + myOtherVariable;
// console.log(myVariableAndMyOtherVariable);
// console.log(typeof(myVariableAndMyOtherVariable));


// myVariable = 30;
// myOtherVariable = null;
// console.log (myVariable);
// console.log(typeof(myVariable));

// myVariableAndMyOtherVariable = 

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

//  let number =10;

// function solution(number){
//   sumArray = [];
//  console.log(sumArray.reduce(n => n%3 == 0));
// }

//   for (let i = 0; i <= 10; i++){
//     let element = sumArray[i];

//   if (number% 3 || number % 5){
//     sumArray.push(element);
//     sunArray.reduce(s => s.number)
// }
// return number;
// }


// console.log(solution(number));



// let number = 15;
// let finalVal = 0;
// function solution (number){

//   for (let i = 0; i < number; i++) {
//     //let element = sumArray[i];
//     if (i%3 == 0 || i%5 == 0){
//       finalVal = finalVal + i ;
//     }
//   }
// }

// solution(15);
// console.log(finalVal);

// let finalVal = 0;
// function solution (number){

//   for (let i = 0; i < number; i++) {
//     //let element = sumArray[i];
//     if (i%3 == 0 || i%5 == 0){
//       finalVal = finalVal + i ;
//     }
//   }
//   return finalVal;
// }


// console.log(solution(10));

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same 
// value next to each other and preserving the original order of elements.

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]
// let iterable;
// var uniqueInOrder=function(iterable){

// }

//................................CODEWAR........................................
// let intArray = [3,1,4,7,1,1,8,4,1];
// //let newIntArray = [...intArray];
// function removeSmallest(numbers) {
//   numbers = numbers.slice(0);
//   const min = Math.min(...numbers);
//   numbers.splice(numbers.indexOf(min), 1);
//   return numbers;
// }

//return numbers.slice(0, pos).concat(numbers.slice(pos + 1));


//console.log(removeSmallest(intArray));
//console.log(removeSmallest(newIntArray));

//  console.log(removeSmallest(intArray));

// let currentYear = 2019;
// if(currentYear == 2019){
//   console.log(" that is incorrect")
// } else {
//   console.log("current year is 2020");
// }
//Q1
// if(NaN){
//   console.log("this statement won't print")
// }

// //   //Q2
//   if(10-10){
//     console.log("this statement won't print");
//   }

//   //Q3
//   if(12-45){
//     console.log("this statement is negative")
//   }

//   //Q4
//   if("0"){
//     console.log("All the values inside the quotation evaluates true");
//   }

// i = 0;
// while(i<=9){
//   //console.log(i);
//   i++;
// }
// console.log(i);
// let array = [];
// for(i=1; i<=10; i++){

//   if(i%2== 0){
//   array.push(i);

//   } else {
//     continue;
//   }
// }
// console.log(array[3])
//let wordArraya = [];
// let strArray = [];

// let count = 0;
// let word = ["aero", "rub", "all", "rabbit", "tall"]
// for (i = 0; i < word.length; i++) {
//   let str = word[i]
//   for (let j = 0; j < str.length; j++) {
//     let element = str[j];
//     if(element == "a"){
//       strArray.push(str);
//     }

//   }
// }

// console.log(strArray);

//console.log(count);

// Write a console app that prints the elements of an array that begin with the letter a (hint, a string is an array of characters so you can 
//   access the first character the same way you would access the first element in an array)

// let nameArray = ["tom", "sam", "dam", "wam", "dom", "wimo"];
// let count = 0;
// for (let i = 0; i < nameArray.length; i++) {
//   let element = nameArray[i];
//   for (let j = 0; j < element.length; j++) {
//     if(element[j] == "m"){
//       count++;
//     }

//   }
// }
// console.log(count);

// Write a console app that takes strings from the user and adds them to an array until the user enters a duplicate entry. Then stop accepting 
// user input and print each element in the array to the console.

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(question) {
  let answer;

  return new Promise((resolve, reject) => {
    rl.question(question, (ans) => {
      resolve(ans);
    })
  });
}


async function Program() {

  let strArray = [];
  let shouldloop = true;
  while (shouldloop) {
    let userInput = await askQuestion("please eneter the input ");
    for (let i = 0; i < strArray.length; i++) {
      const element = strArray[i];
      if (element == userInput) {
        shouldloop = false;
      }
      shouldloop = true;
      strArray.push(element);
    
    }

  }
  for (let i = 0; i < strArray.length; i++) {
    console.log(strArray[i]);
}
}
  Program().then(() => {
    process.exit(0);
  });