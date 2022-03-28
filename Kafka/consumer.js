const { Kafka } = require('kafkajs')


run()


async function run() {
  try {
    const kafka = new Kafka({
      'clientId': 'myapp',
      'brokers': ['localhost:9092']
    })

    const consumer = kafka.consumer({ 'groupId': 'test' })
    console.log('connecting')
    await consumer.connect()

    console.log('connected')

    consumer.subscribe({
      'topic': 'Users',
      'fromBeginning': true
    })

    await consumer.run({
      'eachMessage': async result => {
        console.log(`Recieved Msg ${result.message.value} on partition ${result.partition}`)
      }
    })







  } catch (ex) {
    console.error(`someting bad happend ${ex}`)
  }

}