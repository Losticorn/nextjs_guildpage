// establish connection to your database and export connectDB

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!)
    console.log(`Successfully connected to mongoDB.`)
  }
  catch (error: any) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB;

// Export a module-scoped MongoClient. By doing this in a
// separate module, the client can be shared across functions.
