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
}
