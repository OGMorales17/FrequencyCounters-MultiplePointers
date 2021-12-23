/************************************************************************************************************************

constructNote

Write a function called constructNote, which accepts two strings, a message and some letters. 
The function should return true if the message can be built with the letters that you are given; otherwise, 
it should return false.

Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

Constraints:

Time Complexity: O(M + N) - If M is the length of message and N is the length of letters:

add whatever parameters you deem necessary
*************************************************************************************************************************/

// Examples

constructNote('aa', 'abc') // false
constructNote('abc', 'dcba') // true
constructNote('aabbcc', 'bcabcaddff') // true


function makeFreqCounter(letters) {
    const frequencies = {}

    for (let char of letters) {
        frequencies[char] = ++frequencies[char] || 1;
    }
    return frequencies
}


function constructNote(msg, letter) {
    const messageFreq = makeFreqCounter(msg);
    const lettersFreq = makeFreqCounter(letter);

    for (let char in messageFreq) {
        if (!lettersFreq[char]) {
            return false;
        }
        if (messageFreq[char] > lettersFreq[char]) {
            return false;
        }
    }
    return true;
}
