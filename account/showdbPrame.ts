import { dbPrame } from "../db/server";

export const ShowdbPrame = async () => {
  const result = await dbPrame.find({}).toArray();
  return result;
};
