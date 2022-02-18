/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  const n = 9

  const generateSet = (n) => {
    const s = {}
    for (let i = 0; i < n; i++) {
      s[i] = new Set()
    }
    return s
  }

  const box_id = (i, j) => Math.floor(i / 3) * 3 + Math.floor(j / 3)


  const col_set = generateSet(n)
  const row_set = generateSet(n)
  const box_set = generateSet(n)

  // ! prepoluate existing number
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let val = board[i][j]
      if (val === '.') {
        continue
      }
      val = Number(val)
      row_set[i].add(val)
      col_set[j].add(val)
      box_set[box_id(i, j)].add(val)

    }
  }

  // for (let [key, val] of Object.entries(box_set)) {
  //   console.log(key, val)
  // }

  const choices = [1, 2, 3, 4, 5, 6, 7, 8, 9]


  const isValidMove = (i, j, choice) => {
    if (row_set[i].has(choice) || col_set[j].has(choice) || box_set[box_id(i, j)].has(choice)) {
      return false
    }
    return true
  }


  const backtrack = (i, j) => {
    // base case

    if (i === n - 1 && j === 9) {

      return true
    }

    if (j === 9) {
      i += 1
      j = 0
    }


    if (board[i][j] !== '.') {
      return backtrack(i, j + 1)
    }

    for (const choice of choices) {
      if (!isValidMove(i, j, choice)) {
        continue
      }

      board[i][j] = choice.toString()
      row_set[i].add(choice)
      col_set[j].add(choice)
      box_set[box_id(i, j)].add(choice)

      if (backtrack(i, j + 1)) {
        return true
      }


      board[i][j] = '.'
      row_set[i].delete(choice)
      col_set[j].delete(choice)
      box_set[box_id(i, j)].delete(choice)

    }


    return false

  }


  backtrack(0, 0)

};



let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]


solveSudoku(board)


for (const row of board) {
  console.log(row)
}