import { auth } from "@/auth"
import connectDb from "@/lib/db"
import Admin from "@/models/admin"
import { redirect } from "next/navigation"

/* ------------------------------ isSuperAdmin ------------------------------ */
export const isSuperAdmin = async () => {
  const session = await auth()
  const user = session?.user
  const superAdmin = process.env.SUPER_ADMIN!

  if (user?.email !== superAdmin) {
    return redirect("/")
  }
  else {
    return user
  }
}

/* --------------------------------- isAdmin -------------------------------- */
export const isAdmin = async () => {
  const session = await auth()
  const user = session?.user
  try {
    await connectDb()
    const dbAdmin = Admin.findOne({ email: user?.email })
    if (!dbAdmin) {
      return redirect("/")
    }
    else {
      return user
    }
  } catch (error) {
    console.error(error)
  }
}