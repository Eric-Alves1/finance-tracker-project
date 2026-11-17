class TransactionMap {
  idMap = new Map(); 

  addTransaction(value, type, categorie) {
    const id = GetUniqueId();
    const item = new TransactionItem(value, type, categorie);
    this.idMap.set(id, item);

    return { id, item };
  }
}
