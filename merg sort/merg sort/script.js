// break an array into small array

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
//  below code helps to break the carray into small array 
function breakArr(arg){

    if(arg.length <= 1) return arg;
    let mid = Math.floor(arg.length/2)
    let left = breakArr(arg.slice(0, mid))
    let right = breakArr(arg.slice(mid))

    return mergeArray(left,right)

}
const arr =[9,6,8,5,7,4,1,3,1,2]
console.log(breakArr(arr))