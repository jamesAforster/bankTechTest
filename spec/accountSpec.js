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

  });
});