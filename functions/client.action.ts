'use server'

import connectDb from "@/lib/db"
import Client from "@/models/client"
import { redirect } from "next/navigation"

export const addClient = async (formData: FormData) => {
  const data = Object.fromEntries(formData)

  try {
    await connectDb()
    await Client.create({
      fullName: data.fullName,
      mobile: data.mobile,
      email: data.email,
      image: data.image,
      job: data.job,
      country: data.country,
      state: data.state,
      city: data.city,
    })
  } catch (error) {
    console.error(error)
  }
  redirect("/server/client")
}
export const editClient = async (formData: FormData) => {
  const data = Object.fromEntries(formData)

  try {
    await connectDb()
    await Client.findByIdAndUpdate(data.id, {
      fullName: data.fullName,
      mobile: data.mobile,
      email: data.email,
      image: data.image,
      job: data.job,
      country: data.country,
      state: data.state,
      city: data.city,
    })
  } catch (error) {
    console.error(error)
  }
  redirect("/server/client")
}



/* ------------------------------ deleteClient ------------------------------ */
export const deleteClient = async (formData: FormData) => {
  const id = formData.get("id")
  try {
    await connectDb()
    await Client.findByIdAndDelete(id)
  } catch (error) {
    console.error(error)
  }
  redirect("/server/client")
}