"use client";
import { useState } from "react";
import Image from "next/image";
import Strategy from "@/app/image/blog/strategy.png";
import Cost from "@/app/image/blog/cost.png";
import Behind from "@/app/image/blog/behind.png";
import { Calendar } from "lucide-react";
import { PiClockCounterClockwiseLight } from "react-icons/pi";

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
      "The cloud has become the foundation for modern business operations, but as companies scale, costs can easily spiral out of control. True optimization goes beyond cutting expenses—it’s about building efficiency into every layer of your infrastructure. ",
    image: Strategy,
    date: "27 AUGUST, 2025",
  },
  {
    id: 2,
    title: "Where AI Meets Cloud: Unlocking The Future Of Scalable Intelligence",
    category: "Innovations",
    excerpt:
      "The most exciting innovations of today are born at the intersection of AI and cloud computing. Together, they redefine what’s possible by combining the intelligence of advanced algorithms with the limitless capacity of scalable infrastructure.",
    image: Cost,
    date: "27 AUGUST, 2025",
  },
  {
    id: 3,
    title: "Behind The Scenes: How We Build Scalable Digital Products At Mavencode",
    category: "Mavencode Insight",
    excerpt:
      "Browned butter and brown sugar caramelly oodness crispy edgesthick At Mavencode, every solution we design starts with one principle: impact over hype. Our process is built around collaboration and clarity, where innovation meets execution. ",
    image: Behind,
    date: "27 AUGUST, 2025",
  },
  {
    id: 4,
    title: "Cloud Cost Optimization Strategies For Growing Businesses",
    category: "Cloud",
    excerpt:
      "The cloud has become the foundation for modern business operations, but as companies scale, costs can easily spiral out of control. True optimization goes beyond cutting expenses—it’s about building efficiency into every layer of your infrastructure. ",
    image: Strategy,
    date: "27 AUGUST, 2025",
  },
  {
    id: 5,
    title: "Where AI Meets Cloud: Unlocking The Future Of Scalable Intelligence",
    category: "Innovations",
    excerpt:
      "The most exciting innovations of today are born at the intersection of AI and cloud computing. Together, they redefine what’s possible by combining the intelligence of advanced algorithms with the limitless capacity of scalable infrastructure.",
    image: Cost,
    date: "27 AUGUST, 2025",
  },
  {
    id: 6,
    title: "Behind The Scenes: How We Build Scalable Digital Products At Mavencode",
    category: "Mavencode Insight",
    excerpt:
      "Browned butter and brown sugar caramelly oodness crispy edgesthick At Mavencode, every solution we design starts with one principle: impact over hype. Our process is built around collaboration and clarity, where innovation meets execution. ",
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
          <h3 className="text-xl font-bold mb-4 text-blog-category dark:text-blog-category-dark">Categories</h3>
          <ul className="space-y-3">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => setActiveCategory(cat)}
                  className={`w-full text-left px-4 text-base py-2 rounded-md font-medium ${
                    activeCategory === cat
                      ? "bg-button-bg dark:bg-button-bg-dark text-white"
                      : "bg-blog-category-button dark:bg-blog-category-button-dark text-blog-category dark:text-blog-category-dark"
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
              className="rounded-lg overflow-hidden"
            >
              <div className="relative h-44 w-full">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-button-bg dark:bg-button-bg-dark  px-3 py-1 rounded text-[9px] font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-base text-blog-title dark:blog-title-dark font-bold mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <div className="flex items-center gap-2  mb-3 ">
                  <Calendar className="w-4 h-4 text-date-icon dark:date-icon-dark" />
                  <span className="text-[9px] font-semibold text-blog-date dark:blog-date-dark">{article.date}</span>
                  <div className="flex items-center gap-1">
                    <PiClockCounterClockwiseLight className="w-4 h-4 text-date-icon dark:date-icon-dark" />
                    <span className="text-[9px] font-semibold text-blog-date dark:blog-date-dark">20 MINS</span>
                  </div>
                </div>
                <p className="text-xs text-blog-text dark:blog-text-dark max-w-lg mb-3">
                  {article.excerpt}
                </p>

               
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
