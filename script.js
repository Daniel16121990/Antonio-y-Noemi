var flotante = document.getElementById('botonMusica')
  // Referencia al elemento de audio
var cancion = document.getElementById('cancion');
// Función para abrir el modal

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


  function abrirModal() {
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



// Cerrar el modal automáticamente cuando se carguen todos los recursos
window.onload = function() {
  var overlay = document.getElementById('modalCarga');
  overlay.style.display = 'none';
  abrirModal()
};

//agendar asistencia en la iglesia
document.getElementById('btn-agendar-iglesia').addEventListener('click', function() {
  var titulo = 'Ceremonia religiosa Antonio y Noemi';
  var descripcion = 'Boda de Antonio y Nomei en la iglesia';
  var ubicacion = 'Iglesia de San Franciso';
  var fechaInicio = '2024-06-01T09:00:00';
  var fechaFin = '2024-06-01T10:00:00';
  
  var url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(titulo)}&details=${encodeURIComponent(descripcion)}&location=${encodeURIComponent(ubicacion)}&dates=${fechaInicio.replace(/-|:|\.\d\d\d/g, '')}/${fechaFin.replace(/-|:|\.\d\d\d/g, '')}`;
  
  window.open(url, '_blank');
});

//confirmar asistencia a los novios via whatsapp
document.getElementById('btn-cofirmar-asistencia-iglesia').addEventListener('click', function() {
  var numeroTelefono = '59161003028'; // Número de teléfono con código de país, sin espacios ni guiones
  var mensaje = 'Hola, confirmo mi asistencia al evento.';
  
  var url = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;
  
  window.open(url, '_blank');
});
// abrir ubicación de la iglesia:
document.getElementById('btn-ubicacion-iglesia').addEventListener('click', function() {
  
  var url = 'https://maps.app.goo.gl/dFGeCrUpou3Amxow6'; // Enlace de Google Maps del evento
  window.open(url, '_blank');
});


//agendar asistencia en la fiesta
document.getElementById('btn-agendar-fiesta').addEventListener('click', function() {
  var titulo = 'Fiesta matrimonial de Antonio y Noemi';
  var descripcion = 'Boda de Antonio y Nomei en la iglesia';
  var ubicacion = 'Local';
  var fechaInicio = '2024-06-01T17:00:00';
  var fechaFin = '2024-06-01T18:00:00';
  
  var url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(titulo)}&details=${encodeURIComponent(descripcion)}&location=${encodeURIComponent(ubicacion)}&dates=${fechaInicio.replace(/-|:|\.\d\d\d/g, '')}/${fechaFin.replace(/-|:|\.\d\d\d/g, '')}`;
  
  window.open(url, '_blank');
});

//confirmar asistencia de fiesta a los novios via whatsapp
document.getElementById('btn-confirmar-asistencia-fiesta').addEventListener('click', function() {
  var numeroTelefono = '59161003028'; // Número de teléfono con código de país, sin espacios ni guiones
  var mensaje = 'Hola, confirmo mi asistencia a la fiesta.';
  
  var url = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;
  
  window.open(url, '_blank');
});
// abrir ubicación de la fiesta:
document.getElementById('btn-ubicacion-fiesta').addEventListener('click', function() {
  
  var url = 'https://maps.app.goo.gl/FAVEtVDH593LRPrP7'; // Enlace de Google Maps del evento
  window.open(url, '_blank');
});