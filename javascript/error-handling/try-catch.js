

try {
  const result = JSON.parse('{name: "Nir"}');
  console.log(result);
} catch (error) {
  console.error('JSON parsing failed: ', error.message)
}


// const num = parseInt('bla');
// console.log(typeof num);
// console.log(num);
// const result = 10 / 'h';
// console.log(result);



// Sometimes using conditions is enough for error handling (ggod for cases when it is ok to ignore the error)

const students = [
  { name: "John", age: 33 },
  null
]

for (const student of students) {
  if (student) {
    console.log(student.age);
  }
}


console.log('eof');