// count the each character of a string

// using for loop
function countChar(args) {
    let output = {};
    for (let i = 0; i < args.length; i++) {
        let charVal = args[i].toLowerCase()
        if (/[a-z0-9]/.test(charVal)) {
            output[charVal] = ++output[charVal] || 1
        }
    }
    return output
}

// using for of loop

// function countChar(args) {
//     let output = {};
//     let t1 = performance.now()
//     for (var char of args) {
//         let changeToLowercase = char.toLowerCase();
//          if (/[a-z0-9]/.test(changeToLowercase)) { //used to remove the space
//             if (output[changeToLowercase]) {
//                 output[changeToLowercase]++
//             } else {
//                 output[changeToLowercase] = 1
//             }
//         }
//     }
//     let t2 = performance.now()
//     console.log(t2-t1 / 1000)
//     return output;
// }

let result = countChar("AAAgaaasad hkjfsahjf89-023");
console.log(result)