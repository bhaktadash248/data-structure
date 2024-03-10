// write a function which return trueor false and it accepts 2 arrays and it return true 
// if the corrosponding values are the suqare of the 1st array
function corrospondinArr(args1,args2){
    if(args1.length !== args2.length) return false
    for (let i = 0; i< args1.length ; i++){
        let corrospondinArr =args2.indexOf(args1[i] ** 2);
        if(args2.indexOf(args1[i] ** 2) === -1) return false
        args2.splice(corrospondinArr, 1)
    }
    return true
}

let arr1 = [1,2,3]
let arr2 = [1,4,9]

console.log(corrospondinArr(arr1,arr2))