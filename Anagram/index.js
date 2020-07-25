function validAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    let result1 = {};
    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i];
        result1[letter] ? result1[letter] += 1 : result1[letter] = 1
    }
    let result2 = {};
    for (let j = 0; j < str2.length; j++) {
        let letter1 = str2[j];
        result2[letter1] ? result2[letter1] += 1 : result2[letter1] = 1
    }

    if(Object.entries(result1).toString() == Object.entries(result2).toString()){ 
        return true;
    }else 
    {
        return false;
    }
}
