
const john = {
  name: "John",
  age: 30,
  address: {
    city: "Tel Aviv",
    street: "Dizingoff"
  },
  greet: function () {
    return "Hello " + this.name;
  }
};

const jane = {
  name: "Jane",
  age: 25,
  greet: function () {
    return "Hello " + this.name;
  }
};

// This doesn't work - it also changes john to mike
// const mike = john;
// mike.name = "Mike";


// const mike = {...john};     // Shallow copy
// mike.name = "Mike";
// mike.address.city = "Jerusalem";      // changed also John to Jerusalem

// before classes we could create a "Factory" function that creates "Person" object
// function Person(name, age) {
//   // ...
// }


