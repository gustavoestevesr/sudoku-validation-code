// Valid Sudoku:
const validSudoku: string[][] = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

// Invalid Sudoku (repetitions in rows, columns, or subgrids):
const invalidSudoku: string[][] = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", "5", ".", "1", "9", "5", ".", ".", "."], // Duplication of number '5' in row 2.
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

// Winning Sudoku (complete and valid)
const winningSudoku: string[][] = [
    ["5", "3", "4", "6", "7", "8", "9", "1", "2"],
    ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
    ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
    ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
    ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
    ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
    ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
    ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
    ["3", "4", "5", "2", "8", "6", "1", "7", "9"],
];

function checkSudoku(matrix: string[][]): boolean {
    let tempRowsArr = new Set<string>();
    let tempColsArr = new Set<string>();
    let tempBoxesArr = new Map<string, string>();

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            // Ignore empty slots in row or col
            if (matrix[i][j] === "." || matrix[j][i] === ".") continue;

            // Verify cols
            if (tempColsArr.has(matrix[j][i])) return false;
            tempColsArr.add(matrix[j][i]);

            // Verify rows
            if (tempRowsArr.has(matrix[i][j])) return false;
            tempRowsArr.add(matrix[i][j]);

            // Verify boxes 3x3
            const boxKey = Math.floor(i / 3) + ',' + Math.floor(j / 3);
            const boxValues = tempBoxesArr.get(boxKey) || "";
            if (boxValues.includes(matrix[i][j])) return false;
            tempBoxesArr.set(boxKey, boxValues + matrix[i][j]);
        }
        // Reset temp arrays
        tempRowsArr.clear();
        tempColsArr.clear();
    }

    return true;
}

console.log(checkSudoku(validSudoku)); // true
console.log(checkSudoku(invalidSudoku)); // false
console.log(checkSudoku(winningSudoku)); // true
