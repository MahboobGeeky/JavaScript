// Module Pattern
// IIFE -> Immidiate Ivoke Function Expression -> Turant Fnc chal jayega
let fnc1 = (function () {
  return 12;
})(); // call function

// Private variable
let fnc = (function () {
  let bankBalance = 12000;
})();
// can to access bankBalance using console.log

// Real life example of iife
let Bank = (function () {
  let bankBalance = 12000;

  function checkBalance() {
    console.log(bankBalance);
  }

  function setBalance(val) {
    bankBalance = val;
  }

  function withdraw(val) {
    if (val <= bankBalance) {
      bankBalance -= val;
      console.log(bankBalance);
    }
  }

  return {
    checkBalance,
    setBalance,
    withdraw
  }
})();

Bank.checkBalance();
Bank.setBalance(112);
Bank.withdraw(12);
