// Write a function called linearSearch which accepts 
// an array and a value, and returns the index at 
// which the value exists. If the value does not 
// exist in the array, return -1.

function linearSearch(arg, num){
    for(let i = 0; i< arg.length; i++){
        if(arg[i] == num){
            return ++i;
        }
    }return -1
  }
  
  
  let arr = [1,5,3,8,6,4,9]
  console.log(linearSearch(arr, 9))