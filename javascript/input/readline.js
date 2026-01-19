// const readline = require('readline');
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// readline is async it is not halting for the user input
rl.question('What is your name? ', (nameAnswer) => {
  rl.question('What is your age? ', (ageAnswer) => {
    console.log(`Hello ${nameAnswer}, you are ${ageAnswer} years old`)
    rl.close();
  })
});

// this will print before the user input becuase readline is async
console.log('eof');