const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/stream', (req, res) => {
  res.setHeader('Content-type', 'text/event-stream')
  send(res)
})


app.listen(port, () => {
  console.log(`node is running on port ${port}`)
})


let i = 0

const send = (res) => {
  res.write("data: " + `hello! ${i} \n\n`)


  setTimeout(() => {
    send(res)
  }, 1000);
}




