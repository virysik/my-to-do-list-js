const wrapper = document.querySelector(".wrapper");

const list = document.createElement("ul");
list.id = "list";
wrapper.append(list);

const input = document.createElement("input");
input.classList.add("input-js");
input.id = "input";
wrapper.append(input);

const addButton = document.createElement("button");
addButton.classList.add("add-btn");
addButton.id = "addBtn";
addButton.textContent = "Add";
wrapper.append(addButton);

addButton.addEventListener("click", onClick);
window.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    onClick();
  }
})

function onClick(e) {
  const ulList = document.getElementById("list");

  const item = document.createElement("li");
  item.id = "item";
  item.textContent = '😌' + input.value;
  if (input.value) {
    ulList.append(item);
  }
  input.value = "";

  const btnWrapper = document.createElement("div");
  btnWrapper.className = "btn-wrapper";
  item.append(btnWrapper);

  const doneBtn = document.createElement("button");
  doneBtn.id = "doneBtn";
  doneBtn.textContent = "Not done";
  doneBtn.classList.add("not-done");
  btnWrapper.append(doneBtn);

  doneBtn.addEventListener("click", () => {
    doneBtn.textContent = doneBtn.textContent === "Not done" ? "Done" : "Not done";
    if (doneBtn.classList.contains("not-done")) {
      doneBtn.classList.remove("not-done");
      doneBtn.classList.add("done");
    }else if (doneBtn.classList.contains("done")){
      doneBtn.classList.remove("done");
      doneBtn.classList.add("not-done");
    };
  })

  const removeBtn = document.createElement("button");
  removeBtn.id = "removeBtn";
  removeBtn.classList.add("remove");
  removeBtn.textContent = "Remove";
  btnWrapper.append(removeBtn);

  removeBtn.addEventListener("click", () => {
ulList.removeChild(removeBtn.closest("li"));
  })
}
 
