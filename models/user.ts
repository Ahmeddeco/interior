import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: String,
  country: String,
  city: String,
},
  { timestamps: true }
)

const User = mongoose.models.User || mongoose.model("User", userSchema)
export default User