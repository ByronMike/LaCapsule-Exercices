// Un candidat passe un test de 10 questions, dont les bonnes réponses sont stockées dans le tableau correctAnswers.
// Les réponses du candidat sont quant à elles stockées dans le tableau results.

// A partir de la fonction isSucceeded prenant comme arguments ces 2 tableaux, comparez les résultats et calculez le pourcentage de bonnes réponses.
// La fonction renverra un objet contenant le statut de réussite (true ou false) ainsi que le score au test en pourcentage. Si le candidat obtient au moins 50 % de bonnes réponses, la variable success sera évaluée à true.
// Dans le cas contraire, elle sera évaluée à false.

function isSucceeded(ans, res) {
  let success = false;
  let score = 0;

  let array = [];
  for (let i = 0; i < ans.length; i++) {
    if (ans[i] === res[i]) {
      array.push(100 / ans.length);
    } else {
      array.push(0);
    }
  }
  // console.log(array)

  const initialValue = 0;
  const sumWithInitial = array.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );

  //   console.log(sumWithInitial);

  score = sumWithInitial;
  if (score >= 50) {
    success = true;
  } else {
    success = false;
  }

  return { success: success, score: score };
}

const correctAnswers = [2, 3, 4, 1, 2, 2, 4, 3];
const results = [2, 4, 3, 1, 3, 2, 4, 3];
console.log(isSucceeded(correctAnswers, results));
// Expected: {"success":true,"score":62.5}
