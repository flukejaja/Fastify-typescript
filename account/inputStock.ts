import { dbTop } from "../db/server";

export const insertStock = async (body: any) => {
   try {
     const result = await dbTop.insertOne(body);
     console.log("Success add 1 Stock");
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
    return { success: false , message:"Couldn't findOne"};
   }
  };