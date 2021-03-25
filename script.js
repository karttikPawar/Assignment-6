const button = document.getElementById("addButton");
const updateButton = document.getElementById("updateButton");
const input = document.getElementById("todoInput");
const list = document.getElementById("listItems");

updateButton.style.display = "none";
button.style.display = "block";

update();
deleteTodo();

function onClick() {
  event.preventDefault();
  if (!input.value) {
    return alert("Please Enter The Todo");
  }
  const li = document.createElement("li");

  const spanText = document.createElement("span");
  spanText.textContent = input.value;
  spanText.classList.add("spanText");
  li.classList.add("item");
  li.appendChild(spanText);
  addEdit(li);

  list.appendChild(li);
  input.value = "";

  update();
  deleteTodo();
}

function deleteTodo() {
  const deleteButton = document.querySelectorAll(".deleteButton");

  for (let i = 0; i < deleteButton.length; i++) {
    deleteButton[i].onclick = function () {
      deleteButton[i].parentElement.parentElement.style.display = "none";
    };
  }
}

function update() {
  const listItem = document.querySelectorAll(".spanText");
  for (let i = 0; i < listItem.length; i++) {
    listItem[i].onclick = function () {
      const updateDelete = listItem[i].parentElement.querySelector(
        ".deleteButton"
      );

      updateDelete.style.display = "none";
      input.value = listItem[i].textContent;
      updateButton.style.display = "block";
      button.style.display = "none";
      updateButton.onclick = () => {
        addEdit(listItem[i].parentElement);
        listItem[i].textContent = input.value;

        input.value = "";
        updateButton.style.display = "none";
        button.style.display = "block";
        updateDelete.style.display = "block";

        deleteTodo();
      };
    };
  }
}

function addEdit(li) {
  const edits = document.createElement("span");
  const deleteTodo = document.createElement("span");
  deleteTodo.innerHTML = '<i class="far fa-trash-alt"></i>';
  deleteTodo.classList.add("deleteButton");
  edits.appendChild(deleteTodo);
  li.appendChild(edits);
}

button.onclick = onClick;
