function findAnagrams(s, p) {
	let start = 0;
	let matched = 0;
	let charFrecuency = {};

	for (const letter of p) {
		charFrecuency[letter]
			? (charFrecuency[letter] += 1)
			: (charFrecuency[letter] = 1);
	}

	const resultIndices = [];

	//our goal is to match all the characters from the "charFrecuency" with the current window
	//try to extend the range [start, end]
	for (let end = 0; end < s.length; end++) {
		const rightChar = s[end];
		if (rightChar in charFrecuency) {
			//decrement the frecuency of matched character
			charFrecuency[rightChar] -= 1;
			if (charFrecuency[rightChar] === 0) {
				matched += 1;
			}
		}

		//have we found an anagram?
		if (matched === Object.keys(charFrecuency).length) {
			resultIndices.push(start);
		}

		//shrink the sliding window
		if (end >= p.length - 1) {
			const leftChar = s[start];
			start += 1;
			if (leftChar in charFrecuency) {
				if (charFrecuency[leftChar] === 0) {
					//before putting the character back, decrement the matched count
					matched -= 1;
				}
				//put the character back
				charFrecuency[leftChar] += 1;
			}
		}
	}
	return resultIndices;
}
