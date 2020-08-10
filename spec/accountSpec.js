describe("Account", function() {

  beforeEach(function() {
    account = new Account();
  });

  describe("Account is instantiated with a default balance of 0", function() {
    it('Will return 0 as its starting balance', function() {
      expect(account.balance).toEqual(0)
    });
  });

  describe("You can deposit funds into the account", function() {
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

  describe("You can withdraw money from the account", function() {
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

  });

});