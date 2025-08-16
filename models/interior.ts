import { Styles } from "@/enums/styles"
import mongoose from "mongoose"

const interiorSchema = new mongoose.Schema({
  title: {
    ar: { type: String, required: true, maxLength: 128, minLength: 3 },
    en: { type: String, required: true, maxLength: 128, minLength: 3 },
  },
  description: {
    ar: { type: String, required: true, maxLength: 1024, minLength: 32 },
    en: { type: String, required: true, maxLength: 1024, minLength: 32 },
  },
  style: { type: String, required: true, enum: Styles },
  images: [ { type: String, required: true } ],
  country: { type: String, required: true },
  state: { type: String, required: true },
  city: String,
  client: { type: mongoose.Schema.Types.ObjectId, ref: "Client", required: true },

},
  { timestamps: true }
)

const Interior = mongoose.models.Interior || mongoose.model("Interior", interiorSchema)
export default Interior