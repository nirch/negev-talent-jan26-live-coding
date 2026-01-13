let emptyArr = [];
let numArr = [1, 8, 22, 38, -55];


// adding item to the end
numArr.push(10);

// adding item to the beginning
numArr.unshift(0);

// deleting from am array

numArr.splice(1, 1);        // removes the 2nd item

// removes the last item
numArr.splice(numArr.length - 1);

// remove the first item
numArr.splice(0, 1);
numArr.shift();

console.log(numArr[1020]);    // undefined

console.log(numArr.indexOf(8));  // 1 (for the original array)

console.log(numArr.includes(8));  // true

