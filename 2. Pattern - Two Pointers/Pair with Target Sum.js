/* Problem Statement#
Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

Example 1:

Input: [1, 2, 3, 4, 6], target=6
Output: [1, 3]
Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6
Example 2:

Input: [2, 5, 9, 11], target=11
Output: [0, 2]
Explanation: The numbers at index 0 and 2 add up to 11: 2+9=11 */

function pair_with_targetsum(arr, target) {
	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		const sum = arr[left] + arr[right];
		if (sum === target) {
			return [left, right];
		} else if (sum > target) {
			right--;
		} else {
			left++;
		}
	}
}

console.log(pair_with_targetsum([1, 2, 3, 4, 6], 6));

/* Time Complexity#
The time complexity of the above algorithm will be O(N)
O(N)
, where ‘N’ is the total number of elements in the given array.

Space Complexity#
The algorithm runs in constant space O(1)
O(1)
. */
