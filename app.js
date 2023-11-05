let gridSize = 16;

let drawingBox = document.querySelector('.drawing-box');
drawingBox.setAttribute(
	'style',
	`grid-template-columns: repeat(${gridSize}, 1fr`
);

let isDrawing = false;
let isErasing = false;

function createSketchpad(gridSize) {
	for (let i = 0; i < gridSize * gridSize; i++) {
		let cell = document.createElement('div');
		cell.className = 'cell';

		cell.addEventListener('mousedown', () => {
			isDrawing = true;
			cell.style.background = 'black';
			if (isErasing && cell.style.background != 'white') {
				cell.style.background = white;
			}
		});

		cell.addEventListener('mousemove', () => {
			if (isDrawing) {
				cell.style.background = 'black';
			} else if(isErasing && cell.style.background != 'white') {
				cell.style.background = 'white'
			}
		});
		cell.addEventListener('mouseup', () => {
			isDrawing = false;
		});

		drawingBox.appendChild(cell);
	}
}
createSketchpad(gridSize);

//? Can I abstract the code in here?
const rangeSlider = document.getElementById('range');
rangeSlider.addEventListener('input', (e) => {
	gridSize = rangeSlider.value;
	drawingBox.remove();
	drawingBox = document.createElement('div');
	drawingBox.classList = 'drawing-box';
	drawingBox.setAttribute(
		'style',
		`grid-template-columns: repeat(${gridSize}, 1fr`
	);
	document.querySelector('.sketchpad').appendChild(drawingBox);
	createSketchpad(gridSize);
});

const clearButton = document.getElementById('clear');
clearButton.addEventListener('mousedown', () => {
	const cellsAll = document.querySelectorAll('.cell');
	cellsAll.forEach((cell) => {
		if (cell.style.background != 'white') {
			cell.style.background = 'white';
		}
	});
});

const toggleButton = document.getElementById('toggle');
toggleButton.addEventListener('click', () => {
	const cellsAll = document.querySelectorAll('.cell');
	if (cellsAll[0].style.outline == 'none') {
		cellsAll.forEach((cell) => {
			cell.style.outline = '1px solid black';
		});
	} else {
		cellsAll.forEach((cell) => {
			cell.style.outline = 'none';
		});
	}
});

const toggleEraser = document.querySelector('.switch');
toggleEraser.addEventListener('input', () => {
	if (isErasing) {
		isErasing = false;
	}
	if (!isErasing) {
		isErasing = true;
	}
})

// TODO: Implement buttons for: Colour mode (rainbow, solid), eraser
// TODO: Colour picker with potential random colour chooser (slot machine psychology)
// TODO: Hover effect when you are not drawing but the mouse is on the sketchpad
// TODO: Secret button or easter egg button with something goofy like what the dog doing (please oh god no)
