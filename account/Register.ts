import { dbCollection } from "../db/server";

import bcrypt from "bcrypt";

export const register = async (body: any) => {
  const hash = await bcrypt.hash(body.password, 10);
  console.log(hash);
  const result = await dbCollection.insertOne({
    username: body.username,
    password: hash,
  });
  console.log("result => ", result);
  if (!result) {
    return { success: false };
  }
  const results = {
    success: true,
    username: body.username,
    data: result,
  };
  return results;
};
