function addListItem(todoItem) {
  if (todoItem.length == 0) return;


}

function addItemToList(todoItem) {
  if (todoItem.trim().length == 0) return;

  todoList.unshift({
    content: todoItem.trim(),
    done: false,
    selected: false,
    visible: true
  });
}

function upgradeView() {
  ulList.innerHTML = "";
  //let hasSelected = false;
  for(let index = 0; index < todoList.length; index++) {
    const todoItem = todoList[index];
    //hasSelected |= todoItem.selected;
    if (todoItem.visible) {
      const liElement = document.createElement("li");
      liElement.className = "list-group-item";
      ulList.append(liElement);

      const listItemDivElement = document.createElement("div");
      listItemDivElement.className = "form-group form-check";
      liElement.append(listItemDivElement);

      const listItemCheckboxElement = document.createElement("input");
      listItemCheckboxElement.type = "checkbox";
      listItemCheckboxElement.className = "item-checkbox";
      listItemCheckboxElement.id = "todoItem" + index;
      listItemCheckboxElement.checked = todoItem.selected;
      listItemCheckboxElement.style = "margin-right: 5pt";
      listItemCheckboxElement.addEventListener("change", () => {
        todoItem.selected = listItemCheckboxElement.checked;
        upgradeView();
      });

      listItemDivElement.append(listItemCheckboxElement);

      const listItemLabelElement = document.createElement("label");
      listItemLabelElement.className = "form-check-label";
      if (todoItem.done) {
        listItemLabelElement.className += " todoDone";
      }
      listItemLabelElement.setAttribute("for", listItemCheckboxElement.id);
      listItemLabelElement.innerText = todoItem.content;
      listItemDivElement.append(listItemLabelElement);

      if (!todoItem.done) {
        const listItemButtonDoneElement = document.createElement("button");
        listItemButtonDoneElement.type = "button";
        listItemButtonDoneElement.className = "btn btn-outline-primary";
        listItemButtonDoneElement.innerText = "Done";
        listItemButtonDoneElement.style = "margin: 0 2pt 0 2pt; float: right";
        listItemButtonDoneElement.addEventListener("click", () => {
          todoItem.done = !todoItem.done;
          console.log(`${todoItem.content} set done to ${todoItem.done}`);
          upgradeView();
        });

        listItemDivElement.append(listItemButtonDoneElement);
      }

      if (todoItem.done) {
        const listItemButtonRemoveElement = document.createElement("button");
        listItemButtonRemoveElement.type = "button";
        listItemButtonRemoveElement.className = "btn btn-outline-danger";
        listItemButtonRemoveElement.innerText = "Remove";
        listItemButtonRemoveElement.style = "margin: 0 0 0 2pt; float: right";
        listItemButtonRemoveElement.addEventListener("click", () => {
          todoList.splice(index, 1);
          console.log(`${todoItem.content} removed from list`);
          upgradeView();
        });
        listItemDivElement.append(listItemButtonRemoveElement);
      }
    }
  }
  if (todoList.some(item => item.selected)) {
    document.getElementById("actionPanel1").style.display = "none";
    document.getElementById("actionPanel2").style.display = "flex";
  } else {
    document.getElementById("actionPanel1").style.display = "flex";
    document.getElementById("actionPanel2").style.display = "none";
  }
}
