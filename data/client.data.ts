import connectDb from "@/lib/db"
import Client from "@/models/client"

/* -------------------------- getClientsForDropdown ------------------------- */
export const getClientsForDropdown = async () => {
  try {
    await connectDb()
    const clients = await Client.find().select({ _id: true, fullName: true }).sort({ createdAt: -1 }).lean()
    return JSON.parse(JSON.stringify(clients))
  } catch (error) {
    console.error(error)
  }
}

/* ------------------------------ getAllClients ----------------------------- */
export const getAllClients = async () => {
  try {
    await connectDb()
    const clients = await Client.find().sort({ createdAt: -1 })
    return clients
  } catch (error) {
    console.error(error)
  }
}

/* ------------------------------ getOneClient ------------------------------ */
export const getOneClient = async (id: string) => {
  try {
    await connectDb()
    const client = await Client.findById(id)
    return client
  } catch (error) {
    console.error(error)
  }
}