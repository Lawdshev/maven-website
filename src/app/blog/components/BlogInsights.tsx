"use client";
import { useState } from "react";
import Image from "next/image";
import Strategy from "@/app/image/blog/strategy.png";
import Cost from "@/app/image/blog/cost.png";
import Behind from "@/app/image/blog/behind.png";
import { Calendar } from "lucide-react";

const categories = [
  "All",
  "Cloud",
  "AI",
  "Business",
  "Innovations",
  "Mavencode Insight",
];

const articles = [
  {
    id: 1,
    title: "Cloud Cost Optimization Strategies For Growing Businesses",
    category: "Cloud",
    excerpt:
      "To build scalable cloud systems, organizations must adopt efficient cost optimization strategies for sustained growth.",
    image: Strategy,
    date: "27 AUGUST, 2025",
  },
  {
    id: 2,
    title: "Where AI Meets Cloud: Unlocking The Future Of Scalable Intelligence",
    category: "Innovations",
    excerpt:
      "The fusion of AI and Cloud computing is redefining scalability and performance across industries.",
    image: Cost,
    date: "27 AUGUST, 2025",
  },
  {
    id: 3,
    title: "Behind The Scenes: How We Build Scalable Digital Products At Mavencode",
    category: "Mavencode Insight",
    excerpt:
      "Take a look inside Mavencode’s process of crafting digital products built for scale and innovation.",
    image: Behind,
    date: "27 AUGUST, 2025",
  },
  {
    id: 4,
    title: "Cloud Cost Optimization Strategies For Growing Businesses",
    category: "Cloud",
    excerpt:
      "To build scalable cloud systems, organizations must adopt efficient cost optimization strategies for sustained growth.",
    image: Strategy,
    date: "27 AUGUST, 2025",
  },
  {
    id: 5,
    title: "Where AI Meets Cloud: Unlocking The Future Of Scalable Intelligence",
    category: "Innovations",
    excerpt:
      "The fusion of AI and Cloud computing is redefining scalability and performance across industries.",
    image: Cost,
    date: "27 AUGUST, 2025",
  },
  {
    id: 6,
    title: "Behind The Scenes: How We Build Scalable Digital Products At Mavencode",
    category: "Mavencode Insight",
    excerpt:
      "Take a look inside Mavencode’s process of crafting digital products built for scale and innovation.",
    image: Behind,
    date: "27 AUGUST, 2025",
  },
];

export default function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <section className="bg-background dark:bg-background-dark text-white py-16 px-4 sm:px-6 lg:px-10">
        
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Categories Sidebar */}
        <aside className="md:col-span-1 px-6 rounded-lg  h-fit">
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <ul className="space-y-3">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => setActiveCategory(cat)}
                  className={`w-full text-left px-4 py-2 rounded-md font-medium transition ${
                    activeCategory === cat
                      ? "bg-cyan-600 text-white"
                      : "bg-[#1f2937] text-gray-300 hover:bg-cyan-700 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Articles Grid */}
        <div className="md:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-[#1f2937] rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-700/30 transition"
            >
              <div className="relative h-44 w-full">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-cyan-600 text-white px-3 py-1 rounded text-xs font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-base font-semibold mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-300 mb-3 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
