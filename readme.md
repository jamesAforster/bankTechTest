# Bank Tech Test

**How to install**

- Fork this repo and clone locally
- Run 'npm install' to install dependencies

**How to use**

`acc = new Account();` To instantiate a new account called "acc".

`acc.deposit(50);` Will deposit the 50 moneys into the account.

`acc.withdraw(50);` Will withdraw 50 from the account. It will error if your balance is less than the amount passed in the argument.

`acc.balance();` Will return the current balance of the account.

`acc.print();` Will print a table containing your statement history to the console.

**How to test**

* After running 'npm install', run 'npm test' to run the tests and see a coverage report in the console.
* Or, run 'open specrunner.html' to see a test runner in the browser.

**Notes on approach**

I initially created an Account class which held the property 'balance'. After that, I created the different functions which would adjust that property.

I decided to hold the statement history in an array. It made sense at that point to create a new Transaction object which holds the properties to be displayed in the statement. When a transaction occurs, a new Transaction is instantiated with the correct properties, and inserted into the statement array.

The print() function holds a hard coded header, reverses the array of transactions, and then adds each transaction, along with a line break, to the header, resulting in a printed statement.

**Thoughts on what I will improve:**

* I'm aware that using floating points is a big issue when dealing with currency but at this stage I've run out of time to really sort out a solution before the hand in deadline.
* My Print class is doing too much - I will separate this out into a 'statement constructor' and the method which console.log's the statement itself.
* I should separate statement into its own class.
* Currently I'm not mocking my Transaction class dependency. This could be useful in testing different dates.
* I'm having a weird issue when using floating points when testing print(). My console.log spy doesn't return floating points, it seems to reduce them to normal integers. Interesting problem and have run out of time to get to the bottom of it!
