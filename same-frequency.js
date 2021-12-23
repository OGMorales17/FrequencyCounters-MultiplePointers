/***************************************************************************

Write a function called sameFrequency. Given two positive integers, 
find out if the two numbers have the same frequency of digits.

Constraints

Time Complexity - O(N + M)

add whatever parameters you deem necessary
****************************************************************************/

// Examples:

sameFrequency(182, 281) // true
sameFrequency(34, 14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22, 222) // false

function makeFreqCounter(num) {

    let str = num.toString();
    const frequencies = new Map()
    // let frequencies = {};

    for (let i = 0; i < str.length; i++) {
        frequencies[str[i]] = (frequencies[str[i]] || 0) + 1;
    }
    return frequencies
}



function sameFrequency(num1, num2) {
    if (num1.toString().length !== num2.toString().length) return false;

    const countMap1 = makeFreqCounter(num1);
    const countMap2 = makeFreqCounter(num2);


    for (let key in countMap1) {
        if (countMap1[key] !== countMap2[key]) return false;
    }

    return true;
}