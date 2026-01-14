
// name - string
// callback - function
function greetUser(name, callback) {
  console.log(`Hello ${name}`);
  callback();
  // arguments[1]();
}


let str = "Alice";

function afterGreeting() {
  console.log("Nice to meet you!");
}
// const afterGreeting = function() {
//   console.log("Nice to meet you!");
// }

console.log("Start");

// // Option 1 for sending a function - write the name of the function witout "()"
// greetUser("Alice", afterGreeting);

// // Option 2 for sending a function - writing the function itself "inline" (anonymous function)
// greetUser("Alice", function () {
//   console.log("Nice to meet you!");
// });


// setTimeout is asynchrnous 
setTimeout(afterGreeting, 2000);

setTimeout(function () {
  console.log("I am an anonymous iniline function sent to setTimeout")
}, 2000);

console.log("End");
