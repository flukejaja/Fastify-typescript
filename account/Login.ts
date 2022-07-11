import { dbCollection } from "../db/server";
import { user, user1, userMock } from "../db/Mockup";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const login = async (body: userMock) => {
  const { username, password } = body;

  const result = await dbCollection.findOne({
    username: username,
  });
  if (!result) {
    return { success: false, message: "Couldn't find user" };
  }
  const decyptPassword = await bcrypt.compare(password, result.password);
  if (!decyptPassword) {
    return { success: false, message: "Couldn't find Password" };
  }
  const payload = { ...result };
  const token = jwt.sign(payload, "hiwkao", { algorithm: "HS256" });
  console.log("result => ", result);
  if (!result) {
    return { success: false };
  }
  const results = {
    success: true,
    username: username,
    password: password,
    token: token,
  };
  console.log("result clone  => ", results);
  return results;
};
