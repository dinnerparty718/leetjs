// https://www.youtube.com/watch?v=Y-aWVUAul9w

const mysql = require('mysql')

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'chatroom'
})

conn.connect((err) => {
  if (err) {
    console.log(err)
    console.log(`there was an error :()`)
    return
  }

  console.log('Connection successful')
  conn.end()
})