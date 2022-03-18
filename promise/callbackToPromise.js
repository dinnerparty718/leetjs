/**
 * 
 * Promises are used to handle asynchronous operations in javascript.
 */


wait = (ms) => {
  return new Promise((resolve, reject) => {
    if (ms <= 0) {
      reject(new Error('Can not wait <=0 seconds'))
    }
    setTimeout(() => {
      resolve()
    }, ms)
  })
}





wait(1000).then(() => {
  console.log('we have waited 1 second')
}).catch(error => {
  console.log(`there was an error: ${error.message}`)
})