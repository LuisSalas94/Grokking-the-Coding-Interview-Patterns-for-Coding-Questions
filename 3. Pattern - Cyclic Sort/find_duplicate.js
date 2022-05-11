function find_duplicate(nums) {
	let i = 0;
	while (i < nums.length) {
		if (nums[i] !== i + 1) {
			j = nums[i] - 1;
			if (nums[i] !== nums[j]) {
				[nums[i], nums[j]] = [nums[j], nums[i]];
			} else {
				return nums[i];
			}
		} else {
			i += 1;
		}
	}
	return -1;
}

console.log(find_duplicate([1, 4, 4, 3, 2]));
