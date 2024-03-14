//  insertion sort

function insertionSort(arg) {
    for (var i = 1; i < arg.length; i++) {
        var currentVal = arg[i]
        for (var j = i - 1; j >= 0 && arg[j] > currentVal; j--) {
            arg[j + 1] = arg[j]
        }
        arg[j + 1] = currentVal
    }
    return arg;
}
const arr = [3, 6, 2, 4, 1]
console.log(insertionSort(arr))