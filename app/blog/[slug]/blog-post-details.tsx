import Image from "next/image"
import { blogPosts } from "../../data/blog-posts"
import { notFound } from "next/navigation" // Used for handling cases where a post is not found

interface BlogPostDetailProps {
  slug: string
}

export default function BlogPostDetail({ slug }: BlogPostDetailProps) {
  // Find the blog post that matches the provided slug
  const post = blogPosts.find((p) => p.slug === slug)

  // If no post is found with that slug, render a 404 page
  if (!post) {
    notFound()
  }

  return (
    <article className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        {/* Post Title and Metadata */}
        <div className="space-y-6 mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-gray-50 leading-[60px]">
            {post.title}
          </h1>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
            <span>
              Category: <span className="font-medium text-[#0054aa] dark:text-[#0054aa]">{post.category}</span>
            </span>
            <span>Published: {post.date}</span>
          </div>
        </div>

        {/* Post Hero Image */}
        <div className="relative w-full h-96 mb-12 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={post.imageUrl || "/placeholder.svg"}
            alt={post.title}
            fill
            style={{ objectFit: "cover" }}
            priority // Mark as high priority for LCP (Largest Contentful Paint)
          />
        </div>

        {/* Post Content (rendered from HTML string) */}
        <div
          className="prose prose-lg dark:prose-invert max-w-none text-gray-800 dark:text-gray-200 leading-[50px]"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  )
}
