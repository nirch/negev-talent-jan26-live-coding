
let currentBalance = 150;

function getBalance() {
  return currentBalance;
}

function withdraw(amount) {
  // input validation (number, not bigger than amount)

  currentBalance -= amount;
}

function deposit(amount) {
  // input validation...
  currentBalance += amount;
}

function isValidAmount(amount) {

}

module.exports = {
  getBalance,
  withdraw,
  deposit
}