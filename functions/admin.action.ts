'use server'

import connectDb from "@/lib/db"
import Admin from "@/models/admin"
import { redirect } from "next/navigation"
import { toast } from "sonner"


/* -------------------------------- addAdmin -------------------------------- */
export const addAdmin = async (formData: FormData) => {
  const data = Object.fromEntries(formData)

  try {
    await connectDb()
    await Admin.create({
      name: data.name,
      email: data.email,
      mobile: data.mobile,
      image: data.images
    })
  } catch (error) {
    console.error(error)
  }
  redirect("/server/admin")
}