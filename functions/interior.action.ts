'use server'

import connectDb from "@/lib/db"
import Interior from "@/models/interior"
import { redirect } from "next/navigation"
import { splitImages } from "./splitImages"

/* ------------------------------- addInterior ------------------------------ */
export const addInterior = async (formData: FormData) => {
  const data = Object.fromEntries(formData)
  try {
    await connectDb()
    await Interior.create({
      title: { ar: data.title_ar, en: data.title_en },
      description: { ar: data.description_ar, en: data.description_en },
      category: data.category,
      client: data.client,
      country: data.country,
      state: data.state,
      city: data.city,
      images: splitImages(data.images as string),
    })
  } catch (error) {
    console.error(error)
  }
  redirect("/server/interior")
}


export const editInterior = async (formData: FormData) => {
  const data = Object.fromEntries(formData)
  try {
    await connectDb()
    await Interior.findByIdAndUpdate(data.id, {
      title: { ar: data.title_ar, en: data.title_en },
      description: { ar: data.description_ar, en: data.description_en },
      style: data.style,
      client: data.client,
      country: data.country,
      state: data.state,
      city: data.city,
      images: splitImages(data.images as string),
    })
  } catch (error) {
    console.error(error)
  }
  redirect("/server/interior")
}