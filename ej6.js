function swap(array, index1, index2) {
  // Creamos una copia del array para no modificar el original
  const newArray = array.slice();

  // Guardamos el valor de uno de los índices
  const temp = newArray[index1];
  // Intercambiamos los valores
  newArray[index1] = newArray[index2];
  newArray[index2] = temp;

  return newArray;
}

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

// Ejemplos:
console.log(swap(fantasticFour, 0, 3));
// ["La cosa", "Mr. Fantástico", "La mujer invisible", "La antorcha humana"]

console.log(swap(fantasticFour, 1, 2));
// ["La antorcha humana", "La mujer invisible", "Mr. Fantástico", "La cosa"]
