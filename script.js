document.addEventListener("DOMContentLoaded", () => {
  fetch("eventos.json")
    .then(res => res.json())
    .then(eventos => {
      const galeria = document.getElementById("galeria");

      eventos.forEach(evento => {
        // Crear bloque del evento
        const div = document.createElement("div");
        div.classList.add("evento");

        const titulo = document.createElement("h2");
        titulo.textContent = evento.nombre;
        div.appendChild(titulo);

        const contenedorFotos = document.createElement("div");
        contenedorFotos.classList.add("fotos");

        evento.fotos.forEach(f => {
          const img = document.createElement("img");
          img.src = f; // la ruta ya viene en eventos.json
          contenedorFotos.appendChild(img);
        });

        div.appendChild(contenedorFotos);
        galeria.appendChild(div);

        // toggle mostrar/ocultar fotos
        titulo.addEventListener("click", () => {
          contenedorFotos.classList.toggle("mostrar");
        });
      });
    });
});

// ZOOM - Lightbox
document.addEventListener("click", function(e) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  if (e.target.tagName === "IMG" && e.target.closest(".fotos")) {
    lightboxImg.src = e.target.src;
    lightbox.classList.remove("oculto");
  }

  if (e.target.id === "lightbox" || e.target.id === "lightbox-img") {
    lightbox.classList.add("oculto");
  }
});

// BLOQUEAR CLIC DERECHO
document.addEventListener("contextmenu", function(e) {
  e.preventDefault();
});
