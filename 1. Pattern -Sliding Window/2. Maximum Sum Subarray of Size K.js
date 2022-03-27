/* Problem Statement#
Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

Example 1:

Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].
Example 2:

Input: [2, 3, 4, 1, 5], k=2 
Output: 7
Explanation: Subarray with maximum sum is [3, 4]. */

//Brute force soluion
/* function max_sub_array_of_size_k(k, arr) {
	let maxSum = 0;
	let windowSum = 0;

	for (let i = 0; i < arr.length - k + 1; i++) {
		windowSum = 0;
		for (let j = i; j < i + k; j++) {
			windowSum += arr[j];
		}
		maxSum = Math.max(maxSum, windowSum);
	}
	return maxSum;
}

console.log(
	`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(
		2,
		[2, 3, 4, 1, 5]
	)}`
); */

//Sliding Window Solution
function max_sub_array_ofsize_k(k, arr) {
	let maxSum = 0;
	let windowSum = 0;
	let windowStart = 0;

	for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
		//add the next element
		windowSum += arr[windowEnd];
		//slide the window, we dont need to slide if we've not hit the required window size of "k"
		if (windowEnd >= k - 1) {
			maxSum = Math.max(maxSum, windowSum);
			//subtract the element going out
			windowSum -= arr[windowStart];
			//slide the window ahead
			windowStart += 1;
		}
	}
	return maxSum;
}

console.log(max_sub_array_ofsize_k(2, [2, 3, 4, 1, 5]));
