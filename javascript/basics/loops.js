
let p1 = {
  fname: "John",
  lname: "Doe",
  age: 35,
}

let p2 = {
  fname: "John",
  lname: "Doe",
  age: 35,
}

// for .. in loop: loops over keys (props) in an object
let objectsAreEqual = true;
for (const prop in p1) {
  console.log(prop + ": " + p1[prop]);
  if (p1[prop] !== p2[prop]) {
    objectsAreEqual = false;
  }
}

console.log("Object equal: " + objectsAreEqual);



let numArr = [1, 8, 22, 38, -55];


for (let i = 0; i < numArr.length; i++) {
  console.log(numArr[i]);
}

// for .. of loops over all items in an array
for (const num of numArr) {
  console.log(num);
}