let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

// Obtén la referencia al elemento select con el id 'mySelect'
const selectElement = document.getElementById('mySelect');

// Itera a través del arreglo y agrega cada país como una opción al select
countries.forEach(country => {
  const option = document.createElement('option');
  option.value = country;
  option.text = country;
  selectElement.appendChild(option);
});

// Agrega un oyente de eventos para el evento 'change'
selectElement.addEventListener('change', function() {
  // Obtiene el país seleccionado
  const selectedCountry = selectElement.value;
  
  // Muestra una alerta con el país seleccionado
  alert(`Has seleccionado: ${selectedCountry}`);
});
