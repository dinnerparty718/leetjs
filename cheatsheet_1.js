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

//! extend arr

const a = [1, 2, 3]; const b = [4, 5, 6]
a.push(...b)

let unsorted = [12, 3, 4, 10]

//! sort ascending
//! negative if a < b 
unsorted.sort((a, b) => a - b)


unsorted = ['b', 'c', 'a']

unsorted.sort((a, b) => b.localeCompare(a))


