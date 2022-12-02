// Complétez la fonction calculateTrip: Pour chaque trajet dans la liste trips, ajoutez une propriété totalTime ayant pour valeur une estimation du temps en minutes (nombre) et une propriété estimatedTime ayant pour valeur un string “XhXX” si le trajet dure plus d’une heure ou “XX min” dans le cas contraire.

function calculateTrip (arr) {
    // Insert your code here
    for (let proposition of arr) {
 
        const arrival = new Date(proposition.arrival);
        const departure = new Date(proposition.departure);
     
        // Calcul des heures et des minutes de trajet
        let hours = departure.getMinutes() > arrival.getMinutes() ? (arrival.getHours() - departure.getHours()) - 1 : arrival.getHours() - departure.getHours();
        let minutes = departure.getMinutes() > arrival.getMinutes() ? (60 - departure.getMinutes()) + arrival.getMinutes() : arrival.getMinutes() - departure.getMinutes();
     
        // ajout du temps de trajet en minutes
        proposition.totalTime = hours > 0 ? (hours * 60) + minutes : minutes;
     
        // ajout du temps de trajet en chaîne de caractères
        if (minutes < 10) minutes = `0${minutes}`;
        proposition.estimatedTime = hours > 0 ? `${hours}h${minutes}` : `${minutes} min`;
    };
        
    return arr.sort((a, b) => a.totalTime - b.totalTime)
}


const trips = [
   { departure: '2021/12/24 07:45:00', arrival: '2021/12/24 09:05:00' },
   { departure: '2021/12/24 08:00:00', arrival: '2021/12/24 08:50:00' },
   { departure: '2021/12/24 08:00:00', arrival: '2021/12/24 09:05:00' }
]
const result = calculateTrip(trips)
console.log(result)
// Expected :
// [
//     {
//         departure: '2021/12/24 07:45:00',
//         arrival: '2021/12/24 09:05:00',
//         totalTime: 80,
//         estimatedTime: '1h20'
//     },
//     {
//         departure: '2021/12/24 08:00:00',
//         arrival: '2021/12/24 08:50:00',
//         totalTime: 50,
//         estimatedTime: '50 min'
//     },
//     {
//         departure: '2021/12/24 08:00:00',
//         arrival: '2021/12/24 09:05:00',
//         totalTime: 65,
//         estimatedTime: '1h05'
//     }
// ]
