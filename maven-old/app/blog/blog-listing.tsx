"use client";

import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "../data/blog-posts";
import { ArrowRight } from "lucide-react";
import { useState, useMemo } from "react";

export default function BlogListing() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Extract unique categories from blog posts
  const categories = useMemo(() => {
    const allCategories = blogPosts.flatMap((post) =>
      post.category.split(",").map((cat) => cat.trim())
    );
    return ["All", ...Array.from(new Set(allCategories))];
  }, []);

  // Filter posts based on selected category
  const filteredPosts = useMemo(() => {
    if (selectedCategory === "All") {
      return blogPosts;
    }
    return blogPosts.filter((post) =>
      post.category
        .split(",")
        .map((cat) => cat.trim())
        .includes(selectedCategory)
    );
  }, [selectedCategory]);

  return (
    <section className="w-full py-16 bg-white">
      <div className="container px-4 md:px-6 max-w-[1780px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filter */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-[#0054aa] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group block bg-gray-100/70 backdrop-blur-sm overflow-hidden transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={post.imageUrl || "/placeholder.svg"}
                      width={600}
                      height={400}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex text-gray-600 text-sm items-center justify-between">
                      <span
                        className="font-mono text-xs bg-blue-50 px-3 py-1 rounded-full"
                        style={{ color: "#0054AA" }}
                      >
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-xs">{post.date}</span>
                    </div>

                    <h3 className="text-lg font-normal text-black transition-colors line-clamp-2 group-hover:text-[#0054aa]">
                      {post.title}
                    </h3>

                    <p className="text-black leading-relaxed text-sm line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center text-sm text-gray-600">
                      <ArrowRight size={16} className="mr-2 text-[#0054aa]" />
                      <span>Read more</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
