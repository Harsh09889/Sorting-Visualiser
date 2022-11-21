let array = [];
const arr = [25, 20, 15, 17, 18, 23, 2];

const swap = (i, j) => {
	array[i].style.left = `${j * 5 + 5}rem`;
	array[j].style.left = `${i * 5 + 5}rem`;

	let t = array[i];
	array[i] = array[j];
	array[j] = t;

	let tem = arr[i];
	arr[i] = arr[j];
	arr[j] = tem;

	console.log('swap called');
};

for (let i = 0; i < arr.length; i++) {
	let bar = document.querySelector(`.flex > div:nth-child(${i + 1})`);
	bar.innerHTML = arr[i];
	array.push(bar);
	bar.style.left = `${i * 5 + 5}rem`;
	bar.style.height = `${arr[i]}rem`;
}

const wait = (delay, color, ...args) =>
	new Promise((resolve) => setTimeout(resolve, delay)).then(() => {
		console.log(args);
		args &&
			args.forEach((e) => {
				if (e) e.style.backgroundColor = color;
			});
	});

async function partition(low, high) {
	// console.log('partition');
	let pivot = arr[high];
	array[high].style.backgroundColor = 'purple';

	let i = low - 1;
	// if (array[i]) array[i].style.backgroundColor = 'red';

	for (let j = low; j <= high - 1; j++) {
		array[j].style.backgroundColor = 'blue';
		await wait(500);
		if (arr[j] < pivot) {
			array[j].style.backgroundColor = 'red';
			await wait(500);
			i++;
			swap(i, j);
			if (i !== j) await wait(500, 'green', array[j]);
			console.log('swapped', i, j);
		}
	}
	// array[i + 1].style.backgroundColor = 'red';
	swap(i + 1, high);
	await wait(500, 'green', array[i + 1]);

	return i + 1;
}

async function quickSort(low, high) {
	// if (array[high]) array[high].style.backgroundColor = 'red';

	console.log('quickSort', low, high);

	if (low < high) {
		let pi;
		let p = await partition(low, high);
		// await wait(1000, 'teal', array[p]);

		pi = p;
		quickSort(low, pi - 1);
		quickSort(pi + 1, high);
	}
}

// quickSort(0, arr.length - 1);
