import mongoose from "mongoose"

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!)
  } catch (error) {
    console.error("Mongodb connection error", error)
    process.exit(1)
  }
}

export default connectDb