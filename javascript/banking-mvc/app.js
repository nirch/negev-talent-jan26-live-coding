const ui = require('./ui');
const bank = require('./bank');

function handleChoice(choice) {
  switch (choice) {
    case '1':
      handleBalance();
      break;
    case '2':
      break;
    case '3':
      break;
    case '4':
      break;
    default:
      break;
  }
}

function handleBalance() {
  const balance = bank.getBalance();
  ui.showBalance(balance);
}

function run() {
  // loop until choice === 4
  ui.displayMenu();
  const choice = ui.getMenuChoice();
  handleChoice(choice);
}

run();