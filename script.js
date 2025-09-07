const eventos = [
  {
    nombre: "fotos_venta",
    totalFotos: 134 // Número total de fotos en la carpeta
  },
];

const galeria = document.getElementById("galeria");

eventos.forEach(evento => {
  const div = document.createElement("div");
  div.classList.add("evento");

  const titulo = document.createElement("h2");
  titulo.textContent = evento.nombre;
  div.appendChild(titulo);

  const contenedorFotos = document.createElement("div");
  contenedorFotos.classList.add("fotos");

  // Generar lista de fotos automáticamente
  for (let i = 1; i <= evento.totalFotos; i++) {
    const img = document.createElement("img");
    img.src = `eventos/${evento.nombre}/${i}.jpg`;
    contenedorFotos.appendChild(img);
  }

  div.appendChild(contenedorFotos);
  galeria.appendChild(div);

  // Mostrar/ocultar fotos
  titulo.addEventListener("click", () => {
    contenedorFotos.classList.toggle("mostrar");
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