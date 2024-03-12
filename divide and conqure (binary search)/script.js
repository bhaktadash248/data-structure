// Given a sorted array of integers, 
// write a function called search, that accepts 
// a value and returns the index where the value 
// passed to the function is located. 
// If the value is not found, return -1

// linear search

// function search(arg1, arg2){
//     for (let i = 0; i< arg1.length; i++){
//         if(arg1[i] === arg2) return i
//     }
//     return -1
// }

// bianary search

function search(arr, target) {

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2)
        if (arr[middle] === target) {
            return middle
        } else if (arr[middle] < target) {
            left = middle + 1
        } else {
            right = middle - 1
        }
    }
    return -1

}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let num = 8

console.log(search(arr, num))