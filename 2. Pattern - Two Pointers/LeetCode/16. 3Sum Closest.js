var threeSumClosest = function (arr, targetSum) {
	arr.sort((a, b) => a - b);
	let smallest_difference = Infinity;

	for (let i = 0; i < arr.length - 2; i++) {
		let left = i + 1;
		let right = arr.length - 1;
		while (left < right) {
			const target_diff = targetSum - arr[i] - arr[left] - arr[right];
			//we've found a triplet with an exact sum
			if (target_diff === 0) {
				//return sum of all the numbers
				return targetSum;
			}

			// the second part of the following 'if' is to handle the smallest sum when we have more than one solution
			if (
				Math.abs(target_diff) < Math.abs(smallest_difference) ||
				(Math.abs(target_diff) === Math.abs(smallest_difference) &&
					target_diff > smallest_difference)
			) {
				//save the closest and the biggest difference
				smallest_difference = target_diff;
			}

			if (target_diff > 0) {
				//we need a triplet with a bigger sum
				left += 1;
			} else {
				right -= 1;
			}
		}
	}
	return targetSum - smallest_difference;
};
