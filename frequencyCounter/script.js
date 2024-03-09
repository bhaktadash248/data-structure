// write a function which accepts 2 arrays and it return true if the corrosponding values are the suqare of the 1st array

function corrospondingVal(args1, args2) {
    if (args1.length !== args2.length) {
        return false
    }
    for (let i = 0; i < args1.length; i++) {
        let correctValue = args2.indexOf(args1[i] ** 2)
        if(correctValue === -1) return false
        args2.splice(correctValue,1)
    }
    return true

}

// let arr1 = [1, 2, 3];
let arr1 = [1, 2, 33];
let arr2 = [1, 4, 9]

console.log(corrospondingVal(arr1, arr2));