// À l’intérieur de la fonction mergeArrays(), créez un algorithme qui permet de fusionner les valeurs des tableaux labels et infos.
// Cette fonction retournera le nouveau tableau d’objets newArray, où les clés seront issues de labels et les valeurs associées seront elles issues des informations du tableau infos.

function mergeArrays(header, data) {
  let newArray = [];

  // 1) On boucle sur tous les users de data
  for (let user of data) {
    // 2) on créée un objet "obj" dans lequel on va intégrer les propriétés et valeurs correspondantes à chaque ième boucle
    let obj = {};
    for (let i = 0; i < header.length; i++) {
      // 3) A chaque tour de boucle , si on définit la ième propriété de obj comme étant header[i] et on associe comme valeur user[i]

      //  Fonction qui explique que 1 ) Si la clé n'existe pas, on créé la clé header[i] et on attribue comme valeur user[i] et 2) Si la clé existe, on attribue la valeur user[i]
      obj[header[i]] = user[i];
        console.log(`Propriétés ${i} :`, [header[i]]);
        console.log(`Valeurs ${i} :`, user[i]);
    }
    console.log("test :", obj);
    newArray.push(obj);
  }
  return newArray;
}

const labels = ["firstname", "age", "sex", "city"];
const infos = [
  ["Paul", 28, "male", "Paris"],
  ["Audrey", 35, "female", "Lyon"],
  ["Maxime", 33, "male", "Marseille"],
  ["Justine", 26, "female", "Nice"],
];
console.log(JSON.stringify(mergeArrays(labels, infos)));
// Expected result:
// [
//     { firstname: 'Paul', age: 28, sex: 'male', city: 'Paris' },
//     { firstname: 'Audrey', age: 35, sex: 'female', city: 'Lyon' },
//     { firstname: 'Maxime', age: 33, sex: 'male', city: 'Marseille' },
//     { firstname: 'Justine', age: 26, sex: 'female', city: 'Nice' }
// ]
