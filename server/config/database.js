import mongoose from 'mongoose';

const connection = async () => {
  try {
    mongoose.set({ strictQuery: false });
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export default connection;
