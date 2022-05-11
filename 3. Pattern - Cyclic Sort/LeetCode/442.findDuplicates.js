//https://leetcode.com/problems/find-all-duplicates-in-an-array/
var findDuplicates = function (nums) {
	let i = 0;
	while (i < nums.length) {
		j = nums[i] - 1;
		if (nums[i] != nums[j]) {
			[nums[i], nums[j]] = [nums[j], nums[i]];
		} else {
			i += 1;
		}
	}

	let duplicateNumbes = [];
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== i + 1) {
			duplicateNumbes.push(nums[i]);
		}
	}

	return duplicateNumbes;
};
