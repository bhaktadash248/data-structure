// write a anagram programme
// anagram means both the strings having the same workds with euqal length

// with using predefined methods

// function anagramFucn(args1, args2) {
//     if (args1.length !== args2.length) return false;

//     let result1 = args1.split("").sort().join("")
//     let result2 = args2.split("").sort().join("")

//     if (result1 == result2) return true
//     return false

// }

// without usinf any predefined methods

function anagramFucn(args1,args2){
    if(args1.length !== args2.length) return false;
    let result = {}
    for( let res of args1){
        result[res] ? result[res] += 1 : result[res] = 1
    }

    for (let res of args2){
        if(!result[res]) return false
        result[res] -=1
    }
    return true

}


let str1 = 'anagram';
let str2 = 'gramana';

console.log(anagramFucn(str1, str2))