class TransactionMap {
  idMap = new Map(); 

  addTransaction(value, type, categorie) {
    const id = GetUniqueId();
    const item = new TransactionItem(value, type, categorie);
    this.idMap.set(id, item);

    return { id, item };
  }

  GetCurrentBalance() {
    let currentBalance = 0;
    for (const [_id, item] of this.idMap) {
      if (item.type === "income") {
        currentBalance += item.value;
      } else if (item.type === "expense") {
        currentBalance -= item.value;
      }
    }
    return currentBalance;
  }

  GetIncomeValue() {
    let incomeValue = 0;
    for (const [_id, item] of this.idMap) {
      if (item.type === "income") {
        incomeValue += item.value;
      }
    }
    return incomeValue;
  }

  GetExpenseValue() {
    let expenseValue = 0;
    for (const [_id, item] of this.idMap) {
      if (item.type === "expense") {
        expenseValue += item.value;
      }
    }
    return expenseValue;
  }
}
