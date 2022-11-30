// À l’intérieur de la fonction stringRevert(), inversez les lettres du mot stocké dans la variable “word” et stockez ce nouveau mot dans la variable newWord.

function stringRevert(str) {
    let newWord = '';
    
    // Insert your code here
    str = str.split("")
    str = str.reverse()
    str = str.join("")
    
    newWord = str
    
    return newWord;
}


const word = "tpircSavaJ";
console.log(stringRevert(word));
// Expected result: JavaScript