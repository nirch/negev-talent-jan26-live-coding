function foo() {
  let x = 2
  return bar() * x;
}


function bar() {
  const num = 3
  return moo() + num
}


function moo() {
  return 1;
}

function print() {
  console.log('print from button');
}


function calcSum() {
  let sum = 0;
  for (let i = 0; i < 2000000000; i++) {
    sum += i;
  }
  console.log("sum = " + sum);
}

function countContinously(currNum, sum, resolve) {
  const step = 1000;
  const max = 2000000000;

  for (let j = currNum; j < currNum + step; j++) {
    sum += j
  }
  if (currNum >= max) {
    resolve(sum)
  } else {
    setTimeout(() => {
      countContinously(currNum + step, sum, resolve)
    }, 0)

  }
}

countContinously(0, 0, (result => console.log('result = ' + result)));

// setTimeout(calcSum, 1000);
// calcSum();

// 2 operations:
// 1) Waiting...  - This is executed on Web API in multiple threads
// 2) executing of the callback   - is executed on the main thread (after the timeout is set)
setTimeout(() => {
  console.log('bla bla bla in timeout')
}, 1000);

const res = foo()
console.log(res)