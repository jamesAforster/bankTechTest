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

**Thoughts on what to improve**

* My test coverage is < 95%. The reason is I have not been able to figure out how to test the output of 'console.table', which is called by Account#print. I have tried to implement a spy but have been unable to get it to work and think I need to rethink how I am doing it. I could instead be printing the table to the DOM but the spec asked us to create a command line interface so I have tried to stick to that.
* I am not creating a double of my Transaction class. Because it's a object without any functions, I am struggling to think of (if we are testing for behaviour rather than state) why it should be doubled.
* I feel like I should be testing Transaction and Date classes separately so that the scope of my tests are narrowed but would love to have a check-in to make sure that make sense.



```

```
