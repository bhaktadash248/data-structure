function getDIgit(num, i){
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

console.log(getDIgit(7923,0))