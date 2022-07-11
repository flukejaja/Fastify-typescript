import { dbCollection } from "../db/server";
import { user } from "../db/Mockup";
import jwt from "jsonwebtoken";

export const login = async (body = user) => {
  const { username, password } = body;
  const result = await dbCollection.findOne({
    username: username,
    password: password,
  });
  const payload = { ...result };
  const token = jwt.sign(payload, "hiwkao", { algorithm: "HS256" });
  console.log("result => ", result);
  if (!result) {
    return { success: false };
  }
  const results = {
    success: true,
    username: username,
    token: token,
  };
  return results;
};
