class Account {
  constructor() {
    this.balance = 0
    this.statement = []
  };

  deposit(amount) {
    this.balance += amount;
    this.statement.push(new Transaction(amount, 0, this.balance));
  }

  withdraw(amount) {
    if (amount > this.balance) {
      throw "Insufficient funds"
    }
    this.balance -= amount;
    this.statement.push(new Transaction(0, amount, this.balance));
  }

  print() {
    console.table(this.statement);
  }
};