function quickSOrtHelper(arg) {

    for(let i=0;i< arg.length; i++){
        let pivotVal = arg[0];
        let index = 0
        for(let j=1; j< arg.length; j++){
            if(pivotVal > arg[j]){
                index = index + 1
            }
        }
        console.log(index)
    }

    return arg;
}
const arr = [9, 6, 7, 2, 8, 3, 4, 1]
console.log(quickSOrtHelper(arr))