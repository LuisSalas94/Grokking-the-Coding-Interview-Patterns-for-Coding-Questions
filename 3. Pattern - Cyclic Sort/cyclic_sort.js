function cyclic_sort(nums) {
	let i = 0;
	while (i < nums.length) {
		const j = nums[i] - 1;
		if (nums[i] !== nums[j]) {
			[nums[i], nums[j]] = [nums[j], nums[i]];
		} else {
			i += 1;
		}
	}
	return nums;
}

console.log(cyclic_sort([5, 1, 1, 2, 0, 0]));
