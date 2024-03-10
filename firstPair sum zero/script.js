// Write a function which accepts a 
// sorted arrat of intigers. The function 
// should find the first pair where the sum is zero. 
// Return an array that includesboth values that sum 
// to zero or undefined if a pair does not exists

function sumZero(arg) {
    let rightarrLength = arg.length
    for (let i = 0; i < arg.length; i++) {
        --rightarrLength;

        let leftVal = arg[i];
        let rightVal = arg[rightarrLength];
        if (i < rightarrLength) {
            if (leftVal + rightVal == 0) {
                return [leftVal, rightVal]
            }
        }
    }
}

let arr = [-4, -22, -1, 0,  1, 3, 5]

console.log(sumZero(arr))

