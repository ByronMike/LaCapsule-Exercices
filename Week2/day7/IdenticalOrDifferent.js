
    function checkDifferences (arrays) {
        let result = []
        for (let i=0 ; i < arrays.length ; i++) {
            if (arrays[i].every(val => val === arrays[i][0])) {
                result.push(true);
            } else {
                result.push(false);
            }
        }
        return result;
    }

    console.log(checkDifferences([
        [true, true, true, true],
        ['test', 'test', 'test'],
        [1, 1, 1, 2],
        ['10', 10, 10, 10]
    ]));
    // Expected: true, true, false, false