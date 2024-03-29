import { mockupTop } from "../db/Mockup";
import { dbTop } from "../db/server";

export const ShowVariation = async (body:mockupTop) => {
  try {
    const db = await dbTop.findOne({body});
    if(!db){
      return { success: false, message: "Couldn't find DB" };
    }
    return db
  } catch (error) {
    return { success: false, message: "Couldn't find DB" };
  }
};
