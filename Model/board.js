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

    swapCells(index1, index2) {
        [this.cells[index1], this.cells[index2]] = [
            this.cells[index2],
            this.cells[index1],
        ];
    }

    canMove(index) {
        const emptyIndex = this.getEmptyCellIndex();

        const topNeighbor = emptyIndex - this.dimension;
        const bottomNeighbor = emptyIndex + this.dimension;
        const leftNeighbor = emptyIndex - 1;
        const rightNeighbor = emptyIndex + 1;

        return (
            index === topNeighbor ||
            index === bottomNeighbor ||
            index === leftNeighbor ||
            index === rightNeighbor
        );
    }

    moveCell(index) {
        if (this.canMove(index)) {
            const emptyIndex = this.getEmptyCellIndex();
            this.swapCells(index, emptyIndex);
            return true;
        }
        return false;
    }

    isSolved() {
        const totalCells = this.dimension * this.dimension;
        for (let i = 0; i < totalCells - 1; i++) {
            if (this.cells[i].text !== (i + 1).toString()) {
                return false;
            }
        }
        return this.cells[totalCells - 1].text === '';
    }
}
