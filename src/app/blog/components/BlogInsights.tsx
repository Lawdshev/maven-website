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
    <section className="bg-background dark:bg-background-dark text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
        <aside className="md:col-span-1 rounded-lg h-fit">
          <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-blog-category dark:text-blog-category-dark">
            Categories
          </h3>
          <ul className="flex md:flex-col overflow-x-auto md:overflow-x-visible gap-2 md:gap-0 md:space-y-3 pb-2 md:pb-0 scrollbar-hide">
            {categories.map((cat) => (
              <li key={cat} className="flex-shrink-0 md:flex-shrink">
                <button
                  onClick={() => setActiveCategory(cat)}
                  className={`w-full text-left px-3 sm:px-4 text-sm sm:text-base py-2 rounded-md font-medium whitespace-nowrap md:whitespace-normal ${
                    activeCategory === cat
                      ? "bg-[#1E5993] dark:[#193551] text-white"
                      : "bg-[#D0F3FC] dark:bg-[#19768E] text-blog-category dark:text-blog-category-dark"
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Articles Grid */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredArticles.map((article) => (
            <article key={article.id} className="rounded-lg overflow-hidden">
              <div className="relative h-40 sm:h-44 w-full">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                  <span className="bg-[#1E5993] dark:bg-[#193551] px-2 sm:px-3 py-1 rounded text-[8px] sm:text-[9px] font-semibold uppercase">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="py-3 sm:py-4">
                <h3 className="text-sm sm:text-base text-[#183354] dark:text-[#B1C7E1] font-bold mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-date-icon dark:text-date-icon-dark" />
                  <span className="text-[8px] sm:text-[9px] font-semibold text-blog-date dark:text-blog-date-dark">
                    {article.date}
                  </span>
                  <div className="flex items-center gap-1">
                    <PiClockCounterClockwiseLight className="w-3 h-3 sm:w-4 sm:h-4 text-date-icon dark:text-date-icon-dark" />
                    <span className="text-[8px] sm:text-[9px] font-semibold text-blog-date dark:text-blog-date-dark">
                      20 MINS
                    </span>
                  </div>
                </div>
                <p className="text-[11px] sm:text-xs text-justify text-blog-text dark:text-blog-text-dark mb-2 sm:mb-3 line-clamp-3">
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
