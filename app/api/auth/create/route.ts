import { auth } from "@/auth"
import connectDb from "@/lib/db"
import User from "@/models/user"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const session = await auth()
  const user = session?.user
  try {
    await connectDb()
    const dbUser = await User.findOne({ email: user?.email })
    if (!dbUser) {
      await User.create({ name: user?.name, email: user?.email, image: user?.image })
    }
  } catch (error) {
    console.error(error)
  }
  return NextResponse.redirect(new URL("/", request.url))
}
