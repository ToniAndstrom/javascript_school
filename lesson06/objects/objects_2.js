/* Task 1
Create a JavaScript array named `library` that represents a collection of books.
Each book should have properties for `title`, `author`, and `yearPublished`. 
Add at least two book objects to this collection.
*/

// Your code here

const library = [
  {
    title: "The lord of the rings",
    author: "J.R.R. Tolkien",
    yearPublished: 1968,
  },

  {
    title: "Harry Potter and the philosophers stone",
    author: "J.K.Rowling",
    yearPublished: 1997,
  },

  {
    title: "A game of thrones",
    author: "George R. R. Martin",
    yearPublished: 1996,
  },
];

/* Task 2
Access the `title` of the first book in the `library` collection and log it to the console.
Modify the `yearPublished` for the second book in the collection to a new year, then log the updated book object to the console.
*/

// Your code here

console.log(library[0].title);
library[1].yearPublished = 2000;
console.log(library[1].yearPublished);

/* Task 3
Use dot notation to add a new property `genres` (an array of strings) to the first book in the `library`.
Use bracket notation to add a boolean property `isAvailable` to the same book, indicating its availability.
*/

// Your code here
library[0].genres = ["fantasy", "adventure"];
console.log(library[0]);

/* Task 4
Define a constructor function named `Book` that can create new book objects with properties for `title`, `author`, `yearPublished`, and `genres`.
Using the `Book` constructor, create a new book object with the provided input values and add it to the `library` collection.
*/

// Your code here

function Book(title, author, yearPublished, genres){
  this.title = title;
  this.author = author;
  this.yearPublished = yearPublished;
  this.genres = genres;
}

const mobyDick = new Book("Moby Dick", "Herman Melville", 1851, "adventure fiction, sea story" )
library.push(mobyDick);
console.log(library)
/* Task 5
Write a function named `createBook` that takes parameters for `title`, `author`, `yearPublished`, and `genres` (an array).
The function should return a new book object with these properties.
Test `createBook` by creating a new book object with user-provided input and logging the new book object to the console.
*/

// Your code here
/*
const createBook = {};

title = prompt("Would you kindly give a book title")
author = prompt("Who is the author?")
yearPublished = prompt("What year was it published?")
genres = prompt("What is the genre?")

createBook.data = {title, author, yearPublished, genres};


console.log(createBook);
*/



/* Task 6
Convert the `library` collection to a JSON string and log it to the console.
Parse the JSON string back into a JavaScript object and log the first book's title to the console.
*/

const jsonLibrary = JSON.stringify(library);
console.log(jsonLibrary);

const backToObject =JSON.parse(jsonLibrary);
console.log(backToObject);