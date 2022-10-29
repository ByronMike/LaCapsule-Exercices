function cashback(data){
    let total = 0;
    
    for (const element of data) {
    total += ((element.cashback)/100)*(element.total);

  
      
    }


    return total.toFixed(2);
}

const ordersList = [
   {partner: 'Carrefour', total: 57.45, cashback: 5},
   {partner: 'Amazon', total: 60.20, cashback: 3},
   {partner: 'Boulanger', total: 149, cashback: 6},
   {partner: 'Fnac', total: 84.15, cashback: 4},
];
console.log(cashback(ordersList)); 
// Expected: 16.98

// À l’aide d’une boucle for of, calculez le montant total du cashback et arrondissez-le à 2 décimales avec la méthode toFixed().
// Le total devra être retourné par la fonction cashback.