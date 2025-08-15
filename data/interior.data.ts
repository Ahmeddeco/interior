import connectDb from "@/lib/db"
import Client from "@/models/client"
import Interior from "@/models/interior"

/* ----------------------------- getAllInteriors ---------------------------- */
export const getAllInteriors = async () => {
  try {
    await connectDb()
    const interiors = await Interior.find().sort({ createdAt: -1 })
    return interiors
  } catch (error) {
    console.error(error)
  }
}

export const getAllInteriorsForInteriorPage = async () => {
  try {
    await connectDb()
    const interiors = await Interior.find().select({ title: true, style: true, images: true, country: true, city: true, }).sort({ createdAt: -1 }).populate("client", { fullName: true }, Client)
    return interiors
  } catch (error) {
    console.error(error)
  }
}

/* ----------------------------- getOneInterior ----------------------------- */
export const getOneInterior = async (id: string) => {
  try {
    await connectDb()
    const oneInterior = await Interior.findById(id).populate("client", { fullName: true, _id: true }, Client).lean()
    return JSON.parse(JSON.stringify(oneInterior))
  } catch (error) {
    console.error(error)
  }
}