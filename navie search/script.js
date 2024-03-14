// check how many times a word is present in a string

function naiveSearch(long, short) {
    let count = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if (short[j] !== long[i + j]) break;
            if (j === short.length - 1) count++
        }
    }
    return count
}

// Example usage:
var longString = "lol ipsum dolor ipsum sit lollol, consectetur adipiscing elit.";
var shortString = "lol";
console.log(naiveSearch(longString, shortString));