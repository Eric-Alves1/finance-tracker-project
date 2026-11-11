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
const numpadDiv = document.querySelector("#numpad");

//add event delegation with numpadDiv.

function selectType(type) {
  incomeBtn.classList.toggle("active", type === "income");
  expenseBtn.classList.toggle("active", type === "expense");
}

function removeClass(nodeList, classe) {
  for (const node of nodeList) {
    node.classList.remove(classe);
  }
}

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

selectType("income");