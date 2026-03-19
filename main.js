const selector = document.getElementById('dimension-input');
const gameBoard = document.getElementById('game-board');

const onDimensionChange = () => {
    const size = parseInt(selector.value);

    gameBoard.style.setProperty('--grid-size', size);

    gameBoard.innerHTML = '';

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.textContent = i + 1;
        cell.classList.add('cell');
        gameBoard.appendChild(cell);
    }
};

const onPageLoad = () => {
    onDimensionChange();
};

document.addEventListener('DOMContentLoaded', onPageLoad);

selector.addEventListener('change', onDimensionChange);
