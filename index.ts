import { app } from "./Fastify/app";
import { user, mockup, user1 } from "./db/Mockup";
import { register } from "./account/Register";
import { login } from "./account/Login";
import { inputdata } from "./account/Inputdata";
import { verifyMiddleware } from "./src/verifyInterceptor";

app.post("/login", async (request, reply) => {
  const body = user1;
  const results = await login(body);
  reply.send(results);
});
app.post("/register", async (request, reply) => {
  const body = user;
  console.log(body);
  const results = await register(body);
  reply.send(results);
});

app.post(
  "/inputdata",
  { preHandler: [verifyMiddleware] },
  async (request, reply) => {
    const body = mockup;
    console.log(body);
    const results = await inputdata(body);
    reply.send(results);
  }
);

app.listen({ port: 5000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
