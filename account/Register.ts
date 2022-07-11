import { dbCollection } from "../db/server";
import { user1 } from "../db/Mockup";
import bcrypt from "bcrypt";

export const register = async (body: any) => {
  const hash = await bcrypt.hash(user1.password, 10);
  console.log(hash);
  const result = await dbCollection.insertOne({
    username: user1.username,
    password: hash,
  });
  console.log("result => ", result);
  if (!result) {
    return { success: false };
  }
  const results = {
    success: true,
    username: user1.username,
    data: result,
  };
  return results;
};
