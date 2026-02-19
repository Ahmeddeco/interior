import connectDb from "@/lib/db"
import Admin from "@/models/admin"

/* -------------------------------- getAdmins ------------------------------- */
export const getAdmins = async () => {
  try {
    connectDb()
    const admins = await Admin.find().sort({ createdAt: -1 })
    return admins
  } catch (error) {
    console.error(error)
  }
}

/* ------------------------------- getOneAdmin ------------------------------ */
export const getOneAdmin = async (id: string) => {
  try {
    connectDb()
    const admin = await Admin.findById(id)
    return admin
  } catch (error) {
    console.error(error)
  }
}