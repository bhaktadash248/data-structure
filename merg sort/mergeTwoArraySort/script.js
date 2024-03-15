// merge two sorted array and return a new sorted array

function mergeArray(arg1, arg2) {
    let i = 0;
    let j = 0;
    let result = [];
    while (i < arg1.length && j < arg2.length) {
        if (arg1[i] > arg2[j]) {
            result.push(arg2[j])
            j++
        } else {
            result.push(arg1[i])
            i++
        }
    }

    while (i < arg1.length) {
        result.push(arg1[i])
        i++
    }

    while (j < arg2.length) {
        result.push(arg2[j])
        j++
    }

    return result
}

let arr1 = [1, 3, 5, 7, 9]
let arr2 = [2, 4, 6, 8, 10, 11]

console.log(mergeArray(arr1, arr2))