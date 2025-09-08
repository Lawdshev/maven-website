"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export interface LoginState {
  message: string
  success: boolean
  errors?: {
    email?: string[]
    password?: string[]
  }
}

// Simple authentication - in production, use proper password hashing and database
const ADMIN_CREDENTIALS = {
  email: "admin@mavencode.com",
  password: "admin123", // In production, this should be hashed
}

export async function loginAction(prevState: LoginState, formData: FormData): Promise<LoginState> {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  // Basic validation
  if (!email || !password) {
    return {
      message: "Email and password are required",
      success: false,
      errors: {
        email: !email ? ["Email is required"] : undefined,
        password: !password ? ["Password is required"] : undefined,
      },
    }
  }

  // Check credentials
  if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
    // Set authentication cookie
    const cookieStore = await cookies()
    cookieStore.set("admin-auth", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24, // 24 hours
    })

    redirect("/admin/dashboard")
  }

  return {
    message: "Invalid email or password",
    success: false,
  }
}

export async function logoutAction() {
  const cookieStore = await cookies()
  cookieStore.delete("admin-auth")
  redirect("/admin/login")
}

export async function checkAuth(): Promise<boolean> {
  const cookieStore = await cookies()
  const authCookie = cookieStore.get("admin-auth")
  return authCookie?.value === "authenticated"
}
