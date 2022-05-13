//https://leetcode.com/problems/first-missing-positive/
var firstMissingPositive = function (nums) {
	let i = 0;
	let n = nums.length;
	while (i < n) {
		let j = nums[i] - 1;
		if (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[j]) {
			[nums[i], nums[j]] = [nums[j], nums[i]];
		} else {
			i += 1;
		}
	}

	for (let i = 0; i < n; i++) {
		if (nums[i] !== i + 1) {
			return i + 1;
		}
	}

	return nums.length + 1;
};
