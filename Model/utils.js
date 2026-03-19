export const shuffleArray = (array) => {
    const shuffled = [...array];

    Array.from(
        { length: shuffled.length - 1 },
        (_, i) => shuffled.length - 1 - i,
    ).forEach((i) => {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[randomIndex]] = [
            shuffled[randomIndex],
            shuffled[i],
        ];
    });

    return shuffled;
};

export const createShuffledBoard = (dimension) => {
    const totalCells = dimension * dimension;
    const arr = [
        ...Array.from({ length: totalCells - 1 }, (_, i) => (i + 1).toString()),
        '',
    ];

    return shuffleArray(arr);
};

export const necessaryReversals = (board) => {
    let inversions = 0;
    Array.from({ length: board.length - 1 }, (_, i) => i).forEach((i) => {
        Array.from(
            { length: board.length - 1 - i },
            (_, j) => i + 1 + j,
        ).forEach((j) => {
            if (board[i] && board[j] && board[i] > board[j]) {
                inversions++;
            }
        });
    });
    return inversions;
};

export const isBoardSolvable = (board) => {
    const inversions = necessaryReversals(board);
    const dimension = Math.sqrt(board.length);

    if (dimension % 2 === 1) {
        return inversions % 2 === 0;
    }

    const emptyCell = board.indexOf('');
    const emptyCellRow = Math.floor(emptyCell / dimension) + 1;

    return (inversions + emptyCellRow) % 2 === 0;
};
