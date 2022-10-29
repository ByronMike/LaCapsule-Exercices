// Exercice 1

function checkValues(data) {
    let newList = [];
    for (let user of data) {
        for (let prop in user) {
            user[prop]
            if (user[prop] === "" || user[prop] === " ")
                user[prop] = null
            
        }
    newList.push(user);
    }
return newList
}


const list = [
   { fullname: 'John Doe', age: 42, tel: '', email: ' ' },
   { fullname: 'Vanessa Williams', age: '', tel: ' ', email: 'v.williams@gmail.com' },
   { fullname: 'Richard Lawson', age: 42, tel: '0765432109', email: '' },
];
console.log(checkValues(list));
// Expected:
// [{ fullname: 'John Doe', age: 42, tel: null, email: null },
//     { fullname: 'Vanessa Williams', age: null, tel: null, email: 'v.williams@gmail.com' },
//     { fullname: 'Richard Lawson', age: 42, tel: '0765432109', email: null }]


// Exercice 2

function findUser(request, list) {
    let userFound = false;
    
    const testName = list.find(element => element === request) 
    
    if (testName !== undefined) {
        userFound = true;
    }

    
   return userFound;
}

const search = 'Lucas';
const usersList = ['Lucas', 'Juliette', 'William', 'Camille', 'Pauline', 'Sébastien'];

console.log(findUser(search, usersList));
// Expected: true


// Exercice 3

function getFirstCardToPlay(cards, lastPlay) {
    const wantedColor = Object.values(lastPlay)[0];
    const wantedNumber = Object.values(lastPlay)[1];
    const firstPlay = cards.find( y => y.color === wantedColor || y.number === wantedNumber);
    return firstPlay;
}


const cardsExample = [
{ color: 'green', number: 6 },
{ color: 'red', number: 6 },
{ color: 'red', number: 9 },
{ color: 'green', number: 9 },
{ color: 'yellow', number: 9 },
];
const lastPlayExample = { color: 'blue', number: 6 };

console.log(JSON.stringify(getFirstCardToPlay(cardsExample, lastPlayExample)));