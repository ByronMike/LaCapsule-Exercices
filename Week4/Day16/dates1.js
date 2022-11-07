// EXERCICE 1
// À l’aide d’une boucle for, parcourez le tableau, puis ajoutez true au tableau result si la date a est antérieure à la date b, false si elle est postérieure ou égale.

// Le tableau de résultats devra être retourné par la fonction compareDates().

function compareDates(obj) {
  let result = [];

  for (let i = 0; i < obj.length; i++) {
    // console.log(obj[i].a.getTime());
    if (obj[i].a.getTime() < obj[i].b.getTime()) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
}

const dates = [
  { a: new Date("2018/01/01 08:00:00"), b: new Date("2018/01/01 08:45:00") },
  { a: new Date("2020/07/14 08:45:00"), b: new Date("2020/07/14 08:00:00") },
  { a: new Date("2021/11/23 08:00:00"), b: new Date("2021/11/23 08:00:00") },
];
console.log(compareDates(dates));
// Expected: true,false,false

