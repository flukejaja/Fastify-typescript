import fastify from "fastify";
import { dbPrame, dbTop, dbFluke } from "./server";
import { user1 } from "./Mockup";

const app = fastify();

// const testPrame = async () => {
//   const db = await dbPrame.find({}).toArray();
//   console.log("dbPrame Connection = " + JSON.stringify(db));
// };
// const testTop = async () => {
//   const db = await dbTop.find({}).toArray();
//   console.log("dbTop Connection = " + JSON.stringify(db));
// };

// const testFluke = async () => {
//   const db = await dbFluke.find({}).toArray();
//   console.log("dbFluke Connection = " + JSON.stringify(db));
// };
// console.log(testPrame());
// console.log(testFluke());
// console.log(testTop());

// app.post("/inSertitem", async (request, reply) => {

//   console.log()
//   // const db = await dbPrame.insertOne(mockupPrame);
// });

app.get("/getdb", async (request, reply) => {
  console.log("Connecting to getdb");
  reply.send("TestGetDB" + JSON.stringify(user1));
});
app.listen({ port: 5000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
