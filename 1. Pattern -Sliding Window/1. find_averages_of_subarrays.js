/* In many problems dealing with an array (or a LinkedList), we are asked to find or calculate something among all the subarrays (or sublists) of a given size. For example, take a look at this problem:

Given an array, find the average of all subarrays of ‘K’ contiguous elements in it.

Let’s understand this problem with a real input:

Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5
Here, we are asked to find the average of all subarrays of ‘5’ contiguous elements in the given array. Let’s solve this:

For the first 5 numbers (subarray from index 0-4), the average is: (1+3+2+6-1)/5 => 2.2
(1+3+2+6−1)/5=>2.2
The average of next 5 numbers (subarray from index 1-5) is: (3+2+6-1+4)/5 => 2.8
(3+2+6−1+4)/5=>2.8
For the next 5 numbers (subarray from index 2-6), the average is: (2+6-1+4+1)/5 => 2.4
(2+6−1+4+1)/5=>2.4

…
Here is the final output containing the averages of all subarrays of size 5:

Output: [2.2, 2.8, 2.4, 3.6, 2.8]
A brute-force algorithm will calculate the sum of every 5-element subarray of the given array and divide the sum by ‘5’ to find the average. This is what the algorithm will look like: */

//Brute Force solution
/* function find_averages_of_subarrays(k, arr) {
	const result = [];
	for (let i = 0; i < arr.length - k + 1; i++) {
		//find sum of "k" elements
		let sum = 0.0;
		for (let j = i; j < i + k; j++) {
			sum += arr[j];
		}
		//calculate average
		result.push(sum / k);
	}
	return result;
} */

//Sliding window soluition
function find_averages_of_subarrays(k, arr) {
	const result = [];

	let windowSum = 0.0;
	let windowStart = 0;

	for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
		//add the next element
		windowSum += arr[windowEnd];
		//slide the window, we dont need to slide if we've not hit the required window size of "k"
		if (windowEnd >= k - 1) {
			//calcualte the average
			result.push(windowSum / k);
			//subtract the element going oout
			windowSum -= arr[windowStart];
			//slide the window ahead
			windowStart += 1;
		}
	}

	return result;
}

const result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log(`Averages of subarrays of size k: ${result}`);
