function smallest_subarray_sum(s, arr) {
	let windowSum = 0;
	let minLength = Infinity;
	let windowStart = 0;

	for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
		//add the next element
		windowSum += arr[windowEnd];
		//shrink the window as small as possible until the "window sum" is smaller than s
		while (windowSum >= s) {
			minLength = Math.min(minLength, windowEnd - windowStart + 1);
			windowSum -= arr[windowStart];
			windowStart += 1;
		}
	}

	if (minLength === Infinity) {
		return 0;
	}

	return minLength;
}

console.log(
	`Smallest subarray length: ${smallest_subarray_sum(8, [3, 4, 1, 1, 6])}`
);

/* Time Complexity#
The time complexity of the above algorithm will be O(N)
O(N)
. The outer for loop runs for all elements, and the inner while loop processes each element only once; therefore, the time complexity of the algorithm will be O(N+N)
O(N+N)
, which is asymptotically equivalent to O(N)
O(N)
.

Space Complexity#
The algorithm runs in constant space O(1)
O(1)
. */
