


//! generate 2d array  n * n

const matrix = new Array(5).fill(0).map(() => new Array(4).fill(0));

console.log(matrix)


//! js has no tuple , use [] instead

//! four directions

const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]


for (const [i, j] of dirs) {
  console.log(i, j)
}