let id = 0;

function GetUniqueId() {
  return (id++).toString(10);
}

function selectType(type) {
  incomeBtn.classList.toggle("active", type === "income");
  expenseBtn.classList.toggle("active", type === "expense");
}

function GetSelectedType(...arr) {
  for (const node of arr) {
    if (node.classList.contains("active")) {
      return node.value;
    }
  }
}

function GetSelectedCategorie(...arr) {
  for (const nodeList of arr) {
    for (const node of nodeList) {
      if (node.classList.contains("selected")) {
        return node.value;
      }
    }
  }
}

function removeClass(nodeList, classe) {
  for (const node of nodeList) {
    node.classList.remove(classe);
  }
}

function ResetInput(input) {
  input.textContent = "0";
}