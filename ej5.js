function rollDice(faces) {
  // Genera un número aleatorio entre 1 y "faces" (ambos incluidos)
  return Math.floor(Math.random() * faces) + 1;
}

// Ejemplos de uso:
console.log(rollDice(6));  // Simula un dado de 6 caras
console.log(rollDice(20)); // Simula un dado de 20 caras
console.log(rollDice(100)); // Simula un dado de 100 caras
