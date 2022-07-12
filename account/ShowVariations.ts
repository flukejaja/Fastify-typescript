import { dbTop } from "../db/server";

export const ShowVariation = async (body: any) => {
  const db = await dbTop.findOne({optionName: body.optionName});
  if(!db){
    return { success: false, message: "Couldn't find DB" };
  }
  body = {...db}
  return body
};
