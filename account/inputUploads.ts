import { dbFluck } from "../db/server";

export const insertUploads = async (body: any) => {
    const result = await dbFluck.insertOne(body);
    console.log("Success add 1 Stock");
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