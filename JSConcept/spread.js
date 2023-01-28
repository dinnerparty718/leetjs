const a = [1, 2, 3]
const b = [4, 5, 6]

// merge array
console.log([...a, ...b])

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// [ [1, 2, 3],  [4, 5, 6] ]
const attemptToMerge = [array1, array2];

// clone array

const c = [...a]

// string -> Array ['s', 't', 'r', 'i', 'n', 'g']
const str = 'string'
const d = [...str]
console.log(d)


// set to array
const e = [...new Set([1, 2, 3])]

console.log(e)

// Node List to Array

// const nodeList = document.querySelectorAll('p');
// nodeList;
// [p, p, p]

// min max
const array = [1, 2, 3, 4, 5];
const minimum = Math.min(...array);
const maximum = Math.max(...array);

console.log(minimum, maximum)