const my_array = [64, 34, 25, 12, 22, 11, 90, 5]

// bubble sort

function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

//console.log(bubbleSort(my_array))

// Selection sort

function selectionSort(arg) {
    for (let i = 0; i < arg.length; i++) {
        let lowest = i;
        for (var j = i + 1; j < arg.length; j++) {
            if(arg[i] > arg[j]){
                lowest = j
            }
            if(i !== j){
                var temp = arg[i]
                arg[i] = arg[lowest]
                arg[lowest] = temp
            }
        }
       
    }
    return arg
}
console.log(selectionSort(my_array))
