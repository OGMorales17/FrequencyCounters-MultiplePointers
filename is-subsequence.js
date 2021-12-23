/***************************************************************************************************
 
isSubsequence
Write a function called isSubsequence which takes in two strings and checks whether the characters 
in the first string form a subsequence of the characters in the second string. 
In other words, the function should check whether the characters in the first string appear 
somewhere in the second string, without their order changing.

Constraints:

Time Complexity - O(N + M)

add whatever parameters you deem necessary
*****************************************************************************************************/

// Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)

function isSubsequence(str1, str2) {
    let i = 0;
    let j = 0;

    while (i < str1.length) {
        if (str2.length === j) return false;
        if (str1[i] === str2[j]) i++;
        j++;
    }
    return true;
}
