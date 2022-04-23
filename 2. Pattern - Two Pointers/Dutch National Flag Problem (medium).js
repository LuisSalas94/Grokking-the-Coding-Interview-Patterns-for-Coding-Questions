function dutch_flag_sort(arr) {
	// all elements < low are 0, and all elements > high are 2
	// all elements from >= low < i are 1
	let low = 0,
		high = arr.length - 1,
		i = 0;

	while (i <= high) {
		if (arr[i] === 0) {
			[arr[i], arr[low]] = [arr[low], arr[i]];
			i++;
			low++;
		} else if (arr[i] === 1) {
			i++;
		} else {
			[arr[i], arr[high]] = [arr[high], arr[i]];
			high--;
		}
	}

	return arr;
}
console.log(dutch_flag_sort([1, 0, 2, 1, 0]));
