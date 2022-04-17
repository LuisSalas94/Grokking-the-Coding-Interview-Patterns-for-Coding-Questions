function checkInclusion(s1, s2) {
	let start = 0;
	let matched = 0;
	let charFrecuency = {};

	for (let i = 0; i < s2.length; i++) {
		const chr = s2[i];
		charFrecuency[chr] ? (charFrecuency[chr] += 1) : (charFrecuency[chr] = 1);
	}

	// Our goal is to match all the characters from the 'charFrequency' with the current window
	// try to extend the range [windowStart, windowEnd]
	for (let end = 0; end < s1.length; end++) {
		const rigthChar = s1[end];
		if (rigthChar in charFrecuency) {
			//Decrement the frecuency of matched character
			charFrecuency[rigthChar] -= 1;
			if (charFrecuency[rigthChar] === 0) {
				matched += 1;
			}
		}

		if (matched === Object.keys(charFrecuency).length) {
			return true;
		}
		//Shrink the sliding window
		if (end >= s2.length - 1) {
			let leftChar = s1[start];
			start += 1;
			if (leftChar in charFrecuency) {
				if (charFrecuency[leftChar] === 0) {
					matched -= 1;
				}
				charFrecuency[leftChar] += 1;
			}
		}
	}
	return false;
}

console.log(checkInclusion("ab", "eidbaooo"));
