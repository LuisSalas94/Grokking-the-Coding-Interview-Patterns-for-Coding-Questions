function remove_duplicates(arr) {
	let p1 = 0;
	for (let p2 = 1; p2 < arr.length; p2++) {
		if (arr[p1] !== arr[p2]) {
			p1++;
			arr[p1] = arr[p2];
		}
	}
	return p1 + 1;
}

console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9]));
