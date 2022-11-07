// EXERCICE 2
// Complétez la fonction sortDates pour qu’elle retourne uniquement les événements ultérieurs à la date limite.

// Stockez le résultat dans la variable result, il sera retourné par la fonction sortDates().

function sortDates(events, date) {
  let result = [];

  // Insert your code here
  for (let i = 0; i < events.length; i++) {
    // console.log(Date.parse(events[i].day));
    if (Date.parse(events[i].day) > Date.parse(date)) {
      result.push(events[i]);
    }
  }
  return result;
}

const limit = "2021/11/23 12:00:00";
const list = [
  { day: "2021/11/23 09:00:00", event: "Réunion marketing" },
  { day: "2021/11/23 11:00:00", event: "Briefing sales" },
  { day: "2021/11/23 13:00:00", event: "Déjeuner avec un client" },
  { day: "2021/11/23 17:00:00", event: "Networking" },
  { day: "2021/11/23 19:00:00", event: "Sport" },
];
console.log(JSON.stringify(sortDates(list, limit)));
// Expected: [
//  { day: '2021/11/23 13:00:00', event: 'Déjeuner avec un client' },
//  { day: '2021/11/23 17:00:00', event: 'Networking' },
//  { day: '2021/11/23 19:00:00', event: 'Sport' },
// ]

