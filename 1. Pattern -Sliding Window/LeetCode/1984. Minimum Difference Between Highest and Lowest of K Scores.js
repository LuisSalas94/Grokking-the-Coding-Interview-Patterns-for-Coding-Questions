function minimumDifference(nums, k) {
	nums.sort((a, b) => b - a);
	let min = Infinity;
	for (let i = 0; i <= nums.length - k; i++) {
		min = Math.min(min, nums[i] - nums[i + k - 1]);
	}
	return min;
}

console.log(minimumDifference([9, 4, 1, 7], 2));
