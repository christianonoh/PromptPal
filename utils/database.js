import mongoose from "mongoose";

let isConnected = false;

const connectToDB = async () => {
  // This sets mongoose options, failure to do that gives warnings in the console 
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "promptpal",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log('MongoDB connected');
  
  } catch (error) {
    console.log('Error connecting to MongoDB');
    throw error;
  }
}

export default connectToDB;