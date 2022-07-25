import { dbMock } from "../db/server";

export const updateMockup = async (body:any) =>{
    console.log(body.id);
    const update = await dbMock.updateOne({id:body.id},{$set:{name:body.name}})
    console.log("result updated successfully = "+JSON.stringify(update));
    return update;
}