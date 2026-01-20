const prompt = require('prompt-sync')();

function displayMenu() {
  console.log("=== Banking System ===");
  console.log("1) Check Balance");
  console.log("2) Deposit Money");
  console.log("3) Withdraw Money");
  console.log("4) Exit  ");
}

function getMenuChoice() {
  // missing:
  // 1) validate that the input is correct (number 1 -4)
  // 2) loop until input is correct
  const input = prompt('Choose option (1-4): ');
  return input;
}

function showErrorMessage(message) {
  console.log(`❌ Error: ${message}`);
}

function showBalance(balance) {
  console.log(`Current balance: ${balance}$`);
}


module.exports = {
  displayMenu,
  showErrorMessage,
  showBalance,
  getMenuChoice
}