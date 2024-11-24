const imagenPersonaje = document.getElementById('imagen-personaje');
const citaPersonaje = document.getElementById('cita-personaje');
const nombrePersonaje = document.getElementById('nombre-personaje');
const botonNuevoPersonaje = document.getElementById('boton-nuevo-personaje');

// Función para obtener un personaje de la API
function obtenerPersonaje() {
  fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(respuesta => {
      if (!respuesta.ok) {
        throw new Error('Error al realizar la solicitud');
      }
      return respuesta.json();
    })
    .then(datos => {
      const personaje = datos[0]; 
      actualizarPersonaje(personaje); 
    })
    .catch(error => {
      console.error('Error al obtener el personaje:', error); 
    });
}

// Función para actualizar el DOM con el nuevo personaje
function actualizarPersonaje(personaje) {
  imagenPersonaje.src = personaje.image; 
  imagenPersonaje.alt = personaje.character; 
  citaPersonaje.textContent = `"${personaje.quote}"`; 
  nombrePersonaje.textContent = `- ${personaje.character}`; 
}

// Escucha el click al botón y carga un nuevo personaje
botonNuevoPersonaje.addEventListener('click', obtenerPersonaje);

// Carga un personaje al iniciar la página
obtenerPersonaje();
