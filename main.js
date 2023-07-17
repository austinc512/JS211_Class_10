class BankAccount {
  constructor(accountNumber, owner) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.transactions = [];
  }
  balance() {
    // will need to access values here instead.

    let currentBalance = 0;
    for (let item of this.transactions) {
      currentBalance += item.amount;
    }
    // const currentBalance1 = this.transactions.reduce(
    //   (acc, curr) => acc + curr,
    //   0
    // );
    return currentBalance;
  }
  deposit(amt) {
    // use transaction class
    let newDeposit = new Transaction("Deposit", amt);
    if (amt >= 0) {
      this.transactions.push(newDeposit);
    } else {
      console.log(`You can't do that, sorry.`);
    }
  }
  charge(payee, amt) {
    // payee is the person I'm paying, right?
    // can't make payment if there's not enough money
    // I'll have to call balance() to get current balance first

    const currentBalance = this.balance();
    // console.log(currentBalance);
    if (currentBalance >= amt) {
      let newCharge = new Transaction(payee, amt * -1);
      this.transactions.push(newCharge);
      // payee.deposit(amt);
    } else {
      console.log(`You can't do that, sorry!!!`);
    }
  }
}

class Transaction {
  constructor(payee, amount) {
    //
    this.payee = payee;
    this.amount = amount;
    this.date = new Date();
  }
}

const Austin = new BankAccount(109876, "Austin Covey");
Austin.deposit(1500);
console.log(Austin.transactions);
Austin.charge("Punkass Dave", 1000);
console.log(Austin.transactions);
console.log(Austin.balance());
// const Dave = new BankAccount(100001, "Dave Ramsey");

// const moniez1 = new Transaction();

/* ----------Transaction class troubleshooting----------



----------END----------
*/
/* ----------BankAccount class troubleshooting----------
const Austin = new BankAccount(109876, "Austin Covey");
console.log(Austin);

console.log(Austin.balance());

// let's test the methods.
// I have a 'me' object.

// make a deposit()
Austin.deposit(1500);

// check my balance()
console.log(`balance after deposit:`, Austin.balance());

// I need a fake recipient, because I don't want to instantiate a class
// ain't nobody got time for that

const fakePerson = {
  name: "fake",
  deposit: function (amt) {
    console.log(`this is the deposited amount:`, amt);
  },
};

// charge()

Austin.charge(fakePerson, 1500);

// balance()
console.log(`balance after charge:`, Austin.balance());
----------END----------
*/

console.log(Date());
