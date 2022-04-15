function totalFruit(fruits) {
	let start = 0;
	let maxLength = 0;
	let fruitFrecuency = {};

	for (let end = 0; end < fruits.length; end++) {
		const rightFruit = fruits[end];
		fruitFrecuency[rightFruit]
			? (fruitFrecuency[rightFruit] += 1)
			: (fruitFrecuency[rightFruit] = 1);

		while (Object.keys(fruitFrecuency).length > 2) {
			const leftFruit = fruits[start];
			fruitFrecuency[leftFruit] -= 1;
			if (fruitFrecuency[leftFruit] === 0) {
				delete fruitFrecuency[leftFruit];
			}
			start += 1;
		}
		maxLength = Math.max(maxLength, end - start + 1);
	}
	return maxLength;
}
