let list = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];

function getBiggest(numbers) {
    let bigNumbers = [];
    for (let i=0; i < numbers.length; i++) {
        bigNumbers.push(Math.max(...numbers[i]));
    }
    // for (element of numbers) {
    //     bigNumbers.push(Math.max(...element));
    // }
    return bigNumbers;
}


console.log(getBiggest(list));
// Expected result : [5,27,39,1001]