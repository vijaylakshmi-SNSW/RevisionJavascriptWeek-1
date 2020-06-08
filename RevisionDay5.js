// {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}      OBJECTS        }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
// Q1 -Create an object called pet with 2 properties. name and age
// Q2 - Add an array as a property called owners that lists all the people that live with/own the pet
// Q3 - Loop through the owners property and log all the names of owners
// Q4 - Create a new object using the new Object syntax.
// Q5 - Add a property to the object using the square bracket accessor
// Q6 - Add another property to the object using the dot accessor
// Q7 - use a for..in to log all the keys and values in the object declared in Q4


//Q1
let pet = {name: "Rex", age:5};
console.log(pet);
//Q2
pet.owner = ["Dan", "Tom" ,"Ram", "Daniel"];
console.log(pet);
//Q3
// for (let i = 0; i < pet.owner.length; i++) {
//     const element = pet.owner[i];
//     console.log(element);   
// }

// for (const name of pet.owner) {
//     console.log(name);
// }
// // //Q4
// let person = new Object();
// //Q5
// person["name"] = "Luke";
// console.log(person);
// //Q6
// person.lastName = "Parker";
// console.log(person);
// //Q7

// for (const key in person) {
//     //console.log(`${key} has value: ${person[key]}`);
//     console.log(key);
//     console.log(person[key]);
// }

// {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{      }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}

// let people = [
//     {
//         name: "Luke",
//         age: 23,
//         pet: {
//             name: "Rex",
//             species: "Dog",
//             age: 6
//         }
//     }, {
//         name: "Chris",
//         age: 35,
//         pet: {
//             name: "Lucky",
//             species: "Cat",
//             age: 2
//         }
//     }
// ];

// // console.log(`${people[0].name} is ${people[0].age} years old`);
// // console.log(`${people[0].name} has a pet ${people[0].pet.species} called ${people[0].pet.name}`);

// for (const person of people) {
//     console.log(`${person.name} is ${person.age} years old`);
//     if (person.pet.species == "Dog") {
//         console.log(`${person.name} has a pet ${person.pet.species} called ${person.pet.name}`);
//     }
// }

// const fs = require("fs");
// const path = require("path");
// let filetext = fs.readFileSync(path.join(__dirname, "DogBreeds.json")).toString()
// console.log(JSON.parse(filetext)) 
