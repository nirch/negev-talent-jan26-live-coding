
let x = 5;
let y = '5';

// ==
console.log(x == y);      // true


// ===
console.log(x === y);     // false


// always use === and !== over == and !=


console.log(52 !== "52");    // true
console.log(52 != "52");     // false
console.log(!(52 === "52"));    // true


let a = 1 || 10 || 'ssss';    // stops evaluation on the first true
console.log(a);               // 1

let b = 1 && 10 && 'ssss';    // stops evaluation on the first false
console.log(b);               // 'ssss'


// Falsy values
0
""
undefined
null
NaN
false


if (x > 10) {
  // if true
} else if (x === 0) {
  // 
} else {
  // otherwise here
}

if (x > 10) {
  // if true
} else {
  // otherwise here
}

// ? :

let carYear = 2023;
let carKm = 105000;
let currentYear = 2025;
let warrenty;

// Car has warrenty if less than 3 years and less than 100000 km
if (currentYear - carYear <= 3 && carKm < 100000) {
  warrenty = true;
} else {
  warrenty = false;
}

// (condition) ? <true return value> : <false return value>
let warrenty2 = currentYear - carYear <= 3 && carKm < 100000 ? true : false;


switch (x) {
  case 1:
  case 2:
  case 3:
  default:
}


// ex 6

// const gender = null
// let profession = "business"


// // o "businessman", "businesswoman", or "businessperson" depending on whether gender is "male", "female", or null.

// if (gender === "male") {
//   profession += "man"
// } else if (gender === "female") {
//   profession += "woman"
// } else if (!gender) {
//   profession += "person"
// } 

const gender = null
let profession = "business"

if (gender != null) {

  if (gender == "male") {
    console.log(profession + "men")

  }
  else if (gender == "female") {
    console.log(profession + "woman")

  }
}
else {
  console.log(profession + "person")
}