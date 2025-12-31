
let x = 10;
let y = x;

console.log(y);           // 10

y = 20;

console.log(y);           // 20
console.log(x);           // 10

let p1 = {
  fname: "John",
  lname: "Doe",
  age: 35,
}

let p2 = p1;

console.log(p2.age);      // 35

p2.age = 80;
console.log(p2.age);      // 80
console.log(p1.age);      // 80

p2 = {
  fname: "Sarah",
  lname: "Doe",
  age: 60,
}

console.log(p1.age);      // 80
