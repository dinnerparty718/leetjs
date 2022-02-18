//! array
const arry = [1, 2, 3, 4, 5]
const size = arry.length

//! operation on the right
arry.push(6); arry.pop()

//! operation on the left
arry.shift(); arry.unshift(1)

//! 2D
const twoD = new Array(9).fill(0).map(() => new Array(9).fill(0))

//! 4 direction right, down, left up
const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]

//!loop


for (const [i, val] of arry.entries()) {
  console.log(i, val)
}


