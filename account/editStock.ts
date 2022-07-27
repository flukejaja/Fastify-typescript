import { dbTop } from "../db/server";

export const editStock = async (body: any) => {
   try {
     const { item } = body;
     const result = await dbTop.updateOne({item},{$set: body});
     console.log(result)
     console.log("Success Edit 1 Stock");
     if (!result) {
       return { success: false };
     }
     const results = {
       success: true,
       data: body,
     };
     return results;
   } catch (error) {
    return { success: false ,message:error}
   }
  };