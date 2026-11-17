const balanceTxt = document.querySelector("#balance");
const incomeTxt = document.querySelector("#income");
const expenseTxt = document.querySelector("#expense");

const addBtn = document.querySelector("#add-btn");
const cancelBtn = document.querySelector("#cancel-btn");

const headerSection = document.querySelector("#head-section");
const mainSection = document.querySelector("#main-section");
const historicSection = document.querySelector("#historic-section");
const transactionSection = document.querySelector("#transaction-section");

const incomeBtn = document.querySelector("#income-btn");
const expenseBtn = document.querySelector("#expense-btn");

const incomeCategoriesDiv = document.querySelector("#income-categorie");
const expenseCategoriesDiv = document.querySelector("#expense-categorie");

const incomeBtnCategories = document.querySelectorAll(".incomeBtn");
const expenseBtnCategories = document.querySelectorAll(".expenseBtn");

const inputCardDiv = document.querySelector("#input-card");
const transactionValueTxt = document.querySelector("#transaction-value");
const confirmTransactionBtn = document.querySelector("#confirmBtn");
const removeNumBtn = document.querySelector("#removeBtn");
const numpadDiv = document.querySelector("#numpad");


class TransactionDOM {

  addTransactionNode(id, item) {

    const transactionDiv = document.createElement('div');
    transactionDiv.setAttribute("id", id);

    const h3TransactionTxt = document.createElement('h3');
    h3TransactionTxt.textContent = this.GetTransactionTxt(item);

    const h3TransactionTypeTxt = document.createElement('h3');
    h3TransactionTypeTxt.textContent = this.GetTypeTxt(item);
    
    const h3TransactionCategorieTxt = document.createElement('h3');
    h3TransactionCategorieTxt.textContent = this.GetCategorieTxt(item);

    transactionDiv.appendChild(h3TransactionTxt);
    transactionDiv.appendChild(h3TransactionTypeTxt);
    transactionDiv.appendChild(h3TransactionCategorieTxt);
    historicSection.appendChild(transactionDiv);
  }

  GetTransactionTxt(item) {
    return `R$${item.value}`;
  }

  GetTypeTxt(item) {
    return `Type: ${item.type}`;
  }

  GetCategorieTxt(item) {
    return `Categorie: ${item.categorie}`;
  }
}

const transactionMap = new TransactionMap();
const transactionDom = new TransactionDOM();

addBtn.addEventListener('click', () => {
  headerSection.style.display = "none";
  mainSection.style.display = "none";
  transactionSection.style.display = "block";
});

incomeBtnCategories.forEach(btn => {
  btn.addEventListener('click', () => {
    removeClass(incomeBtnCategories, "selected");
    inputCardDiv.classList.remove("hidden");
    
    btn.classList.add("selected");
  })
})

expenseBtnCategories.forEach(btn => {
  btn.addEventListener('click', () => {
    removeClass(expenseBtnCategories, "selected");
    inputCardDiv.classList.remove("hidden");
    
    btn.classList.add("selected");
  })
})

cancelBtn.addEventListener('click', () => {
  headerSection.style.display = "block";
  mainSection.style.display = "block";
  transactionSection.style.display = "none";

  ResetInput(transactionValueTxt);
  removeClass(expenseBtnCategories, "selected");
  removeClass(incomeBtnCategories, "selected");
  inputCardDiv.classList.add("hidden");
})

incomeBtn.addEventListener("click", () => {
  selectType("income");
  incomeCategoriesDiv.style.display = "grid";
  expenseCategoriesDiv.style.display = "none";

  removeClass(expenseBtnCategories, "selected");
  inputCardDiv.classList.add("hidden");
})

expenseBtn.addEventListener("click", () => {
  selectType("expense");
  expenseCategoriesDiv.style.display = "grid";
  incomeCategoriesDiv.style.display = "none";

  removeClass(incomeBtnCategories, "selected");
  inputCardDiv.classList.add("hidden");
})

numpadDiv.addEventListener('click', (event) => {
  const buttonValue = event.target.value;
  const currentValue = transactionValueTxt.textContent;
  
  if (buttonValue === "confirmBtn" || buttonValue === "removeBtn" || currentValue.length >= 15) {
    return;
  }
  
  if (currentValue === '0') {
    transactionValueTxt.textContent = buttonValue;
  } else {
    transactionValueTxt.textContent += buttonValue;
  } 

})

removeNumBtn.addEventListener('click', () => {
  const currentValue = transactionValueTxt.textContent;
  if (currentValue === "0") {
    transactionValueTxt.textContent = currentValue;
  } else {
    transactionValueTxt.textContent = currentValue.slice(0, -1) || "0";
  }
})

confirmTransactionBtn.addEventListener('click', () => {
  const value = Number.parseFloat(transactionValueTxt.textContent);
  const type = GetTypeValue(incomeBtn, expenseBtn);
  const categorie = GetCategorieValue(incomeBtnCategories, expenseBtnCategories);

  const { id, item } = transactionMap.addTransaction(value, type, categorie);
  transactionDom.addTransactionNode(id, item);
  
  ResetInput(transactionValueTxt);
  headerSection.style.display = "block";
  mainSection.style.display = "block";
  transactionSection.style.display = "none";
  removeClass(expenseBtnCategories, "selected");
  removeClass(incomeBtnCategories, "selected");
  inputCardDiv.classList.add("hidden");
})

selectType("income");