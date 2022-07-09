import fastify from 'fastify'
import { MongoClient } from 'mongodb'
const url = "mongodb://127.0.0.1:27017"
const Client = new MongoClient(url)

const app = fastify()

app.get('/ping', async (request , reply) => {
  return 'pong\n'
})

app.listen({ port: 5000 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})