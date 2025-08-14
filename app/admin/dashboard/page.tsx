import { redirect } from "next/navigation"
import { checkAuth, logoutAction } from "../../server-actions/auth"
import { getBlogPosts } from "../../server-actions/blog"
import AdminDashboard from "../../../components/admin-dashboard"

export default async function Dashboard() {
  const isAuthenticated = await checkAuth()

  if (!isAuthenticated) {
    redirect("/admin/login")
  }

  const blogPosts = await getBlogPosts()

  return <AdminDashboard blogPosts={blogPosts} logoutAction={logoutAction} />
}
