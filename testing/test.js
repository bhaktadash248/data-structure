function binarySearch(arg, num){
    let left = 0;
    let right = arg.length -1;

    while(left<=right){
        let middle = Math.floor((left + right)/2)
        if( num == arg[middle]){
            return middle
        }else if(arg[middle] < num ){
            left = middle+ 1
        }else{
            right = right -1
        }
    }
    return -1
  
}

let arr = [1,2,3,4,5]

console.log(binarySearch(arr , 5))