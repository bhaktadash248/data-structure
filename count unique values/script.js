// Implement a function called count unique values 
// which accepts a sorted array and count the unique i.e. without repeation
// values in that array. there can be -ve numbers 
// in that array but it will be always sorted

function countUniqueValues(arg) {
    let sortedArr = arg.sort();
    let secVal = 1;
    let output = 0;
    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] !== sortedArr[secVal]) {
            ++output
        }
        ++secVal;
    }
    return output;
}

// using the set method

// function countUniqueValues(args){
//     return result = new Set(args)
// }

let arr = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]

console.log(countUniqueValues(arr))