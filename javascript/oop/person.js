
class Person {
  // name is a private field I cannot access from outside
  #name = "";

  constructor(name, age, isMale = false) {
    this.#name = name;
    this.age = age;
    this.isMale = isMale;
    this.children = [];
  }

  greet() {
    return `Hello, I'm ${this.#name}`;
  }

  haveBirthday() {
    this.age++;
    return `Happy Birthday! I'm now ${this.age} yeasrs old`
  }

  get displayName() {
    return `${this.#name} (${this.age} years old)`
  }

  static createAnonymous() {
    return new Person("John Doe", 30);
  }
}

// invoking a static method (with the name of the class - no instance)
const anonymous = Person.createAnonymous();


const john = new Person("John", 30, true);
const jane = new Person("Jane", 30);

// console.log(john.#name);     // error cannot access private memebers

console.log(john);
console.log(jane);

console.log(john.greet());
console.log(jane.greet());

console.log(john.haveBirthday());
console.log(john.age);


class Teacher extends Person {
  constructor(name, age, subject, salary, isMale = false) {
    super(name, age, isMale);
    this.subject = subject;
    this.salary = salary;
  }

  isHappyFromSalary() {
    return this.salary > 100000;
  }

  greet() {
    return 'bla bla';
  }
}

class Student extends Person {
  constructor(name, age, studentId, isMale = false) {
    super(name, age, isMale);
    this.grades = [];
    this.studentId = studentId;
  }

  greet() {
    return super.greet() + ', student id is: ' + this.studentId;
  }

}

const teacher = new Teacher("Mrs. Smith", 55, "Math", 50000);
const student = new Student("Bob", 16, "s123", true);
console.log(teacher.haveBirthday());
console.log(student.greet());

console.log('Is happy? ' + teacher.isHappyFromSalary());


// Polymorphism
const people = [teacher, student, jane];
for (const person of people) {
  console.log(person.greet());
}

console.log(student.displayName)