

/** 
 * step 1 1 2 2 3 3
 * [[0,1],[1,0],[0,-1],[-1,0]]
 * 
 * 
 * 
 * **/

/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function (rows, cols, rStart, cStart) {

  let i = rStart
  let j = cStart

  const m = rows
  const n = cols

  const res = [[i, j]]

  if (m * n === 1) {
    return res
  }


  for (let k = 1; k < 2 * m * n; k = k + 2) {
    for (let [I, J, K] of [[0, 1, k], [1, 0, k], [0, -1, k + 1], [-1, 0, k + 1]]) {
      for (let step = 0; step < K; step++) {
        i += I
        j += J

        if (i >= 0 && i < m && j >= 0 && j < n) {
          res.push([i, j])
          if (res.length === m * n) {
            return res
          }
        }

      }

    }
  }

  return res
};



const rows = 5
const cols = 6
const rStart = 1
const cStart = 4


const res = spiralMatrixIII(rows, cols, rStart, cStart)


for (const row of res) {
  console.log(row)
}

