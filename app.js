function onReady() {
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  let id = 0;

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }


    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: ++id
    });
    newToDoText.value = '';

    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      const deleteButton = document.createElement('button');
      checkbox.type = "checkbox";
      deleteButton.type = "button";
      deleteButton.textContent = "Delete";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);

      deleteButton.addEventListener ("click", event =>{
        event.preventDefault()

        function removeItem(){
          for (var i = 0; i <toDos.length; i++){
            if(toDo.id < i && id == i){
              return true;
            }else {
              event.target.parentElement.remove()
            }
          }
        }
        return toDos.filter(removeItem);
        renderTheUI()
      });



    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();
}

window.onload = function() {
  onReady();
};
