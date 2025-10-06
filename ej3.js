const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Santiago",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Laura",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

const soundsCount = {};

for (const user of users) {
  for (const sound in user.favoritesSounds) {
    // Si el sonido aún no está en el objeto, inicialízalo en 1
    if (!soundsCount[sound]) {
      soundsCount[sound] = 1;
    } else {
      // Si ya existe, suma 1
      soundsCount[sound]++;
    }
  }
}

console.log(soundsCount);
/*
Resultado esperado:
{
  waves: 3,
  rain: 1,
  firecamp: 3,
  shower: 2,
  train: 2,
  wind: 1
}
*/
