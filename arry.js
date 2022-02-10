const a = [1, 2, 3, 4]
const b = [5, 6, 7, 8]


//! concat new array
const c = [...a, ...b]

const d = a.concat(b)



//! similar to enumerate

for (const [i, value] of c.entries()) {
  console.log('%d: %s', i, value);
}



console.log('---')

//! array size
const n = a.length

console.log(n)




const arr = []


arr.push(1)
arr.push(2)
arr.push(3)
arr.push(4, 5, 6,)
console.log(arr)




//! array modification
// remove the last element from the array
arr.pop()

console.log(arr)


// remove the first element 
arr.shift()
console.log(arr)




//! add to the beginning
// appendleft

const my_rr = ['a', 'b', 'c']

my_rr.unshift('z')



console.log(my_rr)

//! sort, ascending

const abc = [1, 5, 4, 3]

abc.sort()

//! sort, descending

abc.sort((a, b) => b - a)



// abc.sort((a, b) => b - a)
abc.reverse()
console.log(abc)


//!  .some() .every()

const my_array2 = [4, 5, 2, 7, 11]

console.log(my_array2.every(item => item > 0))
console.log(my_array2.some(item => item < 0))



//! check item in array

console.log(my_array2.includes(11))

