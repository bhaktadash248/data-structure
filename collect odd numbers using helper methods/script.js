// collect the odd numbers of an array helper methods

// without using recursion
// function collectOddNum(arg) {
//     let result = []

//     for (let i = 0; i < arg.length; i++) {
//         if (arg[i] % 2 !== 0) {
//             result.push(arg[i])
//         }
//     }
//     return result
// }

// using recursion

// function collectOddNum(arg) {
//     let result = [];
//     function helperFucn(helperArg) {
//         if (helperArg.length === 0) return
//         if(helperArg[0] % 2 !==0){
//             result.push(helperArg[0])
//         }
//         helperFucn(helperArg.slice(1))
//     }
//     helperFucn(arg)
//     return result;
// }

// using pure recursion

function collectOddNum(arg) {
    let result = []
    if (arg.length === 0) return result;

    if (arg[0] % 2 !== 0) {
        result.push(arg[0])
    }
    return result = result.concat(collectOddNum(arg.slice(1)))
}

let arr = [1, 23, 4, 45]

console.log(collectOddNum(arr))