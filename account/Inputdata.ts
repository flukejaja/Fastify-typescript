import { mockup } from "../db/Mockup";
import { dbPrame } from "../db/server";

export const inputdata = async (body: any) => {
  const result = await dbPrame.insertOne(body);
  console.log("result => ", result);
  if (!result) {
    return { success: false };
  }
  const results = {
    success: true,
    data: result,
  };
  return results;
};
