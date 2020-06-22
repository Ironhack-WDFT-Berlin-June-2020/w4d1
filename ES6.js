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
// console.log(name, age, hobby, student, address);

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

// console.log(a, b, c, d);



// spread operator


// returns the contents without the data structure

const reptiles = ["snake", "lizard", "alligator"];
const mammals = ["puppy", "kitten", "bunny"];

const animals = [...reptiles, ...mammals];

// console.log(animals);


// when uses as a parameter for a function numbers is now an array containing
// all the arguments
// function rest(...numbers) {
//     return numbers;
// }

// console.log(rest(3, 4, 5))

// ES 6 Advanced 

// Arrow Syntax

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const evens = numbers.filter(function (singleNumber) {
//     return singleNumber % 2 === 0;
// });

// console.log(evens);

// above callback as an arrow function 

// const evens = numbers.filter(singleNumber => singleNumber % 2 === 0);

// const filter = function (singleNumber) {
//     return singleNumber % 2 === 0;
// }

// as an arrow function
const filter = singleNumber => singleNumber % 2 === 0;

function accum(str) {
    return str.toLowerCase().split('').map(function (c, i) {
        return c.toUpperCase() + c.repeat(i);
    }).join('-')
}
// accum using arrow functions
// const accum = (str) => str.toLowerCase().split('').map((c, i) => c.toUpperCase() + c.repeat(i)).join('-')

// default parameter
const increment = (number, increment = 1) => number + increment;


const num = increment(3);
// console.log(num);



// this and arrow functions 


class Person {
    constructor() {
        this.age = 0;
    }

    growUp() {
        setInterval(function () {
            // this here is the window object because that
            // is the context where the callback is executed
            console.log(this)
            this.age++
            console.log(this.age)
        }, 1000)
    }
}

const person = new Person();
// this just logs NaN all the time bc 'this' on line 178/179 has not the rigth 
// context
person.growUp();

// one workaround is assign the this above to another variable and use 
// it from thereon instead of this


class Person {
    constructor() {
        this.age = 0;
    }

    growUp() {
        // here, outside of the setInterval, this has the context of Person
        // console.log('this in grow up:', this);

        let that = this;
        setInterval(function () {
            // console.log('that in setInterval:', that)
            that.age++
            console.log(that.age)
        }, 1000)
    }
}

const person = new Person();
person.growUp();



// option 2 : bind this


class Person {
    constructor() {
        this.age = 0;
    }

    growUp() {

        // we declare the function outside of setInterval
        function cb() {
            this.age++;
            console.log(this.age);
        }
        // then we reassign the function and call the bind() function on the
        // function - bind creates a new function that, when called, has its this
        // keyword set to the provided value,

        cb = cb.bind(this)
        cb.bind(this);
        setInterval(cb, 1000)
    }
}

const person = new Person();
person.growUp();




// option 3 : change callback in setIntervall to arrow function to make it work


class Person {
    constructor() {
        this.age = 0;
    }

    growUp() {
        // arrow functions takes the context of this from outside
        setInterval(() => {
            console.log(this)
            this.age++
            console.log(this.age)
        }, 1000)
    }
}

const person = new Person();




// Promises 

// A Promise is a JavaScript object representing the eventual completion or failure of an asynchronous operation



// this is how a method could look that returns a promise - you will not write
// one of these yourself during the bootcamp
// the settimeout is to simulate an operation that takes some time
function createRandomNumber(min, max) {
    return new Promise((resolve, reject) => {
        if (arguments.length !== 2) {
            return reject(new Error('Invalid number of arguments'));
        }
        setTimeout(() => {
            resolve(Math.floor(Math.random() * (max - min + 1) + min))
        }, 0);
    });

}


// using a promise with the .then and the .catch syntax
// you will do this a lot in the bootcamp, for example everytime 
// you retrieve data from the database

createRandomNumber(1, 4).then(response => {
    console.log('Operation successfull: ', response);
}).catch(err => {
    console.log('The following error ocurred:', err.message);
});