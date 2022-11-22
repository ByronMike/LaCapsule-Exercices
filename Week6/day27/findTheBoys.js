// À l’aide d’une expression rationnelle, recherchez dans la liste playlist toutes les chansons dont le groupe ou le titre comprend “boys” (peu importe les majuscules/minuscules).

// Le résultat devrait être retourné par la fonction findAWord() dans le nouveau tableau results incluant seulement les objets correspondants à la recherche.

function findAWord(data) {
  let results = [];

  const search = /boys/gi;
  results = data.filter(e => e.artist.match(search) || e.song.match(search));
  
  return results;
}

const playlist = [
  { artist: "The Cure", song: "Boys Don't Cry" },
  { artist: "The Beatles", song: "Penny Lane" },
  { artist: "Oasis", song: "Wonderwall" },
  { artist: "Depeche Mode", song: "Enjoy the silence" },
  { artist: "The Beach Boys", song: "Surfin' USA" },
];
console.log(JSON.stringify(findAWord(playlist)));

// function findAWord(data) {
//     let results = [];
    
//     // Insert your code here
//     const search = /boys/gi;
//     results = data.filter(e => e.artist.match(search) || e.song.match(search));
    
//     return results;
// }