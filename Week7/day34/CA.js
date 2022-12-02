// Complétez la fonction average() qui calcule la moyenne de chiffre d’affaires mensuel d’une entreprise pour une année donnée.
// Elle prendra comme argument les ventes mensuelles pour une année donnée et retournera un montant arrondi à l’entier le plus proche.
// Stockez le résultat dans une variable calculation et affichez-le dans la console.
// Nous chercherons la moyenne du chiffre d’affaires mensuelle pour l’année 2018.

function average(obj, year) {
    let average = 0
    
    // Insert your code here
    const selectedYear = obj.filter(e => e.year === year);
    for (let month of selectedYear){
        average += month.amount
    };
    average /= 12;
    
    return Math.round(average)
};

 
const sales = [{
        year: 2017,
        month: 'April',
        amount: 1500
    }, {
        year: 2019,
        month: 'January',
        amount: 3000
    }, {
        year: 2018,
        month: 'December',
        amount: 5000
    }, {
        year: 2020,
        month: 'August',
        amount: 500
    }, {
        year: 2018,
        month: 'March',
        amount: 2000
    }, {
        year: 2021,
        month: 'October',
        amount: 1700
    }, {
        year: 2019,
        month: 'July',
        amount: 800
    }, {
        year: 2019,
        month: 'July',
        amount: 800
    }, {
        year: 2020,
        month: 'February',
        amount: 2400
    }, {
        year: 2018,
        month: 'November',
        amount: 4300
    }
]
const calculation = average(sales, 2018);
console.log(calculation); 
/// expected : 942
