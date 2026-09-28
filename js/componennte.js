
function crearCarrusel(id, imagenes, opciones = {}) {

    const contenedor = document.getElementById(id);

    if (!contenedor) {
        console.error("No se encontró el contenedor del carrusel.");
        return;
    }

    if (!imagenes || imagenes.length === 0) {
        console.error("El carrusel necesita al menos una imagen.");
        return;
    }

    // Opciones de tamaño
    const ancho = opciones.ancho || "700px";
    const alto = opciones.alto || "400px";

    let posicionActual = 0;

    // Crear estructura principal
    const carrusel = document.createElement("div");
    carrusel.classList.add("carrusel");

    // Aplicar tamaño personalizado
    carrusel.style.width = ancho;
    carrusel.style.height = alto;

    // Crear imagen
    const imagen = document.createElement("img");
    imagen.classList.add("carrusel-imagen");

    // Botón anterior
    const botonAnterior = document.createElement("button");
    botonAnterior.classList.add("carrusel-anterior");
    botonAnterior.innerHTML = "❮";
    botonAnterior.setAttribute(
        "aria-label",
        "Imagen anterior"
    );

    // Botón siguiente
    const botonSiguiente = document.createElement("button");
    botonSiguiente.classList.add("carrusel-siguiente");
    botonSiguiente.innerHTML = "❯";
    botonSiguiente.setAttribute(
        "aria-label",
        "Imagen siguiente"
    );

    // Indicadores
    const indicadores = document.createElement("div");
    indicadores.classList.add("carrusel-indicadores");

    // Agregar elementos
    carrusel.appendChild(imagen);
    carrusel.appendChild(botonAnterior);
    carrusel.appendChild(botonSiguiente);
    carrusel.appendChild(indicadores);

    contenedor.appendChild(carrusel);


    // Mostrar imagen actual
    function mostrarImagen() {

        imagen.src = imagenes[posicionActual];

        actualizarIndicadores();
    }


    // Crear indicadores
    imagenes.forEach((ruta, indice) => {

        const indicador = document.createElement("button");

        indicador.classList.add("indicador");

        indicador.setAttribute(
            "aria-label",
            "Ir a la imagen " + (indice + 1)
        );

        indicador.addEventListener("click", () => {

            posicionActual = indice;

            mostrarImagen();
        });

        indicadores.appendChild(indicador);
    });


    // Actualizar indicadores
    function actualizarIndicadores() {

        const botones =
            indicadores.querySelectorAll(".indicador");

        botones.forEach((boton, indice) => {

            boton.classList.toggle(
                "activo",
                indice === posicionActual
            );
        });
    }


    // Botón anterior
    botonAnterior.addEventListener("click", () => {

        posicionActual--;

        if (posicionActual < 0) {
            posicionActual = imagenes.length - 1;
        }

        mostrarImagen();
    });


    // Botón siguiente
    botonSiguiente.addEventListener("click", () => {

        posicionActual++;

        if (posicionActual >= imagenes.length) {
            posicionActual = 0;
        }

        mostrarImagen();
    });


    // Mostrar primera imagen
    mostrarImagen();
}
function mostrarModal(titulo, mensaje) { 
    // Fondo del modal 
    const fondo = document.createElement("div");
 fondo.classList.add("modal-fondo");
  // Contenedor del modal 
  const modal = document.createElement("div");
   modal.classList.add("modal"); 
   // Icono 
   const icono = document.createElement("div"); 
 icono.classList.add("modal-icono"); 
 icono.textContent = "✨"; 
 // Título 
 const encabezado = document.createElement("h2"); 
 encabezado.textContent = titulo; 
 // Mensaje 
 const texto = document.createElement("p"); 
 texto.textContent = mensaje; 
 // Contenedor de botones 
 const botones = document.createElement("div"); 
 botones.classList.add("modal-botones"); 
 // Botón aceptar 
 const botonAceptar = document.createElement("button"); 
 botonAceptar.textContent = "Unirme"; 
 botonAceptar.classList.add( "modal-boton", "modal-aceptar" ); 
 // Botón cerrar 
const botonCerrar = document.createElement("button"); 
botonCerrar.textContent = "Cerrar"; 
botonCerrar.classList.add( "modal-boton", "modal-cerrar" ); 
// Agregar botones
 botones.appendChild(botonAceptar);
  botones.appendChild(botonCerrar);
 // Construir modal 
modal.appendChild(icono); 
modal.appendChild(encabezado); 
modal.appendChild(texto); 
modal.appendChild(botones); 
// Agregar modal al fondo 
fondo.appendChild(modal); 
// Agregar al documento 
document.body.appendChild(fondo); 
// Botón aceptar 
botonAceptar.addEventListener("click", () => { fondo.remove(); 
    mostrarToast( "✓", "¡Gracias por unirte al club, Recibiras màs notificaciones!" ); });
     // Botón cerrar
      botonCerrar.addEventListener("click", () => { fondo.remove(); });
       // Cerrar al hacer clic fuera
     fondo.addEventListener("click", (evento) => { if (evento.target === fondo) { fondo.remove(); } }); } 
     // ========================================== // TOAST // ========================================== 
    function mostrarToast( icono, mensaje, duracion = 3000 ) { 
        // Crear toast 
     const toast = document.createElement("div"); 
     toast.classList.add("toast"); 
     // Crear icono 
    const iconoElemento = document.createElement("span");
     iconoElemento.textContent = icono; 
     // Crear mensaje 
    const mensajeElemento = document.createElement("span");
     mensajeElemento.textContent = mensaje; 
     // Construir toast 
    toast.appendChild(iconoElemento); 
    toast.appendChild(mensajeElemento); 
    // Mostrar 
    document.body.appendChild(toast); 
    // Eliminar después de la duración 
    setTimeout(() => { toast.remove(); }, duracion); }

 