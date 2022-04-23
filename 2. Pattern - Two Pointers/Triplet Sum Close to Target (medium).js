/* Problem Statement#
Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.

Example 1:
Input: [-2, 0, 1, 2], target=2
Output: 1
Explanation: The triplet [-2, 1, 2] has the closest sum to the target.
Example 2:

Input: [-3, -1, 1, 2], target=1
Output: 0
Explanation: The triplet [-3, 1, 2] has the closest sum to the target.
Example 3:

Input: [1, 0, 1, 1], target=100
Output: 3
Explanation: The triplet [1, 1, 1] has the closest sum to the target. */

function triplet_sum_close_to_target(arr, targetSum) {
	arr.sort((a, b) => a - b);
	let smallest_difference = Infinity;

	for (let i = 0; i < arr.length - 2; i++) {
		let left = i + 1;
		let right = arr.length - 1;
		while (left < right) {
			const target_diff = targetSum - arr[i] - arr[left] - arr[right];
			//we've found a triplet with an exact sum
			if (target_diff === 0) {
				//return sum of all the numbers
				return targetSum;
			}

			// the second part of the following 'if' is to handle the smallest sum when we have more than one solution
			if (
				Math.abs(target_diff) < Math.abs(smallest_difference) ||
				(Math.abs(target_diff) === Math.abs(smallest_difference) &&
					target_diff > smallest_difference)
			) {
				//save the closest and the biggest difference
				smallest_difference = target_diff;
			}

			if (target_diff > 0) {
				//we need a triplet with a bigger sum
				left += 1;
			} else {
				right -= 1;
			}
		}
	}
	return targetSum - smallest_difference;
}

console.log(triplet_sum_close_to_target([-2, 0, 1, 2], 2));
