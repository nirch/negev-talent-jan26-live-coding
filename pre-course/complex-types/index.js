
let person = {
  fname: "John",
  "lname": "Doe",
  age: 33,
  isMale: true,
  address: {
    street: "Dizingoff",
    number: 99,
    city: "Tel Aviv"
  },
  sayName: function () {
    console.log(`My name is ${this.fname} ${this.lname}`);
    // console.log("My name is " + this.fname + " " + this.lname);
  },
  "1": 10
}

// update value inside object
person.age = 22;

// access prop/key in object
console.log(person.age);
console.log(person["age"]);


// when to use the dynamic key fetch
// 1) when your key is not a standard JS literal
console.log(person["1"]);
// 2) when coding time the prop value is inside a variable
let propName = "fname";
console.log(person[propName]);

// adding a new key to the object
person.height = 178;
// person.newAge = person.age;
// delete person.age;

console.log(person);

// accessing nested values in object
console.log(person.address.city);


// objects + conditions

let p1 = {
  fname: "John",
  lname: "Doe",
  age: 35,
}

let p2 = p1;

console.log(p2.age);      // 35
console.log(p1 === p2);   // true

let p3 = {
  fname: "John",
  lname: "Doe",
  age: 35,
}

console.log(p3.age);      // 35
console.log(p1 === p3);   // false (pointing to a different place in the memory)
