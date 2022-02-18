/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  const m = mat.length
  const n = mat[0].length

  const res = []

  const row_add_col = {}

  for (let i = 0; i < m + n - 1; i++) {
    row_add_col[i] = []
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if ((i + j) % 2 == 0) {
        row_add_col[i + j].unshift(mat[i][j])
      } else {
        row_add_col[i + j].push(mat[i][j])
      }
    }
  }

  for (const values of Object.values(row_add_col)) {
    res.push(...values)
  }

  return res
};


let mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

mat = [[1, 2], [3, 4]]

const res = findDiagonalOrder(mat)


console.log(res)