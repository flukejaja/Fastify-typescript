import { mockup } from "../db/Mockup";
import { dbMock } from "../db/server";

export const updateMockup = async (body:mockup) =>{
   try {
     const update = await dbMock.updateOne({id:body.id},{$set:{name:body.name}})
     if(!update){
         return { success: false, message: "Couldn't find" };
       }
     console.log("result updated successfully = "+JSON.stringify(update));
     return update;
   } catch (error) {
    return { success: false, message: "Couldn't update" };
   }
}