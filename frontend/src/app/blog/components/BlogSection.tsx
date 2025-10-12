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
      title: "Essential Cloud Security Practices Every Business Must Implement",
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
    <section className="bg-background dark:bg-background-dark">
      <div className="container pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-4">
          <div className="lg:col-span-2 rounded-xl">
            <div className="relative h-[400px] sm:h-[500px] lg:h-[630px] w-full rounded-xl">
              <Image
                src={Design}
                alt="Generative AI design"
                fill
                className="object-cover rounded-xl"
                priority
              />
              <div className="absolute inset-0 bg-black/50 rounded-xl" />

              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white z-20">
                <span className="bg-[#1E5993] text-white px-2 sm:px-3 py-1 rounded text-[11px] sm:text-[13px] font-semibold uppercase">
                  AI
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold my-2 sm:my-3 leading-snug">
                  5 Ways Generative AI Is Reshaping Product Design In 2025
                </h2>

                <div className="flex flex-wrap gap-3 sm:gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <CircleUser className="w-4 h-4 text-white" />
                    <span className="text-[11px] sm:text-[13px] font-semibold text-white">
                      BY ADMIN
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-white" />
                    <span className="text-[11px] sm:text-[13px] font-semibold text-white">
                      27 AUGUST, 2025
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PiClockCounterClockwiseLight className="w-4 h-4 text-white" />
                    <span className="text-[11px] sm:text-[13px] font-semibold text-white">
                      20 MINS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {sidebarArticles.map((item, i) => (
              <article
                key={i}
                className="relative h-[180px] sm:h-[200px] rounded-lg overflow-hidden group cursor-pointer"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />

                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 z-30 text-white">
                  <span className="bg-[#1E5993] text-white px-2 py-1 rounded text-[11px] sm:text-[13px] font-semibold uppercase mb-2 inline-block">
                    {item.tag}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold leading-snug mb-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    <span className="text-[11px] sm:text-[13px] font-semibold text-white">
                      {item.date}
                    </span>
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
