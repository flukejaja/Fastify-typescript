import { dbTop } from "../db/server";

export const insertVariation = async (body: any) => {
    const result = await dbTop.insertOne(body);
    console.log("Success add 1 Variations");
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
  