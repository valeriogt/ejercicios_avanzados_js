const movies = [
  {
    title: "Bracula: Condemor II",
    duration: 192,
    categories: ["comedia", "aventura"],
  },
  {
    title: "Spider-Man: No Way Home",
    duration: 122,
    categories: ["aventura", "acción"],
  },
  {
    title: "The Voices",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "Shrek",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

const categorias = [];

for (const movie of movies) {
  for (const categoria of movie.categories) {
    if (!categorias.includes(categoria)) {
      categorias.push(categoria);
    }
  }
}

console.log(categorias);
// Resultado esperado: ["comedia", "aventura", "acción", "thriller", "animación"]
