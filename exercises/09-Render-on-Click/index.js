let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	 // Crear un nuevo elemento div
	 
     let newDiv = document.createElement('div');
	 // Establecer el fondo amarillo
	 
     newDiv.style.backgroundColor = 'yellow';
	 // Establecer el texto interno (innerHTML)
	
     newDiv.innerHTML = 'Hello World';
	 // Agregar el nuevo div al cuerpo (body) del sitio web
	 
	 document.body.appendChild(newDiv);
});