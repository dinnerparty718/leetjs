const { Kafka } = require('kafkajs')
const msg = process.argv[2]


run()


async function run() {
  try {
    const kafka = new Kafka({
      'clientId': 'myapp',
      'brokers': ['localhost:9092']
    })

    const producer = kafka.producer()
    console.log('connecting')
    await producer.connect()

    console.log('connected')

    const partition = msg[0] < 'N' ? 0 : 1


    const res = await producer.send({
      'topic': 'Users',
      'messages': [{
        'value': msg,
        'partition': partition
      }]
    })


    console.log(`sent ${JSON.stringify(res)}`)
    await producer.disconnect()


  } catch (ex) {
    console.error(`someting bad happend ${ex}`)
  }
  finally {
    process.exit(0)
  }
}