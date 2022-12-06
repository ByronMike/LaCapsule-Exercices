function fairDistribution(data) {
    let balanceArray = [];
    
    // Insert your code here
    let total = 0;
    for (let person of data) {
        total += person.amount
    };
    let average = total / data.length;
 
    for (let person of data) {
        average > person.amount ? person.debit = average - person.amount : person.credit = person.amount - average;
    };

    for (let person of data) {
        if (person.debit) {
            const matching = data.find(e => e.credit === person.debit);
            if (matching) balanceArray.push({ name: person.name, due: person.debit, to: matching.name });
        }
    };
    
    return balanceArray;
}


const expenses = [
   { name: 'Julia', amount: 500 },
   { name: 'John', amount: 300 },
   { name: 'Alex', amount: 400 },
   { name: 'Pamela', amount: 200 }
]
console.log(JSON.stringify(fairDistribution(expenses)));
// Expected result:
// [
//     { "name": 'John', "due": 50, "to": 'Alex' },
//     { "name": 'Pamela', "due": 150, "to": 'Julia' }
// ]
