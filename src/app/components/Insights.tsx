"use client";

import Button from "./Button";
import Mckinsin from "@/app/image/insight/mckinsin.png";
import Innovation from "@/app/image/insight/innovation.png";
import Agentic from "@/app/image/insight/agentic.png";
import Source from "@/app/image/insight/source.png";
import Image from "next/image";

export default function Insights() {
  const insights = [
    {
      title: "McKinsey Technology Trends Outlook 2025",
      description:
        "July 22, 2025 - Which frontier technologies matter most for companies in 2025? Our annual tech trends report highlights the latest technology breakthroughs, talent trends, use cases, and their potential impact on companies across sectors.",
      image: Mckinsin,
    },
    {
      title: "The next innovation revolution—powered by AI",
      description:
        "June 20, 2025 - AI isn’t just for efficiency anymore. It can double the pace of R&D to unlock up to half a trillion dollars in value annually.",
      image: Innovation,
    },
    {
      title: "Seizing the agentic AI advantage",
      description:
        "June 13, 2025 - A CEO playbook to solve the gen AI paradox and unlock scalable impact with AI agents..",
      image: Agentic,
    },
    {
      title: "Open source technology in the age of AI",
      description:
        "April 22, 2025 - With moreorganizations deploying gen AI across business functions, a new survey finds that leaders are increasingly turning to open source AI solutions to build out their tech stacks.",
      image: Source,
    },
  ];

  return (
    <section
      id="insights"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background dark:bg-background-dark"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 mb-8">
            <span className="text-xs font-medium text-insight-heading dark:text-insight-heading-dark tracking-wide">
              LATEST INSIGHT
            </span>
          </div>

          <h2 className="text-xl text-insight-text dark:text-insight-text-dark mb-8 max-w-4xl mx-auto">
            Explore the latest insight on AI, cloud computing, and digital
            transformation
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="bg-background dark:bg-background-dark overflow-hidden "
            >
              {/* Image */}
              <Image
                src={insight.image}
                alt={insight.title}
                width={300}
                height={300}
              />

              {/* Content */}
              <div className="mt-4 text-left">
                <h3 className="text-[22px] font-bold text-insight-heading dark:text-insight-heading-dark mb-2 ">
                  {insight.title}
                </h3>
                <p className="text-[#999999] dark:text-gray-400 text-[19px] leading-relaxed">
                  {insight.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Read More Button */}
        <div className="text-center">
          <button className="bg-button-bg dark:bg-button-bg-dark text-white text-[17px] font-medium px-6 py-4 ">
            Read More Insights
          </button>
        </div>
      </div>
    </section>
  );
}
