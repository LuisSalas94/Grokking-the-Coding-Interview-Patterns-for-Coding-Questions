/* Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.
Example 1:

Input: [-2, -1, 0, 2, 3]
Output: [0, 1, 4, 4, 9]
Example 2:

Input: [-3, -1, 0, 1, 2]
Output: [0, 1, 1, 4, 9] */
//Solution #1
/* function make_squares(arr) {
	const squares = [];
	arr.map((num) => squares.push(Math.pow(num, 2)));
	return squares.sort((a, b) => a - b);
} */

//Solution #2
function make_squares(arr) {
	const n = arr.length;
	let squares = Array(n).fill(0);
	let highestSquareIdx = n - 1;
	let left = 0;
	let right = n - 1;

	while (left < right) {
		let leftSquare = arr[left] * arr[left];
		let rightSquare = arr[right] * arr[right];
		if (leftSquare > rightSquare) {
			squares[highestSquareIdx] = leftSquare;
			left += 1;
		} else {
			squares[highestSquareIdx] = rightSquare;
			right -= 1;
		}
		highestSquareIdx -= 1;
	}
	return squares;
}

console.log(make_squares([-2, -1, 0, 2, 3]));
/* Time complexity#
The above algorithm’s time complexity will be O(N)
O(N)
 as we are iterating the input array only once.

Space complexity#
The above algorithm’s space complexity will also be O(N)
O(N)
; this space will be used for the output array. */
