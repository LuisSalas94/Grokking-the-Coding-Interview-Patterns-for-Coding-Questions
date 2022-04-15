function lengthOfLongestSubstring(s) {
	let start = 0;
	let maxLength = 0;
	let charIndexMap = {};

	for (let end = 0; end < s.length; end++) {
		const rightChar = s[end];
		if (rightChar in charIndexMap) {
			start = Math.max(start, charIndexMap[rightChar] + 1);
		}
		charIndexMap[rightChar] = end;
		maxLength = Math.max(maxLength, end - start + 1);
	}

	return maxLength;
}

console.log(lengthOfLongestSubstring("aabccbb"));
