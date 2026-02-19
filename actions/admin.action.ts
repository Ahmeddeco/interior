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
      fullName: data.fullName,
      email: data.email,
      mobile: data.mobile,
      image: data.image
    })
  } catch (error) {
    console.error(error)
  }
  redirect("/server/admin")
}


/* -------------------------------- editAdmin ------------------------------- */
export const editAdmin = async (formData: FormData) => {
  const data = Object.fromEntries(formData)
  try {
    await connectDb()
    await Admin.findByIdAndUpdate(data.id, {
      fullName: data.fullName,
      email: data.email,
      mobile: data.mobile,
      image: data.image
    })
  } catch (error) {
    console.error(error)
  }
  redirect("/server/admin")
}

/* ------------------------------- deleteAdmin ------------------------------ */
export const deleteAdmin = async (formData: FormData) => {
  const id = formData.get("id")
  try {
    await connectDb()
    await Admin.findByIdAndDelete(id)
  } catch (error) {
    console.error(error)
  }
  redirect("/server/admin")
}