class Account {
  constructor() {
    this.balance = 0
    this.statement = []
    this.date = (new Date()).toLocaleDateString('en-GB')
  };

  deposit(amount) {
    this.balance += amount
    this.statement.push(
    { 
      date: this.date,
      credit: amount, 
      debit: 0,
      balance: this.balance
    })
  }

  withdraw(amount) {
    this.balance -= amount
    this.statement.push(
    { 
      date: this.date,
      credit: 0, 
      debit: amount,
      balance: this.balance
    })
  }
};