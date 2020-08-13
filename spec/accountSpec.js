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
      account.deposit(50);
      expect(account.balance).toEqual(50);
    });

    it('Will allow you to deposit more than once', function() {
      account.deposit(23);
      account.deposit(357);
      expect(account.balance).toEqual(380);
    });
  });

  describe("Withdraw", function() {
    it('withdrawing money will decrease the balance by the right amount', function() {
      account.deposit(100);
      account.withdraw(70);
      expect(account.balance).toEqual(30);
    });

    it('Will allow you to withdraw more than once', function() {
      account.deposit(100);
      account.withdraw(23);
      account.withdraw(56);
      expect(account.balance).toEqual(21);
    });

    it('Will not allow you to withdraw more than the balance', function() {
      account.deposit(100);
      expect(function(){account.withdraw(200);}).toThrow("Insufficient funds");
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
      expect(console.log).toHaveBeenCalledWith("date || credit || debit || balance\n13/08/2020 || null || 50 || 50\n13/08/2020 || 100 || null || 100");
    })

  });
});