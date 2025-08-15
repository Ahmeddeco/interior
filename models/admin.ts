import mongoose from "mongoose"

const adminSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true, unique: true },
  image: { type: String, required: true },
}, { timestamps: true })

const Admin = mongoose.models.Admin || mongoose.model("Admin", adminSchema)
export default Admin