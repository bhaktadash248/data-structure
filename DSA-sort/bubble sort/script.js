// bubble sort 

function bubbleSort(arg) {
    for (let i = arg.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arg[j] > arg[j + 1]) {
                var tempVar = arg[j]
                arg[j] = arg[j + 1]
                arg[j + 1] = tempVar

            }
        }
    }
    return arg
}
const arr = [5, 7, 9, 6, 4, 8, 1, 3]
console.log(bubbleSort(arr))