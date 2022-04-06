function remove_element(arr, key) {
	let next = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== key) {
			arr[next] = arr[i];
			next++;
		}
	}
	return next;
}

console.log(remove_element([3, 2, 3, 6, 3, 10, 9, 3], 3));
