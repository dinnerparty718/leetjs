/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const res = []
  const m = matrix.length
  const n = matrix[0].length



  let left = 0
  let right = n - 1



  let top = 0
  let bottom = m - 1


  while (left <= right && top <= bottom) {

    // top left -> right
    for (let col = left; col <= right; col++) {
      res.push(matrix[top][col])
    }
    top += 1


    // right top -> bottom
    for (let row = top; row <= bottom; row++) {
      res.push(matrix[row][right])
    }

    right -= 1

    // bottom right -> left

    if (top <= bottom) {
      for (let col = right; col >= left; col--) {
        res.push(matrix[bottom][col])
      }
      bottom -= 1
    }



    // left bottom -> top

    if (left <= right) {
      for (let row = bottom; row >= top; row--) {
        res.push(matrix[row][left])
      }
      left += 1
    }

  }

  return res
};






let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]

const res = spiralOrder(matrix)

console.log(res)
