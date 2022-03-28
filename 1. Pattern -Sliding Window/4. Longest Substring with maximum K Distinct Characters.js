function longest_substring_with_k_distinct(str, k) {
	let windowStart = 0;
	let maxLength = 0;
	let charFrequency = {};

	//In the following loop we'll ry to extend the range [window_start, windor_end]
	for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
		const rightChar = str[windowEnd];
		if (!(rightChar in charFrequency)) {
			charFrequency[rightChar] = 0;
		}
		charFrequency[rightChar] += 1;

		//Shrink the sliding window, until we are with "k" distinct characters in the char_frequency
		while (Object.keys(charFrequency).length > k) {
			const leftChar = str[windowStart];
			charFrequency[leftChar] -= 1;
			if (charFrequency[leftChar] === 0) {
				delete charFrequency[leftChar];
			}
			//shrink the window
			windowStart += 1;
		}
		maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
	}
	return maxLength;
	/* let strObj = {};
	for (let word of str) {
		strObj[word] ? (strObj[word] += 1) : (strObj[word] = 1);
	} */
}

console.log(
	`Length of the longest substring: ${longest_substring_with_k_distinct(
		"araaci",
		2
	)}`
);

/* Time Complexity#
The above algorithm’s time complexity will be O(N)
O(N)
, where N
N
 is the number of characters in the input string. The outer for loop runs for all characters, and the inner while loop processes each character only once; therefore, the time complexity of the algorithm will be O(N+N)
O(N+N)
, which is asymptotically equivalent to O(N)
O(N)
.

Space Complexity#
The algorithm’s space complexity is O(K)
O(K)
, as we will be storing a maximum of K+1
K+1
 characters in the HashMap. */
