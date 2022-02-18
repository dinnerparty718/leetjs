//! set
const mySet = new Set([1, 2, 3, 4, 5])
const size = mySet.size

mySet.add(9); mySet.has(8); mySet.delete(1)

//! union, intersection
const a = new Set([1, 2, 3]); const b = new Set([3, 4, 5])
const a_or_b = new Set([...a, ...b])

const a_and_b = new Set([...a].filter(x => b.has(x)));
