import { Board } from '../Model/board.js';
import { gameBoard, selector } from './const.js';

const ClearBoard = () => {
    gameBoard.innerHTML = '';
};

export const onDimensionChange = () => {
    const size = parseInt(selector.value);

    gameBoard.style.setProperty('--grid-size', size);

    ClearBoard();

    const board = new Board(size);

    board.cells.map((cell) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        cellElement.textContent = cell.text;
        gameBoard.appendChild(cellElement);
    });
};
