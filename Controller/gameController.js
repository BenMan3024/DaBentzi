import { Board } from '../Model/board.js';
import {
    renderBoard,
    bindDimensionChange,
    getSelectedDimension,
} from '../View/index.js';

export class GameController {
    constructor() {
        this.board = null;
        this.gameOver = false;
        bindDimensionChange((dimension) => this.setDimension(dimension));
    }

    init() {
        const initialDimension = getSelectedDimension();
        this.setDimension(initialDimension);
    }

    setDimension(dimension) {
        this.board = new Board(dimension);
        this.gameOver = false;
        this.render();
    }

    onCellClick(index) {
        if (this.gameOver) return;
        if (this.board.moveCell(index)) {
            this.render();
            if (this.board.isSolved()) {
                this.gameOver = true;
                setTimeout(
                    () => alert('Congratulations! You won the game! 🎉'),
                    100,
                );
            }
        }
    }

    render() {
        renderBoard(
            this.board.cells,
            this.board.dimension,
            (index) => this.onCellClick(index),
            this.gameOver,
        );
    }
}
