

function printHello() {
  console.log("Hello");

  // all function return a value
  // if the return statement is missing it returns undefined
  // return undefined;
}

// Another syntax
// const printHello = function() {
//   console.log("Hello");
// }

// Trigger / Invoke / Call a function
printHello();

console.log(printHello());    // invokes the function and returns undeifned

// "Sending a function to another function"
// sending the printHello function to console.log
console.log(printHello);

setTimeout(printHello, 3000);

console.log("EOF");


// function numberToDigits(num) {

// }


function printName(fname, lname) {
  // let greetingStr = "Hello " + fname + " " + lname;
  let greetingStr = `Hello ${fname} ${lname}`;
  console.log(greetingStr);

  // in all function there is an "arguments"
  // console.log(arguments);
  if (arguments.length > 2) {
    console.log('and my age is: ' + arguments[2]);
  }
}

printName("John", "Doe");

let a = "Sarah";
let b = "Doe";

printName(a, b);

printName("John");              // Hello John undefined
printName();                    // Hello undefined undefined
printName("John", "Doe", 33);   // Hello John Doe



function getFullName(fname, lname) {
  return fname + " " + lname;
}

let myName = getFullName("Nir", "Channes");
console.log(myName);
console.log(getFullName("Nir", "Channes"));