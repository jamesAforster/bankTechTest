class Transaction {
  constructor(credit, debit, balance) {
    this.date = (new Date()).toLocaleDateString('en-GB');
    this.credit = credit;
    this.debit = debit;
    this.balance = balance;
  }
}