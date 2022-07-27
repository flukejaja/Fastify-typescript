import { dbPrame } from "../db/server";

export const ShowdbPrame = async () => {
  try {
    const result = await dbPrame.find({},{ projection: { itemName:1 , image:1 , cateGory:1 , Description:1} }).toArray();
    if(!result) {return { success: false, message:"Can't find Prame in database" };}
    return result;
  } catch (error) {
    return { success: false, message: error}
  }
};
