import { Board } from '../Model/board.js';
import {
    renderBoard,
    bindDimensionChange,
    getSelectedDimension,
} from '../View/index.js';

export class GameController {
    constructor() {
        this.board = null;
        bindDimensionChange((dimension) => this.setDimension(dimension));
    }

    init() {
        const initialDimension = getSelectedDimension();
        this.setDimension(initialDimension);
    }

    setDimension(dimension) {
        this.board = new Board(dimension);
        this.render();
    }

    onCellClick(index) {
        if (this.board.moveCell(index)) {
            this.render();
        }
    }

    render() {
        renderBoard(this.board.cells, this.board.dimension, (index) =>
            this.onCellClick(index),
        );
    }
}
