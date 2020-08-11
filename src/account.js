class Account {
  constructor() {
    this.balance = 0
    this.statement = []
  };

  deposit(amount) {
    this.balance += amount;
    this.insert_to_statement(amount, null)
  }

  withdraw(amount) {
    if (amount > this.balance) {
      throw "Insufficient funds"
    }
    this.balance -= amount;
    this.insert_to_statement(null, amount)
  }

  print() {
    console.table(this.statement);
  }

  insert_to_statement(credit, debit) {
    this.credit = credit;
    this.debit = debit;
    this.statement.push(new Transaction(this.credit, this.debit, this.balance));
  }
};