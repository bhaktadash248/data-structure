// count the each character of a string

function countChar(args) {
    let output = {};
    for (let i = 0; i < args.length; i++) {

        if (output[args.charAt(i)]) {
            output[args.charAt(i)]++
        } else {
            output[args.charAt(i)] = 1
        }
    }
    return output
}

let result = countChar("AAAgsadhkjfsahjf89-023");
console.log(result)