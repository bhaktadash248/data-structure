// Question: count the character of the string and resturn as a object

// Answer:

//1. Take an empty object
//2. Use loop to count the character
//3. if char is present increase the count
//4. if not then assign 1 wrt the char 
//5. Return the result

function countChar(str){
    var result = {};
    for(var char of str){
        char = char.toLowerCase();
        result[char] = ++result[char] || 1;
    }
    return result;
}

// run in console
// countChar("Hello")