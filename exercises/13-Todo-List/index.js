// Your code here
document.addEventListener('DOMContentLoaded', function () {
    // Obtén elementos del DOM
    const todoList = document.querySelector('ul');
    const input = document.getElementById('addToDo');
  
    // Agrega tarea
    input.addEventListener('keypress', function (e) {
      if (e.key === 'Enter' && input.value.trim() !== '') {
        const taskText = input.value;
        input.value = '';
        const listItem = document.createElement('li');
        const deleteButton = document.createElement('span');
  
        listItem.innerHTML = `<span><i class="fa fa-trash"></i></span> ${taskText}`;
        deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);
  
        // Agrega la funcionalidad de eliminar la tarea
        deleteButton.addEventListener('click', function () {
          todoList.removeChild(listItem);
        });
      }
    });
  
    // Elimina tarea
    todoList.addEventListener('click', function (e) {
      if (e.target && e.target.tagName === 'I' && e.target.className === 'fa fa-trash') {
        const listItem = e.target.parentElement.parentElement;
        todoList.removeChild(listItem);
      }
    });
  });
  