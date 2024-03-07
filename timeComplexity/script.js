// function sumOfNumbers(n){
//     let total = 0;
//     for (let i=0; i<=n; i++){
//         total += i
//     }
//     return total;
// }

function sumOfNumbers(n){
    return n * (n +1) /2
}
 let t1 = performance.now()
sumOfNumbers(1000000000)
let t2 = performance.now()
console.log((t2 - t1) / 1000)