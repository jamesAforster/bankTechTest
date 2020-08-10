describe("Account", function() {

  describe("Account is instantiated with a default balance of 0", function() {
    var account = new Account();
    
    it('Will return 0 as its starting balance', function() {
      expect(account.balance).toEqual(0)
    });
  });
});