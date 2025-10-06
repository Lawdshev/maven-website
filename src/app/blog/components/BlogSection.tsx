import Image from "next/image";
import News from "@/app/image/blog/news.png";
import Design from "@/app/image/blog/design.png";
import Cloud from "@/app/image/blog/cloud.png";
import Ai from "@/app/image/blog/ai.png";
import { Calendar, CircleUser } from "lucide-react";
import { PiClockCounterClockwiseLight } from "react-icons/pi";

export default function BlogSection() {
  const sidebarArticles = [
    {
      img: Cloud,
      tag: "CLOUD",
      title:
        "Essential Cloud Security Practices Every Business Must Implement",
      date: "27 AUGUST, 2024",
    },
    {
      img: Ai,
      tag: "AI",
      title: "AI Bias Explained: How To Build Fair And Ethical Algorithms",
      date: "27 AUGUST, 2024",
    },
    {
      img: News,
      tag: "NEWS",
      title: "Using Automated Test Results To Improve Accessibility",
      date: "27 AUGUST, 2024",
    },
  ];
  return (
    <section className="bg-background dark:bg-background-dark  ">
      {/* Container */}
      <div className="max-w-6xl py-24 px-4 sm:px-6 lg:px-8 mx-auto">
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* MAIN ARTICLE */}
        <div className="lg:col-span-2 relative rounded-xl">
          <div className="relative h-[440px] w-full rounded-xl ">
            <Image
              src={Design}
              alt="Generative AI design"
              fill
              className="object-cover"
              priority
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
              <span className="bg-button-bg dark:bg-button-bg-dark  text-white px-3 py-1 rounded text-[13px] font-semibold">
                AI
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mt-3 mb-4 leading-snug">
                5 Ways Generative AI Is Reshaping Product Design In 2025
              </h2>

              <div className="flex flex-wrap gap-6 text-sm text-gray-200">
                <div className="flex items-center gap-2">
                  <CircleUser className="w-5 h-5 text-blog-icon dark:text-blog-icon-dark" />
                  <span className="text-[13px] font-semibold text-[#BACCE1]" >BY ADMIN</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blog-icon dark:text-blog-icon-dark" />
                  <span className="text-[13px] font-semibold text-[#BACCE1]" >27 AUGUST, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <PiClockCounterClockwiseLight className="w-5 h-5 text-blog-icon dark:text-blog-icon-dark" />
                  <span className="text-[13px] font-semibold text-[#BACCE1]" >20 MINS</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SIDEBAR ARTICLES */}
        <div className="space-y-6">
          {sidebarArticles.map((item, i) => (
            <article
              key={i}
              className="relative rounded-lg overflow-hidden group cursor-pointer"
            >
              <div className="relative h-[130px] w-full">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover "
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-13 left-3 z-20">
                  <span className="bg-button-bg dark:bg-button-bg-dark text-white px-2 py-1 rounded text-[13px] font-semibold">
                    {item.tag}
                  </span>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 z-30 text-white">
                <h3 className="text-lg font-bold leading-snug mb-1 line-clamp-2">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-gray-200">
                  <Calendar className="w-5 h-5 text-blog-icon dark:text-blog-icon-dark" />
                  <span className="text-[13px] font-semibold text-[#BACCE1]" >{item.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
