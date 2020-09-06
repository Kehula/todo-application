selectAllButton.addEventListener('click', () => {
  for(todoItem of todoList) {
    todoItem.selected = true;
  }
  console.log("selectAll fired");
  upgradeView();
});

inputElement.addEventListener('keydown', (event) => {
  if (event.key == "Enter" || event.keyCode === 13) {
    addItemToList(inputElement.value);
    console.log(inputElement.value + " added to list");
    inputElement.value = "";

    upgradeView();
  }
})

doneButton.addEventListener('click', () => {
  for(let index = 0; index < todoList.length; index++) {
    if (todoList[index].selected) {
      todoList[index].done = true;
      todoList[index].selected = false;
    }
  }
  console.log("doneAction fired");
  upgradeView();
});

restoreButton.addEventListener('click', () => {
  for(let index = 0; index < todoList.length; index++) {
    if (todoList[index].selected) {
      todoList[index].done = false;
      todoList[index].selected = false;
    }
  }
  console.log("restoreAction fired");
  upgradeView();
});

removeButton.addEventListener('click', () => {
  todoList = todoList.filter(checkedItem => !checkedItem.selected);
  console.log("removeAction fired");
  upgradeView();
});
upgradeView();
