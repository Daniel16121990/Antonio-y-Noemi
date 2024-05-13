var flotante = document.getElementById('botonMusica')
  // Referencia al elemento de audio
var cancion = document.getElementById('cancion');


    // Obtener el contenedor y el SVG
    const contenedor = document.getElementById('BendicionPadresDiosMarco');
    const marcoSvg = document.getElementById('marco-svg');
    const fondoDecorativo = document.getElementById('fondoDecorativo');
    const bordesRedondeados = document.getElementById('bordesRedondeados');
    // Obtener el contenedor y el SVG Ceremonia
    const contenedor2 = document.getElementById('BendicionPadresDiosMarco2');
    const marcoSvg2 = document.getElementById('marco-svg2');
    const fondoDecorativo2 = document.getElementById('fondoDecorativo2');
    const bordesRedondeados2 = document.getElementById('bordesRedondeados2');
    // Obtener el contenedor y el SVG Fiesta
    const contenedor3 = document.getElementById('BendicionPadresDiosMarco3');
    const marcoSvg3 = document.getElementById('marco-svg3');
    const fondoDecorativo3 = document.getElementById('fondoDecorativo3');
    const bordesRedondeados3 = document.getElementById('bordesRedondeados3');

// Función para abrir el modal
  function abrirModal() {
    // Evento para detectar cuando se cargan todos los recursos de la página
window.onload = function() {
  mostrarModal(); // Mostrar el modal al cargar la página
  
  // Listener para detectar cuando se han cargado todos los recursos
  window.addEventListener('load', function() {
    ocultarModal(); // Ocultar el modal cuando se han cargado todos los recursos
  });
}
    document.getElementById('modalInicio').style.display = 'block';
    document.body.classList.add('body-sin-scroll'); // Deshabilitar el desplazamiento del cuerpo

  }
  
  // Función para cerrar el modal sin musica
  function cerrarModal() {
    flotante.style.display = 'grid'
    document.getElementById('modalInicio').style.display = 'none';
    document.body.classList.remove('body-sin-scroll'); // Habilitar el desplazamiento del cuerpo
  }

  function cerrarModalConMusica(){
    flotante.style.display = 'grid'
    document.getElementById('modalInicio').style.display = 'none';
    document.body.classList.remove('body-sin-scroll'); // Habilitar el desplazamiento del cuerpo
    cancion.play(); // Reproducir la canción
  }



// Función para pausar/reproducir la canción
function toggleReproducirPausar() {
    if (cancion.paused) {
      cancion.play(); // Si está pausada, reproducir la canción
      // document.getElementById('botonMusica').textContent = 'Pausar';
    } else {
      cancion.pause(); // Si se está reproduciendo, pausar la canción
      // document.getElementById('botonMusica').textContent = 'Reproducir';
    }
  }

//***************cuenta regresiva----------
var fechaObjetivo = new Date('2024-10-01:10:00');

    function actualizarCuentaRegresiva() {
        var ahora = new Date().getTime();
        var diferencia = fechaObjetivo - ahora;

        if (diferencia <= 0) {
            // Detener la cuenta regresiva
            clearInterval(intervalo);
            // Mostrar el mensaje de llegada
            document.getElementById('reloj').innerHTML = '<span>Llegó el día!</span>';
            return;
        }

        var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        var horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        document.getElementById('dias_numero').innerText = dias;
        document.getElementById('horas_numero').innerText = horas;
        document.getElementById('minutos_numero').innerText = minutos;
        document.getElementById('segundos_numero').innerText = segundos;
    }

    var intervalo = setInterval(actualizarCuentaRegresiva, 1000);

    actualizarCuentaRegresiva(); // Llamar una vez para evitar el retraso inicial
//**************fin cuenta regresiva***** *

// Función para ajustar el tamaño del SVG y los elementos rect al tamaño del contenedor
function ajustarTamanio() {
  const { width, height } = contenedor.getBoundingClientRect(); // Obtener las dimensiones del contenedor
  marcoSvg.setAttribute('viewBox', `0 0 ${width} ${height}`); // Establecer el nuevo viewBox del SVG
  fondoDecorativo.setAttribute('width', width - 10); // Ajustar el ancho del fondo decorativo
  fondoDecorativo.setAttribute('height', height - 10); // Ajustar la altura del fondo decorativo
  bordesRedondeados.setAttribute('width', width - 20); // Ajustar el ancho de los bordes redondeados
  bordesRedondeados.setAttribute('height', height - 20); // Ajustar la altura de los bordes redondeados
}

function ajustarTamanio2() {
  const { width, height } = contenedor2.getBoundingClientRect(); // Obtener las dimensiones del contenedor
  marcoSvg2.setAttribute('viewBox', `0 0 ${width} ${height}`); // Establecer el nuevo viewBox del SVG
  fondoDecorativo2.setAttribute('width', width - 10); // Ajustar el ancho del fondo decorativo
  fondoDecorativo2.setAttribute('height', height - 10); // Ajustar la altura del fondo decorativo
  bordesRedondeados2.setAttribute('width', width - 20); // Ajustar el ancho de los bordes redondeados
  bordesRedondeados2.setAttribute('height', height - 20); // Ajustar la altura de los bordes redondeados
}

function ajustarTamanio3() {
  const { width, height } = contenedor3.getBoundingClientRect(); // Obtener las dimensiones del contenedor
  marcoSvg3.setAttribute('viewBox', `0 0 ${width} ${height}`); // Establecer el nuevo viewBox del SVG
  fondoDecorativo3.setAttribute('width', width - 10); // Ajustar el ancho del fondo decorativo
  fondoDecorativo3.setAttribute('height', height - 10); // Ajustar la altura del fondo decorativo
  bordesRedondeados3.setAttribute('width', width - 20); // Ajustar el ancho de los bordes redondeados
  bordesRedondeados3.setAttribute('height', height - 20); // Ajustar la altura de los bordes redondeados
}
// Llamar a la función de ajuste de tamaño al cargar la página y al cambiar el tamaño del contenedor
window.addEventListener('load', ajustarTamanio);
window.addEventListener('resize', ajustarTamanio);

window.addEventListener('load', ajustarTamanio2);
window.addEventListener('resize', ajustarTamanio2);

window.addEventListener('load', ajustarTamanio3);
window.addEventListener('resize', ajustarTamanio3);












// Función para mostrar el modal mientras se cargan los recursos
function mostrarModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}

// Función para ocultar el modal y mostrar el contenido principal
function ocultarModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
  document.getElementById("modalInicio").classList.remove("modalInicio");
}


