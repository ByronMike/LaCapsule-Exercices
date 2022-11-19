// Complétez la fonction groupByFirstLetter afin qu’elle renvoie un objet regroupant les villes contenues dans la variable arr en fonction de leur première lettre.

// Le résultat devra être un objet stocké dans une variable obj ayant pour clé la lettre créant le regroupement (ex: "a") en minuscule et pour valeur un tableau des villes correspondantes (ex: ['Anvers', 'Angers']).

function groupByFirstLetter(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    // 1) Récupère chaque élément par tour de boucle
    let currentWord = arr[i];
    // 2) Récupérer la première lettre
    let firstChar = currentWord[0].toLowerCase();
    let innerArr = [];
    // S'il n'y a pas de valeur obj[firstChar] à la propriété firstChar ...
    if (obj[firstChar] === undefined) {
      innerArr.push(currentWord);
      // ... alors (si la valeur n'a pas de propriété) on définit la propriété comme étant firstChar ...
      obj[firstChar] = innerArr;
    } else {
      // ... alors on push le mot en tant que valeur de la propriété firstChar
      obj[firstChar].push(currentWord);
    }
  }
  return obj;
}

const result = groupByFirstLetter(["Berlin", "Paris", "Prague", "Barcelone"]);
console.log(result);
// Expected : { b: [ 'Berlin', 'Barcelone' ], p: [ 'Paris', 'Prague' ] }
