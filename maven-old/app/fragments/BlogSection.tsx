"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Code } from "lucide-react";
import { blogPosts } from "../data/blog-posts";

export default function BlogSection() {
  // Get the first 4 blog posts with sample images
  const featuredPosts = blogPosts.slice(0, 4).map((post, index) => {
    const sampleImages = [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center", // Cloud computing
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop&crop=center", // AI technology
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=center", // Hybrid cloud
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center", // Edge computing
    ];

    return {
      ...post,
      imageUrl: sampleImages[index] || "/placeholder.svg",
    };
  });

  return (
    <section className="w-full mx-auto px-6 md:px-12 py-20 lg:py-32 max-w-[1780px]">
      {/* Section Background */}
      <div className="absolute inset-0 rounded-3xl blur-3xl" />

      <div className="relative z-10 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#0054AA] mb-6 text-xl font-medium">
            <span className=" " style={{ color: "#0054AA" }}>
              Latest Insights
            </span>
          </div>

          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Explore our latest insights on AI, cloud computing, and digital
            transformation
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-3">
          {featuredPosts.map((post, i) => (
            <div key={post.id}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block bg-gray-100/70 backdrop-blur-sm overflow-hidden transition-all duration-300"
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

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

                  <div className="flex items-center text-sm text-gray-600 ">
                    <ArrowRight size={16} className=" mr-2 text-[#0054aa]" />
                    <span>Read more</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center px-8 py-4 text-white rounded-none text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            style={{ backgroundColor: "#0054AA" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#003d7a")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#0054AA")
            }
          >
            View All Posts
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
