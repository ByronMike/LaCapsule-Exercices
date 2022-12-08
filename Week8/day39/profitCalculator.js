// La fonction findProfit() doit renvoyer un tableau d’objets comprenant la date, le montant et le pourcentage de taux de gain/perte de la crypto-monnaie par rapport à la veille de chaque objet du tableau cryptomonnaies.

// Stockez ce nouveau tableau dans la variable profit.
// Les valeurs trouvées devront être des nombres arrondis à 2 décimales.

function findProfit(data) {
    let profit = [...data];

    // Insert your code here
    for (let i = 0; i < data.length; i++) {
        if (i > 0) {
            let variation = (profit[i].amount - profit[i - 1].amount) / profit[i - 1].amount * 100;
            profit[i].gain = Number(variation.toFixed(2))
        }
    };
 
    return profit;
}


const cryptomonnaies = [
   { day: '2021/09/10 00:00:00', amount: 3209.82, gain: -6.14 },
   { day: '2021/09/11 00:00:00', amount: 3266.87 },
   { day: '2021/09/12 00:00:00', amount: 3403.75 },
   { day: '2021/09/13 00:00:00', amount: 3291.77 },
   { day: '2021/09/14 00:00:00', amount: 3615.13 }
]
console.log(JSON.stringify(findProfit(cryptomonnaies)));
// Expected result:
// [
//     { day: '2021/09/10 00:00:00', amount: 3209.82, gain: -6.14 },
//     { day: '2021/09/11 00:00:00', amount: 3266.87, gain: 1.78 },
//     { day: '2021/09/12 00:00:00', amount: 3403.75, gain: 4.19 },
//     { day: '2021/09/13 00:00:00', amount: 3291.77, gain: -3.29 },
//     { day: '2021/09/10 00:00:00', amount: 3615.13, gain: 9.82 }
// ]