class Account {

  constructor() {
    this.balance = 0;
    this.statement = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.insert_to_statement(amount, null);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      throw "Insufficient funds";
    }
    this.balance -= amount;
    this.insert_to_statement(null, amount);
  }

  print() {
    let printedStatement = `date || credit || debit || balance`
    let chronoStatement = this.statement.reverse();
    chronoStatement.forEach(function (item) {
      printedStatement += `\n${item["date"]} || ${item["credit"]} || ${item["debit"]} || ${item["balance"]}`
    });
    console.log(printedStatement);
  };

  insert_to_statement(credit, debit) {
    this.statement.push(new Transaction(credit, debit, this.balance));
  }

}


    