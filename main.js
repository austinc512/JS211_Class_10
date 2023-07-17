class BankAccount {
  constructor(accountNumber, owner) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.transactions = [];
  }
  balance() {
    let currentBalance = 0;
    for (let item of this.transactions) {
      currentBalance += item.amount;
    }
    return currentBalance;
  }
  deposit(amt) {
    let newDeposit = new Transaction(amt, "Deposit");
    if (amt >= 0) {
      this.transactions.push(newDeposit);
    } else {
      console.log(`Don't even try it, pal.`);
    }
  }
  charge(payee, amt) {
    const currentBalance = this.balance();
    if (currentBalance >= amt) {
      let newCharge = new Transaction(amt * -1, payee);
      this.transactions.push(newCharge);
    } else {
      console.log(`You're too poor for this.`);
    }
  }
}

class Transaction {
  constructor(amount, payee) {
    this.payee = payee;
    this.amount = amount;
    this.date = new Date();
  }
}

const assert = require("assert");
if (typeof describe === "function") {
  // test 1
  describe("Create an account", () => {
    it("should be able to create an account", () => {
      const Dave = new BankAccount(1234567, "Dave Doe");
      assert.equal(Dave.owner, "Dave Doe");
      assert.equal(Dave.accountNumber, 1234567);
    });
  });
  // test 2
  describe("Transaction class", () => {
    it("should be able to create an instance of the transaction class", () => {
      const Charge1 = new Transaction(15.45, "Jimmy John's");
      assert.equal(Charge1.payee, "Jimmy John's");
      assert.equal(Charge1.amount, 15.45);
    });
  });
  // test 3
  describe("Account methods", () => {
    it("deposit should change balance", () => {
      const Dave = new BankAccount(1234567, "Dave Doe");
      Dave.deposit(1500);
      assert.equal(Dave.balance(), 1500);
    });
    // test 4
    it("deposit should create a transaction", () => {
      const Dave = new BankAccount(1234567, "Dave Doe");
      Dave.deposit(1500);
      assert.equal(Dave.transactions.length, 1);
    });
    // test 5
    it("charge should create a transaction", () => {
      const Dave = new BankAccount(1234567, "Dave Doe");
      Dave.deposit(1500);
      Dave.charge("Test Charge", 1400);
      assert.equal(Dave.transactions.length, 2);
    });
  });
}
