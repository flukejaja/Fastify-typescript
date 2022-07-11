import { dbCollection } from "../db/server";
import { user } from "../db/Mockup";
import bcrypt from "bcrypt";

export const register = async (body: any) => {
  const hash = await bcrypt.hash(user.password, 10);
  console.log(hash);
  const result = await dbCollection.insertOne({
    username: user.username,
    password: hash,
  });
  console.log("result => ", result);
  if (!result) {
    return { success: false };
  }
  const results = {
    success: true,
    username: user.username,
    data: result,
  };
  return results;
};
