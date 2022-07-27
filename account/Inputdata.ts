import { dbPrame } from "../db/server";

export const inputdata = async (body: any) => {
  try {
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
  } catch (error) {
    return { success: false , message: "error inserting data"};
  }
};
