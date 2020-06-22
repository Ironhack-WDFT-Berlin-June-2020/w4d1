// console.log('Hello ES6');

// var gets hoisted 
// console.log(message);
// var message = 'Hello';

// var can be available in the function (if declared inside a function) or the global scope
// var is only function scoped
// example : 

// var message = "Hello from the global scope!";

// function sayHelloFromLocalScope() {
//     var greeting = "Hello from functional/local scope!";
//     return greeting;
// }

// console.log(sayHelloFromLocalScope());
// // console.log(message); // <== Hello from the global scope!
// console.log(greeting); // <== ReferenceError: greeting is not defined

// var can be redeclared
// var name = 'Bob';
// var name = 'Alice';
// console.log(name);

// you cannot redeclare let
// let name = 'Bob';
// let name = 'Alice';


// let is block scoped - block is everything within { }
// let can't be redeclared


// let name = "Ironhacker";
// let name = "Hacker"; -> throws an error

if (true) {
    // let name = "Ted";
    // console.log(`Name inside if statement: ${name}`);
}

// console.log(`Name outside if statement: ${name}`);

// Name inside if statement: Ted
// Name outside if statement: Ironhacker


// Destructuring

// an easy way of extracting data from objects

let person = {
    name: 'Ironhacker',
    age: 25,
    hobby: 'chess',
    studen: true,
    address: {
        street: 'Lobeckstr.',
        city: 'Berlin'
    }
};
const { name, age, hobby, student, address } = person;
console.log(name, age, hobby, student, address);

// Bonus: Aliasing and Destructuring from a nested structure
// here we are aliasing the name to a variable called personName and the city we destructure 
// from one level down in the address object
// const { name: personName, age, hobby, student, address: { city }, address } = person;
// console.log(address);

// const personName = person.name;
// const age = person.age;
// const hobby = person.hobby;
// console.log(personName);




// Array destructuring

// const numbers = ["one", "two", "three", "four", "five"];

// let's take the first element
// const [first] = numbers;

// let's take the third element
// const [third] = numbers;

// console.log(third);

// having a default value
// const [a, b = 2] = [1, 3]

// console.log(b);

const [a, b = 2, c, d = 1] = [3, 4]

console.log(a, b, c, d);



// spread operator


// returns the contents without the data structure

const reptiles = ["snake", "lizard", "alligator"];
const mammals = ["puppy", "kitten", "bunny"];

const animals = [...reptiles, ...mammals];

// console.log(animals);


// when uses as a parameter for a function numbers is now an array containing
// all the arguments
function rest(...numbers) {
    return numbers;
}

console.log(rest(3, 4, 5))