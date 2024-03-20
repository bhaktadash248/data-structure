//  find the shortest number of an array

function shortestNum(arg) {
    let firstIndex = arg[1];

    for(arrVal of arg){
        if(arrVal < firstIndex){
            firstIndex = arrVal
        }
    }
    return firstIndex;
}

let arr = [7, 12, 9, 4, 11 , 2 , 1]
console.log(shortestNum(arr))
