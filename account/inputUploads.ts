import { dbPrame } from "../db/server";

export const insertUploads = async (body: any) => {
   try {
     const result = await dbPrame.updateOne({id:body.id},{$set:{image:body.image}});
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