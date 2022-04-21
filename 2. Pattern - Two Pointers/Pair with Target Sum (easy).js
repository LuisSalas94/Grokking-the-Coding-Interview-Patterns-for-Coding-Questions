function pair_with_targetsum(arr, target) {
	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		let currentSum = arr[left] + arr[right];

		if (currentSum === target) {
			return [left, right];
		}

		if (currentSum > target) {
			right--;
		} else {
			left++;
		}
	}
	return [-1, -1];
}

console.log(pair_with_targetsum([1, 2, 3, 4, 6], 6));
