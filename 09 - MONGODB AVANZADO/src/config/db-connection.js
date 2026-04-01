import { connect } from "mongoose";

export const connectMongoDB = async () => {
  try {
    await connect(process.env.MONGO_URL);
  } catch (error) {
    throw new Error(error);
  }
};
