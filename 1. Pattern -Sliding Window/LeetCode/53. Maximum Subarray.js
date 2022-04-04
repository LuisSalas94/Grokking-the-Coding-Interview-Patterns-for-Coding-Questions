/* https://leetcode.com/problems/maximum-subarray/ */
function maxSubArray(arr) {
	let maxCurrent = arr[0];
	let maxGlobal = arr[0];

	for (let i = 1; i < arr.length; i++) {
		maxCurrent = Math.max(arr[i], maxCurrent + arr[i]);
		if (maxCurrent > maxGlobal) {
			maxGlobal = maxCurrent;
		}
	}
	return maxGlobal;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
