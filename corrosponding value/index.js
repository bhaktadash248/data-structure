// write a function called same, which accepts two array.
// The function should return true if every value in the array 
// has its corrosponding value squared in the second array.
// The frequemcy of values must be the same.

// Steps
// 1. Write a function called Same which ll receive 2 array as input parameter
// 2. Check the count of both the array
// 3. if true check the corrosponding value is bouble of 1st array or not
// 4. If double then remove from 2nd array
// 5. Return true

function Same(arr1, arr2) {  
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (var i = 0; i < arr1.length; i++) {
        let corrospondingIndex = arr2.indexOf(arr1[i] ** 2)
        if (corrospondingIndex === -1) {
            return false;
        }
        arr2.splice(corrospondingIndex, 1)
    }
    return true;
}