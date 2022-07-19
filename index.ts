import { app } from "./Fastify/app";
import { mockup, userMock , mockupFluck ,Fluck , mockupFortop ,Stock ,mockupStock ,mockupPrame } from "./db/Mockup";
import { register } from "./account/Register";
import { login } from "./account/Login";
import { inputdata } from "./account/Inputdata";
import { verifyMiddleware } from "./src/verifyInterceptor";
import { dashboard } from "./account/Dashboard";
import { insertAttribute } from "./account/inputAttribute";
import { showAttribute } from "./account/showAttribute";
import { insertVariation } from "./account/inputVariations";
import { insertStock } from "./account/inputStock";
import { editStock } from "./account/editStock";
import { ShowVariation } from "./account/ShowVariations";
import { delAttribute } from "./account/delAttribute";
app.register(require("@fastify/cors"));

app.get("/" , (req,reply) =>{
  reply.send("Sever is ready");
})

// Loging - register user
app.post("/login", async (request, reply) => {
  const body = request.body as userMock;
  const results = await login(body);
  reply.send(results);
});
app.post("/register", async (request, reply) => {
  const body = request.body as userMock;
  const results = await register(body);
  reply.send(results);
});

// Prame
app.post(
  "/inputuser",
  { preHandler: [verifyMiddleware] },
  async (request, reply) => {
    const body = request.body;
    console.log(body);
    const results = await inputdata(body);
    reply.send(results);
  }
);
app.get(
  "/dashboard",
  { preHandler: [verifyMiddleware] },
  async (request, reply) => {
    const body = request.body as mockupPrame;
    const results = await dashboard(body);
    reply.send(results);
  }
);


// Top Variations
app.post(
  "/inputVariations",
  { preHandler: [verifyMiddleware] },
  async (request, reply) => {
    const body = mockupFortop;
    console.log(body);
    const results = await insertVariation(body);
    reply.send(results);
  }
);
app.post(
  "/inputStock",
  { preHandler: [verifyMiddleware] },
  async (request, reply) => {
    const body = Stock;
    console.log(body);
    const results = await insertStock(body);
    reply.send(results);
  }
);
app.post(
  "/editStock",
  { preHandler: [verifyMiddleware] },
  async (request, reply) => {
    const body = request.body as mockupStock;
    const results = await editStock(body);
    reply.send(results);
  }
);
app.post(
  "/showVariations",
  { preHandler: [verifyMiddleware] },
  async (request, reply) => {
    const body =  request.body as mockupStock;
    const results = await ShowVariation(body);
    console.log(results);
    reply.send(results);
  }
);


// Fluck
app.post(
  "/inputAttribute",
  { preHandler: [verifyMiddleware] },
  async (request, reply) => {
    const body = Fluck;
    const results = await insertAttribute(body);
    reply.send(results);
  }
);
app.post(
  "/showAttribute",
  { preHandler: [verifyMiddleware] },
  async (request, reply) => {
    const body =  request.body as mockupFluck;
    const results = await showAttribute(body);
    console.log(results);
    reply.send(results);
  }
);
app.post("/delAttribute", { preHandler: [verifyMiddleware] }, async (request, reply) => {
    const body = request.body as mockupFluck;
    const results = await delAttribute(body);
    reply.send(results);
});
app.listen({ port: 5000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});

import {pump} from './Fastify/app';
const fs = require('fs')
app.register(require('@fastify/multipart'))

app.post('/uploads',{ preHandler: [verifyMiddleware] },async (req:any, reply:any) => {
  const data = await req.file()
  await pump(data.file, fs.createWriteStream(`uploads/${data.filename}`))
  if(!data){return {message: 'Error uploading file', error: true}}
  console.log(data.filename)
  reply.send('Success! import photos = '+data.filename)
})

app.get('/image' , async (req:any, reply:any) => {
const buffer = fs.readFileSync('./uploads/night-ocean-landscape-full-moon-stars-shine_107791-7397.webp')
reply.type('image/jpg')
reply.send(buffer)
})