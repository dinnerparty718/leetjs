// block scope variable




// spread

// destructure


const human = {
  first_name: 'yy',
  age: '1'
}

const { first_name } = human

console.log(first_name)

const arr = [1, 2, 3, 4]

const [a, b, ...args] = arr

console.log(a, b, args)

Object.assign()