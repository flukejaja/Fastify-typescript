import { mockupFluck } from "../db/Mockup";
import { dbFluck } from "../db/server";

export const delAttribute = async (body: mockupFluck) => {
  try {
    const result = await dbFluck.deleteOne(body);
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
    return { success: false , messages: error };
  }
};
