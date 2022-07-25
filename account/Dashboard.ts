import { dbMock } from "../db/server";

export const dashboard = async () => {
  const db = await dbMock
    .find({}, { projection: { _id: 0, email: 1, phone: 1, id: 1, name: 1 } })
    .toArray();
  return db;
};
