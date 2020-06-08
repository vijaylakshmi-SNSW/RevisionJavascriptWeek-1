// Q1 - Create an array of objects called libraries. Each should have the following properties: name which should be a string, address which
// should be a string and headLibrarian which should be an object with properties name and age.
// Q2 - For each Library, add a property called books which sholuld be an array of objects. Each book should have the following 
//properties: title, author, yearOfPublication
// Q3 - Use for..of and/or for..in loops to write the book titles across all the libraries that have been published in the last 20 years.
// Q4 - Use for..of and/or for..in loops to write all of the authors of books that appear in a library with a librarian that is under 30 
//years old.
// Q5 - Use for..of and/or for loops to write all the names of libraries that have at least 3 books published before 2000

//Q1
// let libraries = [{name: "Sydney's lib", address: "Sydney" , headLibrarian: {name:"Rex", age:23 }},
//                  {name: "Schofields lib", address: "Schofields" , headLibrarian: {name:"Kim", age:45 }},
//                  {name: "Castle hill lib", address: "Castle Hill" , headLibrarian: {name:"Sam", age:65 }},
//                  {name: "Box hill lib", address: "Box Hill" , headLibrarian: {name:"Amy", age:37 }}]  

//  //Q2.For each Library, add a property called books which sholuld be an array of objects. Each book should have the following 
// //properties: title, author, yearOfPublication

//  for (let i = 0; i < libraries.length; i++) {
//      const library = libraries[i];
//      library.books = [{title: "The king"+i, author: "abc"+i, yearOfPublication: 1900},
//                         {title: "The Queen"+i, author: "def"+i, yearOfPublication: 2013},
//                         {title: "The Prince"+i, author: "ghi"+i, yearOfPublication: 2016}]
     
//  }
//  //console.log(JSON.stringify(libraries));
 
 
// //  for (const iterator of libraries) {
// //      iterator.books = [{title: "The king", author: "abc", yearOfPublication: 2019},
// //                         {title: "The Queen", author: "def", yearOfPublication: 2013},
// //                         {title: "The Prince", author: "ghi", yearOfPublication: 2016}]

// //      console.log(libraries);
//  //}

//  //Q3. Use for..of and/or for..in loops to write the book titles across all the libraries that have been published in the last 20 years.
//  for (const library of libraries) {
//      for (const book of library.books) {
//         if(book.yearOfPublication < 2000){
//             console.log(book.title)
//         } 
//      }
//  }

 //Q4. Use for..of and/or for..in loops to write all of the authors of books that appear in a library with a librarian that is under 30 
//years old.

// for (const library of libraries) {
//     //console.log(library);
//     if (library.headLibrarian.age < 30) {
//         for (const book of library.books) {
//             console.log(book)   
//         }
     
        
//      }
// }

//Q5 Use for..of and/or for loops to write all the names of libraries that have at least 3 books published before 2000
// for (const library of libraries) {
//          for (const book of library.books) {
//             if(book.yearOfPublication < 2000){
//                console.log(library.name)
//             } 
//          }
//      }

     
// 


