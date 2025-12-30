
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

