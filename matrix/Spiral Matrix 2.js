/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let left = 0
  let right = n - 1
  let top = 0
  let bottom = n - 1

  let val = 1


  const res = new Array(n).fill(0).map(() => new Array(n).fill(0))


  while (left <= right && top <= bottom) {
    for (let col = left; col <= right; col++) {
      res[top][col] = val
      val += 1
    }

    top += 1

    // filling right top down

    for (let row = top; row <= bottom; row++) {
      res[row][right] = val
      val += 1
    }

    right -= 1


    // filling bottom right -> left
    if (top <= bottom) {
      for (let col = right; col >= left; col--) {
        res[bottom][col] = val
        val += 1
      }

      bottom -= 1


    }

    // filling left  bottom -> top
    if (left <= right) {
      for (let row = bottom; row >= top; row--) {
        res[row][left] = val
        val += 1
      }

      left += 1
    }

  }

  return res
};



const n = 3


const res = generateMatrix(n)


// console.log(res)

for (const row of res) {
  console.log(row)
}

