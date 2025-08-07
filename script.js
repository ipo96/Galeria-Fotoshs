const eventos = [
  {
    nombre: "06.08.05ele",
    fotos: ["1.jpg", "2.jpg"]
  },
  {
    nombre: "06.08.25cole",
    fotos: ["1.jpg", "2.jpg"]
  },
  {
    nombre: "07.08.25",
    fotos: ["1.jpg"]
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

  evento.fotos.forEach(foto => {
    const img = document.createElement("img");
    img.src = `eventos/${evento.nombre}/${foto}`;
    contenedorFotos.appendChild(img);
  });

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
