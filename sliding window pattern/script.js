// write a function called max subarray sum which 
// accepts an array of intigers and a number called 
// navigator. the function should calculate the 
// maximum sum of n consecutive element in the array

function maxSubarraySum(args1, args2) {
    let tempSum, maxSum = 0

    for (let i = 0; i < args2; i++) {
        maxSum += args1[i]
    }

    tempSum = maxSum
    for (let i = args2; i < args1.length; i++) {
        tempSum = tempSum - args1[i - args2] + + args1[i];
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum

}


let arr = [2, 6, 9, 2, 5, 8, 5, 6, 3]
let num = 3

console.log(maxSubarraySum(arr, num))