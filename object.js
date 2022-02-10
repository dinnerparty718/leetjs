const person = {
  'name': 'yingying',
  'gender': 'female'
}


// loop over keys

console.log(Object.keys(person))



// loop over values

for (const key of Object.keys(person)) {
  console.log(key)
}


for (const [key, value] of Object.entries(person)) {
  console.log(key, value)
}



for (const key of Object.keys(person)) {
  console.log(person[key])
}
