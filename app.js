let gridSize = 24;

for (let i = 0; i < gridSize * gridSize; i++) {
	let square = document.createElement('div');
	square.className = 'square';
	let width = (1 / gridSize) * 650;
	width = width + 'px';
	square.style.width = width;

	mouseIsDown = false;
	square.addEventListener('mousedown', function () {
		mouseIsDown = true;
	});
	square.addEventListener('mouseup', function () {
		mouseIsDown = false;
	});

	square.addEventListener('mouseenter', function () {
		if (mouseIsDown) {
			this.style.backgroundColor = '#000';
		}
	});
	square.addEventListener('click', function () {
        this.style.backgroundColor = '#000';
	});

	document.querySelector('.drawing-box').appendChild(square);
}
