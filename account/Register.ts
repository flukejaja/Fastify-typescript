import { dbCollection } from "../db/server";
import { user } from "../db/Mockup";

export const register = async (body: any) => {
  const result = await dbCollection.insertOne(user);
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
