import { app } from "./Fastify/app";
import { user, mockup, user1, userMock } from "./db/Mockup";
import { register } from "./account/Register";
import { login } from "./account/Login";
import { inputdata } from "./account/Inputdata";
import { verifyMiddleware } from "./src/verifyInterceptor";

app.post("/login", async (request, reply) => {
  const body = request.body as userMock;
  const results = await login(body);
  reply.send(results);
});
app.post("/register", async (request, reply) => {
  const body = request.body as userMock;
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
