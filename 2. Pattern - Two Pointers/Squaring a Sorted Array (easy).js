/* Problem Statement#
Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

Example 1:

Input: [-2, -1, 0, 2, 3]
Output: [0, 1, 4, 4, 9]
Example 2:

Input: [-3, -1, 0, 1, 2]
Output: [0, 1, 1, 4, 9] */

function make_squares(arr) {
	const squares = [];
	arr.map((num) => squares.push(Math.pow(num, 2)));
	return squares.sort((a, b) => a - b);
}

console.log(make_squares([-3, -1, 0, 1, 2]));
