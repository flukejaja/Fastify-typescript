import { dbFluck } from "../db/server";


export const showAttribute = async (body: any) => {
  const db = await dbFluck.findOne({itemName : body.itemName});
  if(!db){
    return { success: false, message: "Couldn't find DB" };
  }
  body = {...db}
  return body
};
