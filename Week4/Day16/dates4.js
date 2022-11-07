// Calculez le temps de trajet entre le départ et l’arrivée et stockez-le dans la variable time. Stockez ensuite cette information de la manière suivante : “Temps de trajet estimé : X minutes” dans la variable result (attention au moindre espace !).

// Le résultat sera retourné par la fonction travelTime().

function travelTime(infos) {
  let result = "";

// Calculez le temps de trajet entre le départ et l’arrivée et stockez-le dans la variable time. Stockez ensuite cette information de la manière suivante : “Temps de trajet estimé : X minutes” dans la variable result (attention au moindre espace !).

// Le résultat sera retourné par la fonction travelTime().

function travelTime(infos) {
    let result = "";
  
    const depart = Date.parse(infos.departure);
    const arrive = Date.parse(infos.arrival);
  
    const diff = arrive - depart;
    let result2 = Math.floor(diff / 60000);
    result = `Temps de trajet estimé : ${result2} minutes`
  
    return result;
  }
  
  const travel = {
    departure: "2021/11/23 08:00:00",
    arrival: "2021/11/23 08:45:00",
  };
  console.log(travelTime(travel));
  // Result: Temps de trajet estimé : 45 minutes
  

  return result;
}

const travel = {
  departure: "2021/11/23 08:00:00",
  arrival: "2021/11/23 08:45:00",
};
console.log(travelTime(travel));
// Result: Temps de trajet estimé : 45 minutes
