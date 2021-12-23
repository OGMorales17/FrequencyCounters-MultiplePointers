/*************************************************************************************************************
averagePair

Write a function called averagePair. Given a sorted array of integers and a target average, 
determine if there is a pair of values in the array where the average of the pair equals the target average. 
There may be more than one pair that matches the average target.

Constraints:

Time Complexity: O(N)

add whatever parameters you deem necessary
***************************************************************************************************************/

// Examples:

averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false

function averagePair(arr, num) {
    let start = 0; // left point
    let end = arr.length - 1; // right point

    while (start < end) {
        let avg = (arr[start] + arr[end]) / 2;

        if (avg === num) {
            return true;
        } else if (avg < num) {
            start++;
        } else {
            end--;
        }
    }
    return false;
}
