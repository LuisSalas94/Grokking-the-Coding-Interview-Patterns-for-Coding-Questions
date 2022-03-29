function non_repeat_substring(str) {
	let windowStart = 0;
	let maxLength = 0;
	let charIndexMap = {};
	//try to extend the range [windowStart, windowEnd]
	for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
		const rightChar = str[windowEnd];
		//If the map already contains the "rightChar", shrink the window from the beginning so that
		//we have only one occurrence of "rightChar"
		if (rightChar in charIndexMap) {
			//this is tricky; in the current window, we will not have any "rightChar" after its previous index
			//and if "windowStart" is already ahead of the last index of "rightChar", we'll keep "windowStart"
			windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
		}
		//insert the "rigthChar" into the map
		charIndexMap[rightChar] = windowEnd;
		//remember the maximun length so far
		maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
	}
	return maxLength;
}

console.log(
	`Length of the longest substring: ${non_repeat_substring("abccde")}`
);
