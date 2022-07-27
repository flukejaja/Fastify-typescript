import { dbTop } from "../db/server";

export const insertVariation = async (body: any) => {
  try {
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
  } catch (error) {
    return { success: false , message:"Can't insert Variation", error: error };
  }
};
