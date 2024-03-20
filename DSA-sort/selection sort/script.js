// selection sort

function selectioSort(arg) {
    for (let i = 0; i < arg.length; i++) {
        for (var j = i + 1; j < arg.length; j++) {
            var lowest = i
            if (arg[i] > arg[j]) {
                lowest = j
            }
        }
        if (i !== j) {
            var tempVar = arg[i]
            arg[i] = arg[lowest]
            arg[lowest] = tempVar
        }

    }
    return arg
}
const arr = [3, 7, 2, 8, 4, 9, 6]
console.log(selectioSort(arr))