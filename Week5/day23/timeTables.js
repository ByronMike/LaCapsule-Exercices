// En complétant la fonction updateStatus, mettez à jour le statut des vols du 23 novembre en provenance de Paris avec la valeur “Cancelled”.

// Affichez le résultat dans la console.

function updateStatus(arr) {
  for (let e of arr) {
    if (e.from === "Paris" && e.date.includes("2021/11/23")) {
      e.status = "Cancelled";
    }
  }

  return arr;
}

// function updateStatus(arr) {
//     const updateArr = arr.map(e =>
//    e.from == 'Paris' && e.date.includes("2021/11/23")
//     ? { ...e, status: 'Cancelled' }
//     : e
// );
//   return updateArr
// }

const travels = [
  {
    from: "Paris",
    to: "Bruxelles",
    date: "2021/11/23 09:05:00",
    status: "Prévu",
  },
  {
    from: "Londres",
    to: "Berlin",
    date: "2021/11/23 10:30:00",
    status: "Prévu",
  },
  {
    from: "Paris",
    to: "Barcelone",
    date: "2021/11/23 14:00:00",
    status: "Prévu",
  },
  {
    from: "Madrid",
    to: "Munich",
    date: "2021/11/23 09:05:00",
    status: "Prévu",
  },
  {
    from: "Paris",
    to: "Bruxelles",
    date: "2021/11/24 09:05:00",
    status: "Prévu",
  },
];
const updated = updateStatus(travels);
console.log(JSON.stringify(updated));
// Expected :
// [
//     { from: 'Paris', to: 'Bruxelles', date: '2021/11/23 09:05:00', status: 'Cancelled'},
//     { from: 'Londres', to: 'Berlin', date: '2021/11/23 10:30:00', status: 'Prévu'},
//     {from: 'Paris', to: 'Barcelone', date: '2021/11/23 14:00:00', status: 'Cancelled'},
//     {from: 'Madrid', to: 'Munich', date: '2021/11/23 09:05:00', status: 'Prévu'},
