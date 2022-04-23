/* https://leetcode.com/problems/3sum/ */
/* Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: [] */
function twoSum(j, target, nums) {
	let k = nums.length - 1;
	let result = [];

	while (j < k) {
		let lefVal = nums[j];
		let rightVal = nums[k];

		if (lefVal + rightVal > target) {
			k--;
		} else if (lefVal + rightVal < target) {
			j++;
		} else {
			result.push([target * -1, lefVal, rightVal]);
			while (j < k && nums[j] === nums[j + 1]) j++;
			while (j < k && nums[k] === nums[k - 1]) k--;
			j++;
			k--;
		}
	}
	return result;
}

function threeSum(nums) {
	nums.sort((a, b) => a - b);
	const result = [];

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === nums[i - 1]) continue;
		let target = nums[i] * -1;
		let subResult = twoSum(i + 1, target, nums);
		result.push(...subResult);
	}

	return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
