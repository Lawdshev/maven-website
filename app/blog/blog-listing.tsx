import Link from "next/link"
import Image from "next/image"
import { blogPosts } from "../data/blog-posts"

export default function BlogListing() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group block space-y-4 border  border-gray-200 border-[1px] p-4 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg transition-colors"
            >
              <Image
                src={post.imageUrl || "/placeholder.svg"}
                width={600}
                height={400}
                alt={post.title}
                className="rounded-md aspect-video object-cover"
              />
              <div className="space-y-2">
                <h3 className="text-lg font-normal text-black - 900 dark:text-black - 50 group-hover:text-[#0054aa] transition-colors">
                  {post.title}
                </h3>
                <p className="text-black - 700 dark:text-black - 300 text-xl leading-[30px]">{post.excerpt}</p>
                <p className="text-black - 500 dark:text-black - 400 text-xl ">
                  {post.category} - {post.date}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
