import { app } from "./Fastify/app";
import { userMock } from "./db/Mockup";
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
import { insertUploads } from "./account/inputUploads";
import { updateMockup } from "./account/updateMockup";
import { ShowdbPrame } from "./account/showdbPrame";
app.register(require("@fastify/cors"));

app.get("/", (req, reply) => {
  reply.send("Sever is ready");
});

// Login - register user
app.post("/login", async (request, reply) => {
  try {
    const body = request.body as userMock;
    const results = await login(body);
    reply.send(results);
  } catch (error) {
    reply.send("error: " + error);
  }
});
app.post("/register", async (request, reply) => {
  try {
    const body = request.body as userMock;
    const results = await register(body);
    reply.send(results);
  } catch (error) {
    reply.send("error: " + error);
  }
});
//updateMockupDB
app.post("/updatedb", async (request, reply) => {
  try {
    const body = await request.body;
    console.log(request.body);
    const connect = await updateMockup(body);
    reply.send(connect);
  } catch (error) {
    reply.send("error: " + error);
  }
});

// Prame
app.post(
  "/inputdata",
  { preHandler: [verifyMiddleware] },
  async (request, reply) => {
    try {
      const body = request.body;
      console.log(body);
      const results = await inputdata(body);
      reply.send(results);
    } catch (error) {
      reply.send("error: " + error);
    }
  }
);
// DashboardMockup
app.get(
  "/dashboard",
  { preHandler: [verifyMiddleware] },
  async (request, reply) => {
    try {
      const results = await dashboard();
      console.log("get dashboard");
      reply.send(results);
    } catch (error) {
      reply.send("error: " + error);
    }
  }
);
// dashboard db Prame
app.get(
  "/dashboardPrame",
  { preHandler: [verifyMiddleware] },
  async (request, reply) => {
    try {
      const results = await ShowdbPrame();
      console.log("get dashboardPrame");
      reply.send(results);
    } catch (error) {
      reply.send("error: " + error);
    }
  }
);

// Top Variations
app.post(
  "/inputVariations",
  { preHandler: [verifyMiddleware] },
  async (request, reply) => {
    try {
      const body = request.body;
      console.log(body);
      const results = await insertVariation(body);
      reply.send(results);
    } catch (error) {
      reply.send("error: " + error);
    }
  }
);
app.post(
  "/inputStock",
  { preHandler: [verifyMiddleware] },
  async (request, reply) => {
    try {
      const body = request.body;
      console.log(body);
      const results = await insertStock(body);
      reply.send(results);
    } catch (error) {
      reply.send("error: " + error);
    }
  }
);
app.post(
  "/editStock",
  { preHandler: [verifyMiddleware] },
  async (request, reply) => {
    try {
      const body = request.body;
      const results = await editStock(body);
      reply.send(results);
    } catch (error) {
      reply.send("error: " + error);
    }
  }
);
app.post(
  "/showVariations",
  { preHandler: [verifyMiddleware] },
  async (request, reply) => {
    try {
      const body = request.body;
      const results = await ShowVariation(body);
      console.log(results);
      reply.send(results);
    } catch (error) {
      reply.send("error: " + error);
    }
  }
);

// Fluck
app.post(
  "/inputAttribute",
  { preHandler: [verifyMiddleware] },
  async (request, reply) => {
    try {
      const body = request.body;
      const results = await insertAttribute(body);
      reply.send(results);
    } catch (error) {
      reply.send("error: " + error);
    }
  }
);
app.post(
  "/showAttribute",
  { preHandler: [verifyMiddleware] },
  async (request, reply) => {
    try {
      const body = request.body;
      const results = await showAttribute(body);
      console.log(results);
      reply.send(results);
    } catch (error) {
      reply.send("error: " + error);
    }
  }
);
app.post(
  "/delAttribute",
  { preHandler: [verifyMiddleware] },
  async (request, reply) => {
    try {
      const body = request.body;
      const results = await delAttribute(body);
      reply.send(results);
    } catch (error) {
      reply.send("error: " + error);
    }
  }
);
app.listen({ port: 5000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});

import { pump } from "./Fastify/app";
const fs = require("fs");
app.register(require("@fastify/multipart"));

app.post("/uploads", async (req: any, reply: any) => {
  try {
    const data = await req.file();
    await pump(data.file, fs.createWriteStream(`uploads/${data.filename}`));
    if (!data) {
      return { message: "Error uploading file", error: true };
    }
    const body = data.filename;
    await insertUploads(body);
    console.log(data.filename);
    console.log("Get uploaded files");
    reply.send("Success! import photos = " + data.filename);
  } catch (error) {
    reply.send("error uploading file: " + error);
  }
});

app.get("/image/:imageid", async (req: any, reply: any) => {
  try {
    const imgid = req.params.imageid;
    const buffer = fs.readFileSync("./uploads/" + imgid);
    reply.type("image/jpg");
    console.log("get image");
    reply.send(buffer);
  } catch (err) {
    reply.send("Error uploading image: " + err);
  }
});
