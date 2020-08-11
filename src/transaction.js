class Transaction {
  constructor(credit, debit, balance) {
    this.credit = credit;
    this.debit = debit;
    this.balance = balance;
    this.date = (new Date()).toLocaleDateString('en-GB')
  }
}