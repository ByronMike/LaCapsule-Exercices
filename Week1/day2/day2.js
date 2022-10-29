// Exercice 1

function validateOrders(orders) {
    
    let msg = []
    
    for (let i = 0; i < orders.length; i++) {
          if (orders[i].stock >= orders[i].quantity) {
              msg.push(orders[i].product);
          } 
        }
        
    return console.log("Order validated: " + msg);
}

// Do not edit/remove code under this line
validateOrders([
    {
        product: "shoes",
        quantity: 2,
        stock: 10,
    },
    {
        product: "flowers",
        quantity: 12,
        stock: 8,
    },
    {
        product: "wallets",
        quantity: 1,
        stock: 0,
    },
]);


// Exercice 2

function loopMe(num) {
    for (let i = 0; i < num; i++) {
      console.log(i + " " + "tour de boucle" + " "+ "i" + ("i".repeat(i)))
    }
    }

    // Do not edit/remove code under this line
    loopMe(5);



// Exercice 3

function findLongestWord(words) {
    let longestWord = '';
    let Word = '';
    
    for (let i = 0; i < words.length; i++) {
        if(words[i].length > longestWord){
        longestWord = words[i].length;
        Word = words[i];
            }
}
    
    return Word;
}
    
console.log(findLongestWord(["Adiós", "Goodbye", "Au revoir", "Auf wiedersehen"]));
// Expected: Auf wiedersehen
    


// Exercice 4

function upperFirst(contacts) {
    const formattedContacts = [];
    
    // Insert your code here
    for (let i = 0; i < contacts.length; i++) {
        /* charAt() indique le caractère situé à l'index' indiqué 
        slice(1) extrait un substring à partir de l'index indiqué */
        formattedContacts.push(contacts[i].charAt(0).toUpperCase() + contacts[i].slice(1).toLowerCase());
    }
    return formattedContacts;
}

console.log(upperFirst(['pierre', 'PAUL', 'jAcqUes']));
// Expected: ['Pierre', 'Paul', 'Jacques']


// Exercice 5

// Méthode n°1
function getTotal(cart) {
    let total = [];
    
    // Enregistrement des recettes = p * q
    for (let i = 0; i < cart.length; i++) {
        total.push((cart[i].quantity) * (cart[i].price));
    }

    // Somme des recettes par produit
    const initialValue = 0;
    const sum = total.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
); 
    return sum;
}

// Méthode n°2

function totalBasket(items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total += items[i].price * items[i].quantity;
        console.log("Total updated", total)
    }
    return total;
}

const exampleCart = [
    { name: 'iPhone', price: 909, quantity: 1 },
    { name: 'Samsung Galaxy', price: 799, quantity: 3 },
    { name: 'Steam Deck', price: 419, quantity: 10 },
];
console.log(getTotal(exampleCart));
console.log(totalBasket(exampleCart));
// Expected: 7496



// Exercice 6

/* split("") va décomposer un string en sous-string (lettres) 
   join("") permet de reformer un mot complet (et pas une collection de lettres dans un tableau)*/
function reverse(s){
    return s.split("").reverse().join("");
}

// Vérification Palindromes
function getPalindromes(words) {
    let result=[];
    for(let i=0;i<words.length;i++){
        if (words[i]==reverse(words[i])) {
        result.push(words[i])   
        }
    }
    return result.sort();
}

const examplePalindromes = ['HELLO', 'KAYAK', 'ANNA', 'TOTO', 'JAVASCRIPT','LOL', "MODEM"];
console.log(getPalindromes(examplePalindromes));
// Expected: ['ANNA', 'KAYAK', LOL']
       

// Exercice 7

function getAnagramList(word) {

    // Cas 1 : si le mot fait seulement 1 lettre => FONCTION RECURSIVE !
    if (word.length === 1) {
      return word;
 }
  const anagramList = [];
  for (let i=0; i<word.length; i++){
      let s = word[0];
      let _new =  getAnagramList(word.slice(1, word.length));
      for(let j=0; j<_new.length; j++) {
          anagramList.push(s + _new[j]);
      }
      word = word.substr(1, word.length -1) + s;
  }
  return anagramList.sort();
}

console.log(getAnagramList('AGE'));
// Expected: ['AEG', 'AGE', 'EAG', 'EGA', 'GAE', 'GEA']
