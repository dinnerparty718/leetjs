

// ```
// Javascript String is immutable


// ```
const str = 'abcdef'


for (const char of str) {
  console.log(char)
}


console.log('a'.charCodeAt(0))


console.log('a' + 'b')


for (let i = 0; i < str.length; i++) {
  console.log(str[i])
}



const abc = String.fromCharCode(65, 66, 67); // returns 'ABC'

console.log(abc)

const b = Array.from(new Set([1, 2, 3]))

console.log(b)


