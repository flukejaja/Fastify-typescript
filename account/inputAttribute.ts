import { dbFluck } from "../db/server";

export const insertAttribute = async (body: any) => {
  const result = await dbFluck.insertOne(body);
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
