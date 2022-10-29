// Bonne pratique //
// console.log("search2", search2)

// Question 1 : REGEX Test

function testRegex(text) {
    const pattern = /[0-9]+/;
    result = pattern.test(text);
    return result
}

const str = "My address is: 256 brick lane.";
console.log(testRegex(str))
// Expected : true




// Question 2 : REGEX Match

function extractText(text) {
    const pattern =/v[a-z]*/ig;
    result = text.match(pattern);
    return result
}

const str2 = "My name is vanessa Vampire";
console.log(extractText(str2))
// Expected : vanessa, Vampire



// Question 3 : REGEX Replace

function replaceText(text) {
    const pattern = /codage/g
    result = text.replace(pattern, "code");
    return result
}

const str3 = "J'adore le codage informatique!";
console.log(replaceText(str3))
// Expected : J'adore le code informatique!


// Question 4 : Bug

function getTotal(products) {
    let total = 0;
    for (let item of products) {
        total += parseInt(item.price);
    }
    return total;
}

console.log(getTotal([
    { product: 't-shirt', price: '15' },
    { product: 'jeans', price: '60' },
    { product: 'sweater', price: '30' },
]));
// Expected: 105

// Question 5 : Cities

function search(arr) {
    const found = []
    
    const pattern = /[a-z]*to[a-z]*/i;
    for (let i = 0; i < arr.length; i++) {
        if (pattern.test(arr[i]) === true )
        { found.push(arr[i])}
    }
    return found
}


const cities = ["Paris", "Tokyo", "Buenos Aires", "Toronto", "Londres", "Barcelone", "Kyoto", "Berlin", "Shanghaï", "Melbourne"]
const result = search(cities)
console.log(JSON.stringify(result))


// Question 6 : Clean sentence

// Option 1
function cleanSentence(str) {
    
    // Insert your code here
    const pattern = /[^a-z ]/ig
    const newstr = str.replace(pattern, '')
    return newstr
}


const sentence = "J@av@aScri^pt i*s m!y @frie'nd!";
const result4 = cleanSentence(sentence);
console.log(result4)
// Expected : JavaScript is my friend


// Expected : JavaScript is my friend

// Option 2 ( A RETRAVAILLER)
/*
function cleanSentence(str) {
    const pattern = /a/ig
    const tab = []
    for (let i = 0 ; i < str.length ; i++ ) {
        if (pattern.test(str[i] === true))  {
            tab.push(str[i]);
        }
    }
        
    return tab.join("")
}


const sentence = "J@av@aScri^pt i*s m!y @frie'nd!";
const result = cleanSentence(sentence);
console.log(result)
// Expected : JavaScript is my friend
*/

// Question 7 : Seven errors

function getDuration(activities) {
    let totalDuration = 0;
    let totalMessage = '';
    
    for (let i = 0; i < activities.length; i++) {
        totalDuration += activities[i].duration;
        totalMessage = `La durée totale de notre randonnée sera de ${totalDuration} minutes.`;
    }
    return totalMessage;
}
    
const activitiesArray = [
    {
        activity: "Climbing to Archard lake",
        duration: 120
    },
    {
        activity: "Fishing in the lake",
        duration: 60
    },
    {
        activity: "Picnic",
        duration: 45
    },
    {
        activity: "Nap in the grass",
        duration: 20
    },
    {
        activity: "Get back to the car",
        duration: 90
    },
    ]

console.log(getDuration(activitiesArray));
// Expected result : La durée totale de notre randonnée sera de 335 minutes.


// Question 8 : Get it simple
const citiesList = [
    {
        city: "Paris",
        year: "2018",
        population: 2174000,
    },
    {
        city: "Bordeaux",
        year: "2017",
        population: 258000,
    },
    {
        city: "Cannes",
        year: "2018",
        population: 74000,
    },
    {
        city: "Lyon",
        year: "2018",
        population: 518000,
    },
    {
        city: "Dijon",
        year: "2016",
        population: 82500,
    },
];

function rankCities(cities) {
    let filteredList = [];
    let sortedList = [];
    let finalList = [];

    for (let i = 0; i < cities.length; i++) {
        if (cities[i].year === "2018") {
            filteredList.push(cities[i])
        }
    }

   for (let j = 0; j < filteredList.length; j++) {
        sortedList = filteredList;
        sortedList.sort((a, b) => (b.population - a.population));
    }
    finalList = sortedList;

    return finalList;
}

console.log((rankCities(citiesList)));
// Expected result: 
// [{ city: "Paris", year: "2018", population: 2174000 },
//  { city: "Lyon", year: "2018", population: 518000 }
//  { city: "Cannes", year: "2018", population: 74000 }];


