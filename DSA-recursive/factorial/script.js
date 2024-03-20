// write factorial of a number using recusively

function factorial(arg) {
    if(arg === 1 || arg == 0) return 1
    return arg * factorial(arg-1)
}

console.log(factorial(0))