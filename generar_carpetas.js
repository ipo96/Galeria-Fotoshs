const fs = require("fs");
const path = require("path");

// Carpeta donde están tus eventos
const eventosDir = path.join(__dirname, "eventos");
const salida = path.join(__dirname, "eventos.json");

let eventos = [];

// Leer carpetas dentro de /eventos
fs.readdirSync(eventosDir).forEach(carpeta => {
  const carpetaPath = path.join(eventosDir, carpeta);
  if (fs.statSync(carpetaPath).isDirectory()) {
    let fotos = fs.readdirSync(carpetaPath)
      .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f)) // solo imágenes
      .map(f => `eventos/${carpeta}/${f}`);
    
    eventos.push({
      nombre: carpeta,
      fotos
    });
  }
});

// Guardar en JSON
fs.writeFileSync(salida, JSON.stringify(eventos, null, 2));
console.log("✅ Archivo eventos.json generado!");
