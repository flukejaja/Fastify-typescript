import { dbUploads } from "../db/server";

export const insertUploads = async (body: any) => {
   try {
     const result = await dbUploads.insertOne({image:body});
     console.log("Success add 1 image");
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
    return { success: false , message:"Can't Uploads"+error};
   }
  };