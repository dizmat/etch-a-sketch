let gridSize = 16;
let drawingBox = document.querySelector('.drawing-box');
drawingBox.setAttribute(
	'style',
	`grid-template-columns: repeat(${gridSize}, 1fr`
);

let isDrawing = false;

for (let i = 0; i < gridSize * gridSize; i++) {
	let cell = document.createElement('div');
	cell.className = 'cell';

	cell.addEventListener('mousedown', () => {
		isDrawing = true;
		cell.style.background = 'black';
		cell.style.outline = '1px solid white';
	});

	cell.addEventListener('mousemove', () => {
		if (isDrawing) {
			cell.style.background = 'black';
			cell.style.outline = '1px solid white';
		}
	});

	cell.addEventListener('mouseup', () => {
		isDrawing = false;
	});

	drawingBox.appendChild(cell);
}

// TODO: Fix first clicked square not working.
// TODO: Implement buttons for: Clear grid, Toggle grid, Colour mode (rainbow, solid), eraser
// TODO: Colour picker with potential random colour chooser (slot machine psychology)
// TODO: Grid size slider
// TODO: Hover effect when you are not drawing but the mouse is on the sketchpad
// TODO: Secret button or easter egg button with something goofy like what the dog doing (please oh god no)
