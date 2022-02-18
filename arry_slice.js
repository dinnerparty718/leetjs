//                 0        1      2         3        4
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

const copies = animals.slice()

// end is not included, optional
// python copies[0:2]
console.log(copies.slice(0, 2))
console.log(copies.slice(2))


console.log([...copies.slice(0, 2), ...copies.slice(2)])




