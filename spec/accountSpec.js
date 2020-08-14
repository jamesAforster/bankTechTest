describe("Account", function() {
  beforeEach(function() {
    account = new Account();
    this.date = (new Date()).toLocaleDateString('en-GB');
  });

  describe("Balance", function() {
    it('Will return 0 as its starting balance', function() {
      expect(account.balance).toEqual(0);
    });
  });

  describe("Deposit", function() {
    it('Depositing money will increase the balance by the right amount', function() {
      account.deposit(50.00);
      expect(account.balance).toEqual(50.00);
    });

    it('Will allow you to deposit more than once', function() {
      account.deposit(23.00);
      account.deposit(357.00);
      expect(account.balance).toEqual(380.00);
    });
  });

  describe("Withdraw", function() {
    it('withdrawing money will decrease the balance by the right amount', function() {
      account.deposit(100.00);
      account.withdraw(70.00);
      expect(account.balance).toEqual(30.00);
    });

    it('Will allow you to withdraw more than once', function() {
      account.deposit(100.00);
      account.withdraw(23.00);
      account.withdraw(56.00);
      expect(account.balance).toEqual(21.00);
    });

    it('Will not allow you to withdraw more than the balance', function() {
      account.deposit(100.00);
      expect(function(){account.withdraw(200.00);}).toThrow("Insufficient funds");
    });
  });

  describe("Print", function() {
    beforeEach(function() {
      spyOn(console, 'log');
      account.deposit(100);
      account.withdraw(50);
      account.print();
    });

    it("Will print a transaction correctly", function() {
      var date = new Date().toLocaleDateString('en-GB')
      expect(console.log).toHaveBeenCalledWith(`date || credit || debit || balance\n${date} ||  || 50 || 50\n${date} || 100 ||  || 100`);
    })

  });
});