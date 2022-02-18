const pair = [1, 2]

const [a, b] = pair
console.log(a, b)


const obj = {
  name: 'YY',
  gender: 'F'
}


const new_obj = { ...obj }


for (const [key, value] of Object.entries(obj)) {
  console.log(key, value)
}


const key = 'be'

if (key in obj) {

}

