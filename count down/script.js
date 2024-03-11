// count down recursive function

function countDown(arg) {
    if (arg == 0) return "all done";
    console.log(arg)
    arg--;
    countDown(arg)
   
}

console.log(countDown(5))