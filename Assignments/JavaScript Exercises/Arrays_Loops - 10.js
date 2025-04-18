function processTransactions(transactions) {
  let balance = 0;
  let deposits = 0;
  let withdrawals = 0;

  for (let txn of transactions) {
    if (txn.type === 'deposit') {
      balance += txn.amount;
      deposits += txn.amount;
    } else if (txn.type === 'withdrawal') {
      balance -= txn.amount;
      withdrawals += txn.amount;
    }
  }
  return {
    balance,
    deposits,
    withdrawals
  };
}

const txns = [
  { type: 'deposit', amount: 100 },
  { type: 'deposit', amount: 200 },
  { type: 'withdrawal', amount: 50 },
  { type: 'withdrawal', amount: 30 }
];

const result = processTransactions(txns);
console.log(result);
