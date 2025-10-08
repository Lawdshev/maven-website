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
        "April 22, 2025 - With more organizations deploying gen AI across business functions, a new survey finds that leaders are increasingly turning to open source AI solutions to build out their tech stacks.",
      image: Source,
    },
  ];

  return (
    <section id="insights" className="bg-background dark:bg-background-dark">
      <div className="max-w-6xl py-20 px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Section Header */}
        <div className="text-left md:text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#01CBFB33] dark:bg-[#10718833] mb-8">
            <span className="text-xs font-medium text-insight-heading dark:text-insight-heading-dark tracking-wide">
              LATEST INSIGHT
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-xl text-insight-text dark:text-[#DAE0EC] mb-8 max-w-4xl mx-auto leading-relaxed">
            Explore the latest insight on AI, cloud computing, and digital
            transformation
          </h2>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="bg-background dark:bg-background-dark overflow-hidden"
            >
              {/* Image */}
              <div className="w-full h-56 sm:h-64 md:h-72 lg:h-60 relative">
                <Image
                  src={insight.image}
                  alt={insight.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="mt-4 text-left">
                <h3 className="text-lg  font-bold text-[#1E5993] dark:text-[#78A7D5] mb-2">
                  {insight.title}
                </h3>
                <p className="text-[#999999] dark:text-[#999999] text-base  leading-[31px]">
                  {insight.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Read More Button */}
        <div className="text-center">
          <button className="bg-button-bg dark:bg-button-bg-dark text-white text-[17px] font-medium px-6 py-4">
            Read More Insights
          </button>
        </div>
      </div>
    </section>
  );
}
