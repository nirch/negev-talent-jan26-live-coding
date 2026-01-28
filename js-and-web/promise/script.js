// coin flip
// it takes 500 ms for the coin to have a result
// resolve = heads
// reject = tails


const WAIT_MS = 500;

// Creating an async function using callback
function coinFlipCallback(callback) {
  setTimeout(() => {
    const random = Math.random();
    if (random > 0.5) {
      callback("Heads");
    } else {
      callback("Tails");
    }
  }, WAIT_MS)
}

function coinCallback() {
  // consuming an async function using callback
  coinFlipCallback((result) => {
    console.log(result);
  })
}


// Creating an async function using promise
function coinFlipPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      if (random > 0.5) {
        resolve("Heads");
      } else {
        reject("Tails");
      }
    }, WAIT_MS);
  });
}

function coinPromise() {
  coinFlipPromise().then((result) => {
    console.log(result);
  }).catch((result) => {
    console.log(result);
  })
}

// const promise = coinFlipPromise();

// // "then" will be triggered with the promise is resolved
// promise.then((result) => {
//   console.log(result);
// })

// // "catch" will be triggered with the promise is resolved
// promise.catch((result) => {
//   console.log(result);
// })

