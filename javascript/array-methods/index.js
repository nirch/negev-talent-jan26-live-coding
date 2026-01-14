
// *** sort ***

console.log("Sort Example");
const numArr = [2, 10, 22, -3, 45, 9];

numArr.sort(function (a, b) {
  return a - b;
  // if (a < b) {
  //   return -1;
  // } else if (a > b) {
  //   return 1;
  // } else {
  //   return 0;
  // }
});

console.log(numArr);

const p1 = {
  fname: "John",
  lname: "Doe",
  age: 55
};
const p2 = {
  fname: "Sarah",
  lname: "Doe",
  age: 35
};
const p3 = {
  fname: "Mike",
  lname: "Doe",
  age: 45
};
const people = [p1, p2, p3];

people.sort(function (pA, pB) {
  return pA.age - pB.age
})

// *** forEach ***

people.forEach(function (person, index) {
  console.log(index + ": " + person.fname);
})

// for (const person of people) {
// }

// *** Map ***
// Creating a new array that is a manipulation of the source array

// Creating an array of names from an array of people

// first without map
const namesArr = [];
for (const person of people) {
  namesArr.push(person.fname + " " + person.lname);
}
console.log(namesArr);


const names = people.map(function (person) {
  return person.fname + " " + person.lname
});
console.log(names);


// *** filter ***
// creates a new array which is filtered from the source array

// Create an array with even numbers only from the source array

// without filter
const evenArr = [];
for (const num of numArr) {
  if (num % 2 === 0) {
    evenArr.push(num);
  }
}
console.log(evenArr);

const evens = numArr.filter(function (num) {
  return num % 2 === 0;
})
console.log(evens);

