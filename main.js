const color = (color) => {
	const h1 = document.createElement('h1');
	h1.innerHTML = '----';
	h1.className = color;
	document.getElementById('chess').appendChild(h1);
}

const br = () => {
	const br = document.createElement('br');
	document.getElementById('chess').appendChild(br);
}

const chess = (x, y) => {
	document.getElementById('chess').innerHTML = '';

	x /= 2;

	for (let i = 0; i < y; i++) {
		if (i % 2 == 0) {
			first = 'red';
			second = 'blue';
		} else {
			first = 'blue';
			second = 'red';
		}
		for (let i = 0; i < x; i++) {
			color(first);
			color(second);
		}
		br();
	}
}
chess(8, 8)
document.getElementById('submit').onclick = () => {
	const inputX = document.getElementById('x').value;
	const inputY = document.getElementById('y').value;
	chess(inputX, inputY)
};