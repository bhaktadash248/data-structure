// write a anagram programme
// anagram means both the strings having the same workds with euqal length

function anagramFucn(args1, args2) {
    if (args1.length !== args2.length) return false;

    let result1 = args1.split("").sort().join("")
    let result2 = args2.split("").sort().join("")

    if (result1 == result2) return true
    return false

}

let str1 = 'alaleded';
let str2 = 'laladede';

console.log(anagramFucn(str1, str2))