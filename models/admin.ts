import mongoose from "mongoose"

const adminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: String
}, { timestamps: true })

const Admin = mongoose.models.Admin || mongoose.model("Admin", adminSchema)
export default Admin