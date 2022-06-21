  const root = document.getElementById("root");
  const container = document.createElement("div");
  const headerContainer = document.createElement("div");
  const btnDeleteAll = document.createElement("button");
  const inputTodo = document.createElement("input");
  const btnAdd = document.createElement("button");
  const mainContainer = document.createElement("div");

  container.className = "container";
  headerContainer.className = "conteiner__header";
  btnDeleteAll.className = "header__btn_delete_all";
  inputTodo.className = "header__task";
  btnAdd.className = "header__btn_add";
  mainContainer.className = "container__main";

  inputTodo.setAttribute("placeholder", "Enter todo ...");
  btnDeleteAll.innerText = "Delete All";
  btnAdd.innerText = "Add";
  
  root.append(container);
  container.append(headerContainer, mainContainer);
  headerContainer.append(btnDeleteAll, inputTodo, btnAdd);

  const generateTodo = () => {
    const todoItem = document.createElement("div");
    const todoButtonDone = document.createElement("button");
    const todoText = document.createElement("div");
    const todoButtonClose = document.createElement("button");
    const taskText = document.createElement("p")
    const todoDate = document.createElement("time");
    const itemInfo = document.createElement("div");
    const date = new Date().toLocaleString();
    const task = inputTodo.value

    todoItem.classList = "main__item";
    todoButtonDone.classList = "item__btn_done";
    todoButtonClose.classList = "item__btn_close";
    todoText.classList = "item__todo_text";
    todoDate.classList = "item__date";
    itemInfo.classList = "item__info";
    taskText.classList = "item__text";

    todoButtonClose.dataset.type = "delete";
    todoButtonDone.dataset.type = "check";

    todoButtonClose.innerText = "✖";
    // todoButtonDone.innerText = "✔";

    mainContainer.append(todoItem);
    todoText.append(taskText);
    taskText.append(task);
    todoItem.append(todoButtonDone, todoText, itemInfo);
    todoDate.append(date);
    itemInfo.append(todoButtonClose, todoDate);
  };

  const deleteTask = (event) => {
    todoItem.remove();
  }

  const selectedDone = () => {
    event.target.parentNode.classList.toggle("done");
    event.target.nextSibling.firstChild.classList.toggle("task__done");
    event.target.nextSibling.classList.toggle("done");
  }

  mainContainer.addEventListener("click", (event) => {
    let todoItem = event.target.parentNode.parentNode
    if (event.target.dataset.type === "delete") {
        todoItem.remove();
    }
    if (event.target.dataset.type === "check") {
        event.target.innerText = "✔";
        selectedDone();
    }
});   

  headerContainer.addEventListener("click", (event) => {
    if (event.target === btnDeleteAll) {
      mainContainer.innerHTML = "";
    }
    if (!inputTodo.value) {
      return;
    }
    if (event.target === btnAdd) {
      generateTodo();
      inputTodo.value = '';
    }
  });