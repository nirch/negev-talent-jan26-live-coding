
console.log('Hello from JS!');
const myP = document.getElementById("my-p");
console.log(myP);
myP.innerHTML = "JS changed the content!";

const person = {
  name: "John",
  age: 33
}

console.log(person);
person.age = 50;
setTimeout(() => {
  person.age = 100;
}, 2000);
