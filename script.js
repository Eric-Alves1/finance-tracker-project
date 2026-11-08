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

const submitValue = document.querySelector(".sendValues");

let transactionType = null;
let transactionCategorie = null;

let transactions = [];

function selectType(type) {
  incomeBtn.classList.toggle("active", type === "income");
  expenseBtn.classList.toggle("active", type === "expense");
}

incomeBtnCategories.forEach(btn => {
  btn.addEventListener('click', () => {
    transactionCategorie = btn.value
  })
})

expenseBtnCategories.forEach(btn => {
  btn.addEventListener('click', () => {
    transactionCategorie = btn.value
  })
})

submitValue.addEventListener('click', () => {
  transactions.push({
    type: transactionType,
    categorie: transactionCategorie
  });

  console.log(transactions)
})

addBtn.addEventListener('click', () => {
  headerSection.style.display = "none";
  mainSection.style.display = "none";
  transactionSection.style.display = "block";
});

cancelBtn.addEventListener('click', () => {
  headerSection.style.display = "block";
  mainSection.style.display = "block";
  transactionSection.style.display = "none";
})

incomeBtn.addEventListener("click", () => {
  selectType("income");
  incomeCategoriesDiv.style.display = "grid";
  expenseCategoriesDiv.style.display = "none";

  transactionType = incomeBtn.value;
})

expenseBtn.addEventListener("click", () => {
  selectType("expense");
  expenseCategoriesDiv.style.display = "grid";
  incomeCategoriesDiv.style.display = "none";

  transactionType = expenseBtn.value;
})

selectType("income");