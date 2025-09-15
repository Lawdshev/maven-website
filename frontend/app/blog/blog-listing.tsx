import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "../data/blog-posts";
import { ArrowRight } from "lucide-react";

export default function BlogListing() {
  return (
    <section className="w-full py-16 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group block bg-white border border-[#0054AA]  overflow-hidden shadow-sm transition-all duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <Image
                  src={post.imageUrl || "/placeholder.svg"}
                  width={600}
                  height={400}
                  alt={post.title}
                  className="rounded-t-xl aspect-video object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <div className="flex items-center text-base leading-6  text-black -500 dark:  text-black -400">
                  <span className="font-medium">{post.category}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>

                <h3 className="text-xl font-semibold   text-black -900 dark:  text-black -100 group-hover:text-[#0054aa] transition-colors">
                  {post.title}
                </h3>

                <p className="  text-black -600 dark:  text-black -300 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div
                  className="flex items-center text-base font-semibold pt-2"
                  style={{ color: "#0054AA" }}
                >
                  <span>Read more</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
