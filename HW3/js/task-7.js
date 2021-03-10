const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    const transaction = {
      id: Date.now(),
      amount,
      type,
    };
    return transaction;
  },
  
  deposit(amount) {
    this.balance += amount;

    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
  },

  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Cнятие такой суммы не возможно, недостаточно средств.');
      return;
    }

    this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW));

    this.balance -= amount;
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    for (let i = 0; i < this.transactions.length; i += 1) {
      if (id === this.transactions[i].id) {
          return this.transactions[i];
      }
    }
    
    console.log('Транзакции с таким id нет.');
  },

  getTransactionTotal(type) {
    let totalSum = 0;

    for (let transaction of this.transactions) {
      if (type === transaction.type) {
        totalSum += transaction.amount;
      }
    }

    return totalSum;
  },
};

console.log(account.deposit(222));
console.log(account.getBalance());

setTimeout(() => console.log(account.withdraw(2)), 1000);
setTimeout(() => console.log(account.getBalance()), 1000);

setTimeout(() => console.log(account.withdraw(222)), 2000);
setTimeout(() => console.log(account.getBalance()), 2000);

setTimeout(() => console.log(account.withdraw(67)), 4000);
setTimeout(() => console.log(account.getBalance()), 4000);

setTimeout(() => console.log(account.deposit(345)), 5000);
setTimeout(() => console.log(account.getBalance()), 5000);

setTimeout(() => console.log(account.transactions), 5000);

setTimeout(() => console.log(account.getTransactionDetails(account.transactions[1].id)), 5000);

setTimeout(() => console.log(account.getTransactionTotal('withdraw')), 5000);