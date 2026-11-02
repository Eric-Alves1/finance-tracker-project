const balanceTxt = document.querySelector("#balance");
const incomeTxt = document.querySelector("#income");
const expenseTxt = document.querySelector("#expense");
const addBtn = document.querySelector("#add-btn");
const cancelBtn = document.querySelector("#cancel-btn");
const headerSection = document.querySelector("#head-section");
const mainSection = document.querySelector("#main-section");
const historicSection = document.querySelector("#historic");
const transactionSection = document.querySelector("#transaction-section");

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