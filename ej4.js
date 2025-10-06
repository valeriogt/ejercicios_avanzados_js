function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }
  return -1; // No encontrado
}


function removeItem(array, text) {
  const index = findArrayIndex(array, text);
  if (index !== -1) {
    // .splice modifica el array original, así que primero lo copiamos para no modificar el original
    const newArray = array.slice(); 
    newArray.splice(index, 1);
    return newArray;
  } else {
    // Si no se encuentra el texto, retorna el array tal cual
    return array.slice();
  }
}


const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

// Prueba de findArrayIndex
console.log(findArrayIndex(mainCharacters, "Leia"));      // 1
console.log(findArrayIndex(mainCharacters, "Rey"));       // 4
console.log(findArrayIndex(mainCharacters, "Darth Vader"));// -1

// Prueba de removeItem
console.log(removeItem(mainCharacters, "Leia"));
// ["Luke", "Han Solo", "Chewbacca", "Rey", "Anakin", "Obi-Wan"]

console.log(removeItem(mainCharacters, "Rey"));
// ["Luke", "Leia", "Han Solo", "Chewbacca", "Anakin", "Obi-Wan"]

console.log(removeItem(mainCharacters, "Darth Vader"));
// ["Luke", "Leia", "Han Solo", "Chewbacca", "Rey", "Anakin", "Obi-Wan"]
