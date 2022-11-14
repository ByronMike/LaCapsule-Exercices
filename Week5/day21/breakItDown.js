function destructuringObj(obj) {
  let newObj = {};
  // Utilisez la syntaxe de décomposition JS pour extraire les valeurs prénom, nom et poids de l’objet ci-dessous.
  const { fn, ln, age, email, weight } = obj;
  console.log(fn);
  // Créez ensuite une nouvelle variable newObj contenant le prénom, le nom et le poids formaté en string sous la forme de “XXkg”.
  newObj = { fn: fn, ln: ln, weight: weight + "kg" };

  return newObj;
}

const objExemple = {
  fn: "Martin",
  ln: "Harper",
  age: 26,
  email: "martin.harper@test.com",
  weight: 102,
};
console.log(JSON.stringify(destructuringObj(objExemple)));
// Expected: { "fn": "Martin", "ln": "Harper", "weight": "102kg" }
