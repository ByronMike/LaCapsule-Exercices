// En complétant la fonction mergeSort, renvoyez un tableau fusionné des 2 tableaux users et users2 en prenant soin de supprimer les doublons et de trier les utilisateurs par ordre alphabétique.

function mergeSort(array1, array2) {
  const result = [];
  for (let i = 0; i < array1.length; i++) {
    if (result.indexOf(array1[i]) == -1) result.push(array1[i]);
  }
  for (let i = 0; i < array2.length; i++) {
    if (result.indexOf(array2[i]) == -1) result.push(array2[i]);
  }
  return result.sort();
}

const users1 = ["Jean", "Antoine", "Alexandra"];
const users2 = ["Camille", "Antoine", "Louise", "Jean", "Paul"];
console.log(mergeSort(users1, users2));
// Expected: Alexandra, Antoine, Camille, Jean, Louise, Paul
