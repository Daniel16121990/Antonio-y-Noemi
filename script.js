var flotante = document.getElementById('botonMusica')
  // Referencia al elemento de audio
var cancion = document.getElementById('cancion');
// Función para abrir el modal
function abrirModal() {
    document.getElementById('modalInicio').style.display = 'block';
    document.body.classList.add('body-sin-scroll'); // Deshabilitar el desplazamiento del cuerpo

  }
  
  // Función para cerrar el modal sin musica
  function cerrarModal() {
    flotante.style.display = 'block'
    document.getElementById('modalInicio').style.display = 'none';
    document.body.classList.remove('body-sin-scroll'); // Habilitar el desplazamiento del cuerpo
  }

  function cerrarModalConMusica(){
    flotante.style.display = 'block'
    document.getElementById('modalInicio').style.display = 'none';
    document.body.classList.remove('body-sin-scroll'); // Habilitar el desplazamiento del cuerpo
    cancion.play(); // Reproducir la canción
  }



// Función para pausar/reproducir la canción
function toggleReproducirPausar() {
    if (cancion.paused) {
      cancion.play(); // Si está pausada, reproducir la canción
      document.getElementById('botonMusica').textContent = 'Pausar';
    } else {
      cancion.pause(); // Si se está reproduciendo, pausar la canción
      document.getElementById('botonMusica').textContent = 'Reproducir';
    }
  }