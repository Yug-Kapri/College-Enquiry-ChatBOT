import { connect } from "mongoose";

export const connectDB = async () => {
  try {
    await connect(process.env.MONGO_URI).then((data) => {
      console.info(`Database connected with ${data.connection.host}`);
    });
  } catch (error) {
    console.error(error.message);
    setTimeout(connectDB, 5000);
  }
};
