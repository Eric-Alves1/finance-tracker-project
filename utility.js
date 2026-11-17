let id = 0;

function GetUniqueId() {
  return (id++).toString(10);
}

function selectType(type) {
  incomeBtn.classList.toggle("active", type === "income");
  expenseBtn.classList.toggle("active", type === "expense");
}

function GetTypeValue(...items) {
  for (const item of items) {
    const itemClass = item.getAttribute("class");
    if (itemClass == "income") {
      return "income";
    } else {
      return "expense";
    }
  }
}

function GetCategorieValue(...items) {
  for (const item of items) {
    if (item.value == "inc-salary") {
      return "salary";
    } else if (item.value == "inc-investments") {
      return "investments";
    } else if (item.value == "exp-social") {
      return "social";
    } else if (item.value == "exp-shopping") {
      return "shopping";
    } else if (item.value == "exp-food") {
      return "food";
    } else if (item.value == "exp-sports") {
      return "sports";
    } else if (item.value == "exp-gifts") {
      return "gifts";
    } else if (item.value == "exp-education") {
      return "education";
    } else if (item.value == "exp-transport") {
      return "transport";
    } else if (item.value == "exp-beauty") {
      return "beauty";
    } else {
      return "others";
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