describe("Account", function() {

  beforeEach(function() {
    account = new Account;
    this.date = (new Date()).toLocaleDateString('en-GB')
  });

  describe("Balance", function() {
    it('Will return 0 as its starting balance', function() {
      expect(account.balance).toEqual(0)
    });
  });

  describe("Deposit", function() {
    it('Depositing money will increase the balance by the right amount', function() {
      account.deposit(50);
      expect(account.balance).toEqual(50)
    })

    it('Will allow you to deposit more than once', function() {
      account.deposit(23);
      account.deposit(357);
      expect(account.balance).toEqual(380)
    })
  });

  describe("Withdraw", function() {
    it('withdrawing money will decrease the balance by the right amount', function() {
      account.deposit(100);
      account.withdraw(70);
      expect(account.balance).toEqual(30);
    })

    it('Will allow you to withdraw more than once', function() {
      account.deposit(100);
      account.withdraw(23);
      account.withdraw(56);
      expect(account.balance).toEqual(21)
    })

    it('Will not allow you to withdraw more than the balance', function() {
      account.deposit(100);
      expect(function(){account.withdraw(200)}).toThrow("Insufficient funds");
    });
  });

  describe("Print", function() {

    it('Will reflect making a deposit correctly', function() {
      account.deposit(100);

      expect(account.statement[0]).toEqual(jasmine.objectContaining(
        { 
          date: this.date,
          credit: 100, 
          debit: null,
          balance: 100
        }
      ));
    });

    it('Will reflect making a deposit, and then a withdrawal correctly', function() {
      account.deposit(100);
      account.withdraw(50);
      
      expect(account.statement[1]).toEqual(jasmine.objectContaining(
        { 
          date: this.date,
          credit: null, 
          debit: 50,
          balance: 50
        }
      ));
    });
  });
});