import { gameBoard, selector } from './const.js';

export const renderBoard = (cells, dimension, onCellClick) => {
    gameBoard.style.setProperty('--grid-size', dimension);
    gameBoard.innerHTML = '';

    cells.map((cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        cellElement.textContent = cell.text;
        cellElement.addEventListener('click', () => onCellClick(index));
        gameBoard.appendChild(cellElement);
    });
};

export const bindDimensionChange = (handler) => {
    selector.addEventListener('change', (event) => {
        const value = parseInt(event.target.value);
        handler(value);
    });
};

export const getSelectedDimension = () => parseInt(selector.value);
