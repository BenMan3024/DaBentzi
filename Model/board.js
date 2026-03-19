import { Cell } from './cell.js';
import { createShuffledBoard, isBoardSolvable } from './utils.js';

const initializeCells = (dimension) => {
    let shuffledNumbers;
    do {
        shuffledNumbers = createShuffledBoard(dimension);
    } while (!isBoardSolvable(shuffledNumbers));

    return shuffledNumbers.map((text) => new Cell(text));
};

export class Board {
    constructor(dimension) {
        this.dimension = dimension;
        this.cells = initializeCells(dimension);
    }

    getEmptyCellIndex() {
        return this.cells.findIndex((cell) => cell.text === '');
    }

    isAdjacent(index1, index2) {
        const row1 = Math.floor(index1 / this.dimension);
        const col1 = index1 % this.dimension;
        const row2 = Math.floor(index2 / this.dimension);
        const col2 = index2 % this.dimension;

        const rowDiff = Math.abs(row1 - row2);
        const colDiff = Math.abs(col1 - col2);

        return (
            (rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1)
        );
    }

    swapCells(index1, index2) {
        [this.cells[index1], this.cells[index2]] = [
            this.cells[index2],
            this.cells[index1],
        ];
    }

    canMove(index) {
        const emptyIndex = this.getEmptyCellIndex();
        return this.isAdjacent(index, emptyIndex);
    }

    moveCell(index) {
        if (this.canMove(index)) {
            const emptyIndex = this.getEmptyCellIndex();
            this.swapCells(index, emptyIndex);
            return true;
        }
        return false;
    }
}
