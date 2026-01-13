// var z;

let x = 10;       // ES6 
// var x = 10;    // ES3 - Old syntax (var is more global)


console.log(x);

if (10 === 10) {
  var y = 100;
}

console.log(y);

if (5 === 5) {
  let w = 100;
}

// console.log(w);    // Error

console.log('EOF');

bla();

function bla() {
  var a = 10;

  if (true) {
    var b = 10;
  }

  console.log(b);     // ok
}

// const bla = function() {

// }

// console.log(a);       // Error - var inside a function is local
// console.log(b);       // Error - var inside a function is local


// Hoisting
console.log(z);         // undefined
var z = 15;             // the initialization of z = 15 happens in this line while the definition of "var z" is hoisted
console.log(z);         // 15


console.log(z1);         // undefined
let z1 = 15;             // the initialization of z = 15 happens in this line while the definition of "var z" is hoisted
console.log(z1);         // 15