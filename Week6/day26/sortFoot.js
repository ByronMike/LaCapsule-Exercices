// En complétant la fonction ranking, classez les équipes selon leur nombre de points (du plus important au moins important).
// Si 2 équipes ont le même nombre de points, départagez-les selon leur goal_average (du plus important au moins important également).
// Le nouveau tableau devrait être renvoyé par la fonction ranking.

function ranking(arr) {
  // Insert your code here
  arr.sort((a, b) => (a.points < b.points ? 1 : -1)) ||
    arr.sort((a, b) => (a.goal_average < b.goal_average ? 1 : -1));
  console.log(arr[2]);

  return arr;
}

// Do not edit / remove code below this line
console.log(
  JSON.stringify(
    ranking([
      { team: "Nice", points: 28, goal_average: 3 },
      { team: "Lyon", points: 34, goal_average: 3 },
      { team: "PSG", points: 40, goal_average: 10 },
      { team: "Marseille", points: 30, goal_average: -2 },
      { team: "Lille", points: 30, goal_average: 0 },
    ]),
    null,
    4
  )
);

// Expected :
// [
//     { team: 'PSG', points: 40, goal_average: 10 },
//     { team: 'Lyon', points: 34, goal_average: 3 },
//     { team: 'Lille', points: 30, goal_average: 0 },
//     { team: 'Marseille', points: 30, goal_average: -2 },
//     { team: 'Nice', points: 28, goal_average: 3 }
// ]
