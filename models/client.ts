import mongoose from "mongoose"

const clientSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  mobile: { type: String, required: true, unique: true },
  email: { type: String, unique: true },
  image: String,
  job: String,
  country: { type: String, required: true },
  state: { type: String, required: true },
  city: String
},
  { timestamps: true }
)

const Client = mongoose.models.Client || mongoose.model("Client", clientSchema)
export default Client