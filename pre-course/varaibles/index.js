
console.log("Hello JS in Node!");

// Primitive Variables

// Type
// number (3, 3.4, -99.2) 
// boolean (true, false)
// string ("a", 'a', "3", 'false')
//
// undefined


let x;        // undefined
x = 5;        // number
x = "Hello";  // string
x = true;     // boolean

let longSentence = "don't call me";

console.log(x);         // true
console.log(typeof x);  // "boolean"
console.log(5);

// let, var, const
// var is an old syntax
// from ES6 ->  let, const

const y = 10;
// y = 5;          // error;

console.log("Bla bla");


x = null;               // null is not a type - null is value
console.log(typeof x);  // object


// Complex Types
//
// array
// object

x = 10;
x += 'bla';
console.log(x);         // '10bla'
console.log(typeof x);  // string


// variables must start with letter or '_' or '$'
// let 10y;    // error

// NaN - Not a Number
let w = 6 / 'a';
console.log(w);
console.log(typeof w);


