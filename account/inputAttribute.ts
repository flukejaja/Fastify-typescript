import { mockupFluck } from "../db/Mockup";
import { dbFluck } from "../db/server";

export const insertAttribute = async (body: mockupFluck) => {
  try {
    const result = await dbFluck.insertOne(body);
    console.log("result => ", result);
    if (!result) {
      return { success: false };
    }
    return {
      success: true,
      data: result,
    };
  } catch (error) {
    return { success: false, error: error };
  }
};
