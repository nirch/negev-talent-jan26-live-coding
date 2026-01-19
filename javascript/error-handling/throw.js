function parseJSON(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("Failed to parse JSON:", error.message);
    throw error; // Re-throw the error to bubble it up
  }
}


// function divide(a, b) {
//   if (b === 0) {
//     throw new Error("Cannot divide by zero!");
//   }
//   return a / b;
// }


// // ui
// try {
//   parseJSON('inavlid');
// } catch (error) {
//   console.log('Try again your JSON is invalid');
// }


// const result = divide(5, 0);
// console.log(result);


// custom error

function DivideByZeroError(message, code) {
  const error = new Error(message);
  error.name = 'DivideByZeroError';
  error.code = code;
  return error;
}

function divide(a, b) {
  if (b === 0) {
    throw DivideByZeroError("Cannot divide by zero!", 506);
  }
  return a / b;
}

const result = divide(5, 0);
console.log(result);
