# Valid Sudoku Algorithm - LeetCode Solution

## Problem
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

1. Each row must contain the digits 1-9 without repetition.
2. Each column must contain the digits 1-9 without repetition.
3. Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

### Note:
- A partially filled Sudoku board could be valid but is not necessarily solvable.
- Only the filled cells need to be validated according to the mentioned rules.

### Constraints:
- `board.length == 9`
- `board[i].length == 9`
- `board[i][j]` is a digit `1-9` or `'.'`

---

## Solution

- The algorithm has a worst-case time complexity of **O(n²)**.
- The logic involves iterating through all the **columns**, **rows**, and **3x3 grid boxes** to check for any repetitions while ignoring empty slots.

---

## Observations

1. **Handling Rows and Columns**:
   - Iterating through all the rows and columns was straightforward.
   - Used two loops to traverse the matrix and a `Set` structure to store items and efficiently detect repetitions.

2. **Handling 3x3 Boxes**:
   - Searching through all 9 of the 3x3 boxes on the board was more complex.
   - Used column and row indices with integer division by 3 to determine which 3x3 box an item belongs to.
   - Grouped items in each box using a `HashMap` structure. Below is an example representation:

```text
'0,0' => '534672198',  // First box (top-left)
'0,1' => '678195342',
'0,2' => '912348567',
'1,0' => '859426713',
'1,1' => '761853924',  // Middle box
'1,2' => '423791856',
'2,0' => '961287345',
'2,1' => '537419286',
'2,2' => '284635179'   // Last box (bottom-right)
```

---

## Implementation

This algorithm ensures that all rules of a valid Sudoku board are met by systematically validating rows, columns, and boxes. The use of data structures like `Set` and `HashMap` ensures efficient detection of duplicates.

---

Feel free to contribute or suggest improvements to this solution!
