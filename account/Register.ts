import { dbCollection } from "../db/server";
import bcrypt from "bcrypt";

export const register = async (body: any) => {
  try {
    const hash = await bcrypt.hash(body.password, 10);
    console.log(hash);
    const result = await dbCollection.insertOne({
      email: body.email,
      password: hash,
    });
    console.log("result => ", result);
    if (!result) {
      return { success: false };
    }
    const results = {
      success: true,
      email: body.email,
      data: result,
    };
    return results;
  } catch (error) {
    return { success: false , message:"Couldn't insert data into database"+error};
  }
};
