// La fonction groupsCount() doit permettre de regrouper et de compter le nombre d’utilisateurs par ville.

// Trouvez un algorithme pour effectuer ce calcul.

// Astuce : il existe de nombreuses méthodes permettant de résoudre ce problème (Object.keys(), Array.find(), Array.filter()...). À vous de trouver celle qui vous conviendra le mieux !

// Stockez votre réponse dans l’objet count, celui-ci sera retourné par la fonction.

function groupsCount(users) {
  let count = {};

  
  let countKeys = Object.keys(count);
  for (let user of users) {
    const cityToFind = countKeys.find((e) => e === user.city);
    console.log("citytofind", cityToFind);
    if (!cityToFind) {
      const listFiltered = users.filter((e) => e.city === user.city);
      count[user.city] = listFiltered.length;
    }
  }

  return count;
}

const usersExample = [
  { name: "Pierre", city: "Paris" },
  { name: "Paul", city: "Lyon" },
  { name: "Jacques", city: "Paris" },
  { name: "Julie", city: "Grenoble" },
  { name: "Quentin", city: "Orléans" },
  { name: "Emma", city: "Grenoble" },
];
console.log(JSON.stringify(groupsCount(usersExample)));
// Expected: {"Paris":2,"Lyon":1,"Grenoble":2,"Orléans":1}
