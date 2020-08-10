class Account {
  constructor() {
    this.balance = 0
    this.statement = []
    this.date = (new Date()).toLocaleDateString('en-GB')
  };

  deposit(amount) {
    this.balance += amount;
    this.statement.push(new Transaction(amount, 0, this.balance));
  }

  withdraw(amount) {
    this.balance -= amount;
    this.statement.push(new Transaction(0, amount, this.balance));
  }
};

class Transaction {
  constructor(credit, debit, balance) {
    this.credit = credit;
    this.debit = debit;
    this.balance = balance;
    this.date = (new Date()).toLocaleDateString('en-GB')
  }
}