// Avec la fonction Object.assign(), fusionnez les deux objets en un seul et stockez le résultat dans la variable newObj. Attention: la clé “country” dans le deuxième objet est inexacte ! Modifiez-la en “city”. Sa valeur restera la même.
// Le résultat sera retourné par la fonction joinObjects()

function joinObjects(obj1, obj2) {
  let newObj = {};

  // 1) Modify the "country" key in the 2nd object because it's wrong !
  object2["city"] = object2["country"];
  delete object2["country"];
  //   obj2.city = obj2.country;
  //   delete obj2.country;
  //   console.log(object2);

  // 2) Fusionner les deux objets en un seul

  newObj = Object.assign(object1, object2);

  return newObj;
}

const object1 = { continent: "Europe", country: "France" };
const object2 = { planet: "Earth", country: "Paris", state: "IDF" };

console.log(joinObjects(object1, object2));

// Expected result :
// {
//     "continent": "Europe",
//     "country": "France",
//     "planet": "Earth",
//     "state": "IDF",
//     "city": "Paris"
// }
