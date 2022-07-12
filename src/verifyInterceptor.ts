import { FastifyReply, FastifyRequest } from "fastify";
import { connect } from "../db/server";
import jwt from "jsonwebtoken";

export const verifyMiddleware = async (
  request: FastifyRequest,
  reply: FastifyReply,
  next: any
) => {
  try {
    connect;
    if (!request.headers["authorization"])
      reply.status(500).send({ status: false, message: "Error" });
    const token = request.headers.authorization?.split(" ") as string[];
    const str_verify = JSON.stringify(jwt.verify(token[1], "hiwkao"));
    const obj = JSON.parse(str_verify);
    console.log("result verify => ", obj);
    next();
  } catch (error) {
    reply.status(500).send({ status: false, message: "Error" });
  }
};
