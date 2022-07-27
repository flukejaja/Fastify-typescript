import { dbMock } from "../db/server";

export const dashboard = async () => {
 try {
   const db = await dbMock
     .find({}, { projection: { _id: 0, email: 1, phone: 1, id: 1, name: 1 } })
     .toArray();
     if(!db)return {message:"Error",succes: false}
   return db;
 } catch (error) {
  return { succes: false, error: error}
 }
};
