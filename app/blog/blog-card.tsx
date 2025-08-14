import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from 'lucide-react'
import type { BlogPost } from "../data/blog-posts"

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800"
    >
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={post.imageUrl || "/placeholder.svg"}
          alt={post.title}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-300 group-hover:scale-105"
        //   query={post.imageQuery}
        />
      </div>
      <div className="p-6 space-y-3">
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <span className="font-medium text-[#0054aa] dark:text-[ #0054aa]">{post.category}</span>
          <span>{post.date}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 group-hover:text-[#0054aa] transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-3">{post.excerpt}</p>
        <div className="inline-flex items-center text-[#0054aa] group-hover:underline text-sm font-medium pt-2">
          Read more
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}