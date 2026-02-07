const frases = [
  "Hoy es un buen día para programar",
  "El código funciona, no lo toques",
  "Un bug menos, mil más",
  "JavaScript nunca deja de sorprender",
  "Compilar es confiar",


  "Funciona en mi máquina",
  "Si no está roto, no lo optimices",
  "Programar es 90% pensar y 10% escribir",
  "El bug apareció solo",
  "Nada es más permanente que una solución temporal",


  "Cada error te hace mejor programador",
  "Aprender a programar es aprender a resolver problemas",
  "Hoy fallas, mañana lo solucionas",
  "El mejor código es el que se entiende",
  "Paso a paso también es progreso",


  "Primero entiende el problema, luego escribe código",
  "Un buen algoritmo vale más que mil líneas",
  "La práctica hace al maestro",
  "Leer errores también es aprender",
  "Depurar es una habilidad clave",


  "undefined no es un error, es una advertencia",
  "console.log es tu mejor amigo",
  "JavaScript perdona, pero no olvida",
  "Un callback más y funciona",
  "Async hoy, await mañana"
];

function fraseAleatoria() {
  return frases[Math.floor(Math.random() * frases.length)];
}

export function setupFrases(boton, contenedor) {
  boton.addEventListener('click', () => {
    contenedor.textContent = fraseAleatoria()
  })
} 

console.log(fraseAleatoria());
