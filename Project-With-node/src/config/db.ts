import mongoose from "mongoose";
import env from "dotenv";
env.config();

const mongodbUrl = process.env.MONGODB_URL;

const connection = async () => {
  try {
    const connect = await mongoose.connect(mongodbUrl!);
    if (connect) {
      console.log("Connected with MongoDB");
    }
  } catch (error) {
    console.log("Error", error);
  }
};

export default connection;
