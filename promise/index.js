// 
// 
// resolve -> then
// reject -> catch

const divide = (a, b) => {

  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject(new Error('you can not divi by 0'))
      return
    }

    resolve(a / b)
  })
}



// console.log(divide(10, 2))

divide(10, 0).then((result) => {
  console.log(`division success ${result}`)
}).catch((err) => {
  console.log('there was an error with the division')
  console.log(err)
})