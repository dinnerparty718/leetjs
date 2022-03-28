const { Kafka } = require('kafkajs')

run()


async function run() {
  try {
    const kafka = new Kafka({
      'clientId': 'myapp',
      'brokers': ['localhost:9092']
    })

    const admin = kafka.admin()
    console.log('connecting.....')
    await admin.connect()
    console.log('connected')

    // A-M, N-Z
    await admin.createTopics({
      'topics': [{
        'topic': 'Users',
        'numPartitions': 2
      }]
    })
    console.log('Created sucessfully')
    await admin.disconnect()


  } catch (ex) {
    console.error(`someting bad happend ${ex}`)
  }
  finally {
    process.exit(0)
  }
}