/* Problem Statement#
Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.

Example 1:

Input: [2, 3, 3, 3, 6, 9, 9]
Output: 4
Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].
Example 2:

Input: [2, 2, 2, 11]
Output: 2
Explanation: The first two elements after removing the duplicates will be [2, 11]. */

function remove_duplicates(arr) {
	let p1 = 0;

	for (let p2 = 1; p2 < arr.length; p2++) {
		if (arr[p1] !== arr[p2]) {
			p1 += 1;
			arr[p1] = arr[p2];
		}
	}

	return p1 + 1;
}

console.log(remove_duplicates([2, 2, 2, 11]));
