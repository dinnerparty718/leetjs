/*

state: "pending"  result: undefined

resolve(value)  state: "fulfilled" result: value
reject(error)  state: "rejected" result: error

*/


const myP = new Promise((resovle, reject) => {
  setTimeout(() => {
    resovle([1, 2, 3, 4])
  }, 3000)
})





const wait = (ms) => new Promise((resovle, reject) => {
  if (ms <= 0) {
    reject(new Error('Can not wait <= 0 seconds'))
  }

  setTimeout(() => {
    resovle()
  }, ms)
})


const ms = 400

wait(ms).then(() => {
  console.log(`we have wait ${ms} seconds`)
}).catch(error => {
  console.log(`there was an error: ${error.message}`)
})

const divide = (a, b) => new Promise((resovle, reject) => {
  if (b === 0) {
    reject(new Error('you can not divide by 0'))
    return
  }

  resovle(a / b)
})


divide(1, 0).then(result => {
  console.log(`division success ${result}`)
}).catch(err => {
  console.log('there was an error with the division')
  console.log(err.message)
})
