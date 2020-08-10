class Account {
  constructor() {
    this.balance = 0
    this.statement = []
  };

  deposit(amount) {
    this.balance += amount
    this.statement.push(
    { 
      date: "10/08/2020",
      credit: amount, 
      debit: 0,
      balance: this.balance
    })
  }

  withdraw(amount) {
    this.balance -= amount
    this.statement.push(
    { 
      date: "10/08/2020",
      credit: 0, 
      debit: amount,
      balance: this.balance
    })
  }
};