const a = [1, 2, 3, 4]


for (const i of a) {
  console.log(i)
  //! error here, cant' change constant value
  // i = 5
}




// console.log(i)


for (let i of a) {
  console.log(i)

  i = 5
}

console.log('-----')




// good old fashion looping

for (let i = 0; i < a.length; i++) {
  console.log(a[i])
}


