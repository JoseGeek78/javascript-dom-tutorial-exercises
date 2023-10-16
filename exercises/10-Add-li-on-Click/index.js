let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
 // Crea un nuevo elemento li
 let newLi = document.createElement('li');
 // Agrega contenido al nuevo elemento li (puedes cambiar esto según tu necesidad)
 newLi.textContent = 'Fourth element';
 // Obtén la lista #myList

 let mylist = document.querySelector('#myList');
 // Añade el nuevo elemento li a la lista como hijo

 myList.appendChild(newLi);
});
