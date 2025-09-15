"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";
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
    <section className="w-full mx-auto px-6 md:px-12 py-20 lg:py-32">
      {/* Section Background */}
      <div className="absolute inset-0 rounded-3xl blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full  border  mb-6">
            <BookOpen className="w-4 h-4 mr-2" style={{ color: "#0054AA" }} />
            <span className="font-mono text-sm" style={{ color: "#0054AA" }}>
              Latest Insights
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-slate-800">Thought Leadership</span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore our latest insights on AI, cloud computing, and digital
            transformation
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPosts.map((post, i) => (
            <div key={post.id}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block bg-white border border-blue-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
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
                  <div className="flex items-center justify-between text-sm">
                    <span
                      className="font-medium bg-blue-50 px-3 py-1 rounded-full"
                      style={{ color: "#0054AA" }}
                    >
                      {post.category}
                    </span>
                    <span className="text-slate-500">{post.date}</span>
                  </div>

                  <h3
                    className="text-xl font-bold text-slate-800 transition-colors line-clamp-2"
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#0054AA")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#1e293b")
                    }
                  >
                    {post.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed text-sm line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div
                    className="flex items-center text-sm font-semibold pt-2"
                    style={{ color: "#0054AA" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#003d7a")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#0054AA")
                    }
                  >
                    <span>Read more</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
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
            className="inline-flex items-center px-8 py-4 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
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
