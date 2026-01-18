
// *** Scope

// let x = 10;                   // Global

// function foo() {
//   let y = 20;                 // Local
//   console.log(x + y);         // 30
// }
// foo();

// console.log(y);               // Error


// *** Nested Scope

// let x = 10;

// function foo() {
//   let y = 20;                 // Local

//   function innerFoo() {       // innerFoo is local to foo
//     let w = 50;
//     console.log(y + w + x)    // 80
//   }
//   innerFoo();
// }
// foo();

// innerFoo();                   // Error


// *** Nested Scope Chain

// function foo() {
//   let y = 20;

//   function innerFoo() {
//     let w = 50;
//     console.log(y + w)           // 70

//     function innerInnerFoo() {
//       // let y = 50;             // This is possible
//       console.log(y + w);        // 70
//     }
//     innerInnerFoo();
//   }
//   innerFoo();
//   // innerInnerFoo();              // Error
// }
// foo();

// *** Closure - The magic

function foo() {
  let y = 20;

  function innerFoo() {
    let w = 50;
    console.log(y + w);           // 70
  }

  return innerFoo;
}

const myFoo = foo();
myFoo();



// Closures in Functional Programming

function add(x) {
  function add2(y) {
    return x + y;
  }
  return add2;
}


console.log(add(5)(2));         // 7   
console.log(add(5)(5));         // 10
console.log(add(1)(5));         // 6

const add10 = add(10);
console.log(add10(5));          // 15




// if (true) {
//   let a = 10;       // only in if block
//   var b = 10;       // Global
// }
// console.log(b);     // 10
// console.log(a);     // Error


















