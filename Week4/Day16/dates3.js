// EXERCICE 3

// La liste hours matérialise les heures d’arrivée d’une personne à un arrêt de bus. Nous voulons trouver à quelle heure passeront les prochains bus en fonction de ces informations.

// Trouvez à quelle heure passeront les prochains bus selon les horaires d’arrivée du tableau hours.
// Un bus part toutes les 15 minutes (0, 15, 30 & 45), stockez les résultats dans le tableau result sous forme de string. Exemple : pour une arrivée à l’arrêt à 10h02, stockez “Prochain départ à 10h15”.

// Le résultat sera retourné par la fonction busSchedule().

function busSchedule(data) {
  let result = [];

  // 2) Obtenir les minutes à l'arrivée d'une personne
  // 2-1) Convertir le tableau des heures d'arrivée à l'arrivée en new date pour la manipulation
  let date = [];
  for (let i = 0; i < data.length; i++) {
    date.push(new Date(data[i]));
  }

  // 2-2) Obtenir les minutes
  let arrayMin = [];
  let arrayHours = [];
  for (let j = 0; j < date.length; j++) {
    arrayMin.push(date[j].getMinutes());
    arrayHours.push(date[j].getHours());
  }

  // 3) Calculer les écarts entre chaque heure d'arrivée et les heures de bus et récupérer la plus petite
  for (let k = 0; k < arrayMin.length; k++) {
    if (arrayHours[k] >= 0 && arrayHours[k] <= 22) {
      if (arrayMin[k] >= 0 && arrayMin[k] < 15) {
        result.push(`Prochain départ à ${arrayHours[k]}h15`).toString;
      } else if (arrayMin[k] >= 15 && arrayMin[k] < 30) {
        result.push(`Prochain départ à ${arrayHours[k]}h30`).toString;
      } else if (arrayMin[k] >= 30 && arrayMin[k] < 45) {
        result.push(`Prochain départ à ${arrayHours[k]}h45`).toString;
      } else if (arrayMin[k] >= 45 && arrayMin[k] <= 59) {
        result.push(`Prochain départ à ${arrayHours[k] + 1}h00`).toString;
      }
    } else {
      if (arrayMin[k] >= 0 && arrayMin[k] < 15) {
        result.push(`Prochain départ à 0h15`).toString;
      } else if (arrayMin[k] >= 15 && arrayMin[k] < 30) {
        result.push(`Prochain départ à 0h30`).toString;
      } else if (arrayMin[k] >= 30 && arrayMin[k] < 45) {
        result.push(`Prochain départ à 0h45`).toString;
      } else if (arrayMin[k] >= 45 && arrayMin[k] <= 59) {
        result.push(`Prochain départ à 0h00`).toString;
      }
    }
  }
  return "Expected:" + " " + result;
}

const hours = [
  "2021/11/23 09:05:00",
  "2021/11/23 09:16:00",
  "2021/11/23 09:30:00",
  "2021/11/23 09:52:00",
];
console.log(busSchedule(hours));
// Expected: Prochain départ à 9h15,Prochain départ à 9h30,Prochain départ à 9h45,Prochain départ à 10h00

// Solution BIS

// function busSchedule(data) {
//   let result = [];

//   // Insert your code here
//   for (let time of data) {
//       const hour = new Date(time).getHours();
//       const minutes = new Date(time).getMinutes();

//       if (minutes < 15) {
//           result.push(`Prochain départ à ${hour}h15`);
//       } else if (minutes >= 15 && minutes < 30) {
//           result.push(`Prochain départ à ${hour}h30`);
//       } else if (minutes >= 30 && minutes < 45) {
//           result.push(`Prochain départ à ${hour}h45`);
//       } else if (minutes >= 45) {
//           result.push(`Prochain départ à ${hour+1}h00`);
//       }
//   }

//   return result;
// }

// const hours = ['2021/11/23 09:05:00', '2021/11/23 09:16:00', '2021/11/23 09:30:00', '2021/11/23 09:52:00'];
// console.log(busSchedule(hours));
// // Expected: Prochain départ à 9h15,Prochain départ à 9h30,Prochain départ à 9h45,Prochain départ à 10h00
