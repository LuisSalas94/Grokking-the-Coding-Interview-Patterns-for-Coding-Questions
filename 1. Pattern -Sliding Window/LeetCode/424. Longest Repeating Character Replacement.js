function characterReplacement(str, k) {
	let start = 0;
	let maxLength = 0;
	let maxRepeatLetterCount = 0;
	let frequencyMap = {};

	for (let end = 0; end < str.length; end++) {
		const rightChar = str[end];
		//create hashMap
		frequencyMap[rightChar]
			? (frequencyMap[rightChar] += 1)
			: (frequencyMap[rightChar] = 1);

		maxRepeatLetterCount = Math.max(
			maxRepeatLetterCount,
			frequencyMap[rightChar]
		);

		if (end - start + 1 - maxRepeatLetterCount > k) {
			const leftChar = str[start];
			frequencyMap[leftChar] -= 1;
			start += 1;
		}

		maxLength = Math.max(maxLength, end - start + 1);
	}
	return maxLength;
}

console.log(characterReplacement("aabccbb", 2));
