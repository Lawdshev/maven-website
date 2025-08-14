// app/blog/[slug]/page.tsx
import BlogPostDetail from "./blog-post-details"
import { blogPosts } from "../../data/blog-posts"

// This function tells Next.js which specific blog post pages to pre-render at build time
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return <BlogPostDetail slug={params.slug} />
}