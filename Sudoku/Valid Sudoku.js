/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const n = 9

  const generate_set = (n) => {
    const s = {}
    for (let i = 0; i < n; i++) {
      s[i] = new Set()
    }

    return s
  }

  const row_set = generate_set(n)
  const col_set = generate_set(n)
  const box_set = generate_set(n)


  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const val = board[i][j]

      if (val === '.') {
        continue
      }

      const box_idx = Math.floor(i / 3) * 3 + Math.floor(j / 3)


      //! set uset has
      if (row_set[i].has(val) || col_set[j].has(val) || box_set[box_idx].has(val)) {
        return false
      }

      row_set[i].add(val)
      col_set[j].add(val)
      box_set[box_idx].add(val)
    }
  }




  return true
};


let board =
  [["5", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]


board =
  [["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]]


const res = isValidSudoku(board)


console.log(res)