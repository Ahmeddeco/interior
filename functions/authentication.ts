'use server'

import { auth, signIn, signOut } from "@/auth"
import connectDb from "@/lib/db"
import Admin from "@/models/admin"
import { redirect } from "next/navigation"

/* ------------------------------ signInAction ------------------------------ */
export const signInAction = async () => {
				await signIn("google", { redirectTo: "/api/auth/create"})
			}

/* ------------------------------ signOutAction ----------------------------- */
      export const signOutAction = async () => {
				await signOut()
			}

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