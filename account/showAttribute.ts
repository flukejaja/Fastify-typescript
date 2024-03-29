import { mockupFluck } from "../db/Mockup";
import { dbFluck } from "../db/server";


export const showAttribute = async (body:mockupFluck) => {
  try {
    const db = await dbFluck.findOne({body});
    if(!db){
      return { success: false, message: "Couldn't find DB" };
    }
    return db
  } catch (error) {
    return { success: false, message: "Couldn't find DB" };
  }
};
