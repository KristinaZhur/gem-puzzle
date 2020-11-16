const difficulty = 3;
const field = document.createElement ('div');
const nav = document.createElement ('nav');
const button = document.createElement ('div');
const moves = document.createElement ('div')
const timer = document.createElement ('div');
let count = 0;

field.classList.add ('mainField');
nav.classList.add ('navMenu');
button.classList.add ('buttonStart');
timer.classList.add ('time')
moves.classList.add ('movesCount')

document.body.append(nav);
nav.append(button);
document.body.append(field);
nav.append (timer)
nav.append (moves);

button.innerHTML = 'Start game';
timer.innerHTML = '00:00';
moves.innerHTML = 0;

const fieldS = {
	width: 500,
	height: 500
}

field.style.height = `${fieldS.height}px`;
field.style.width = `${fieldS.width}px`
const cellSize = Math.floor(fieldS.width /difficulty);
const emptyCell = {
	value: 0,
	top: 0,
	left: 0
}
const cells = []
	cells.push(emptyCell);

button.addEventListener ('click', shuffle )

function move (index) {
	const cell = cells[index];//берем ячеку оп индексу
	const leftDiffr = Math.abs(emptyCell.left - cell.left);
	const topDiffr = Math.abs(emptyCell.top - cell.top);

	if (leftDiffr+topDiffr >1) {
		return;
	}

		cell.elem.style.left = `${emptyCell.left * cellSize}px`;
		cell.elem.style.top = `${emptyCell.top * cellSize}px`;
	
	const emptyLeft = emptyCell.left;
	const emptyTop = emptyCell.top;
		emptyCell.left = cell.left;
		emptyCell.top = cell.top;
		cell.left = emptyLeft;
		cell.top = emptyTop;

	const isWin = cells.every (cell => {
		return cell.value === cell.top * difficulty + cell.left;
	})
	if (isWin) {
		alert ('win')
	}
}
function shuffle () {
	var numbers =[...Array((difficulty*difficulty)-1).keys()].sort (() => Math.random () - 0.5)

for (let i = 1; i <= ((difficulty*difficulty)-1); i++) {
	const cell = document.createElement ('div');
	const value = numbers[i-1]+1;
		cell.classList.add('squares');
		cell.innerHTML = value;
	const left = i % difficulty;
	const top = (i-left) / difficulty;
	
	cell.style.width = `${cellSize}px`;
	cell.style.height = `${cellSize}px`;

	cells.push ({
		value: value,
		left: left,
		top: top,
		elem: cell
	})

	cell.style.left = `${left * cellSize}px`;
	cell.style.top =  `${top * cellSize}px`;
	
	field.append (cell);

	cell.addEventListener ('click' , ()=> {
		move(i);
		makeCounts ()
	})
	
}
}
function timeCount () {

}

function makeCounts () {
	count ++;
	moves.innerHTML = count;
}	