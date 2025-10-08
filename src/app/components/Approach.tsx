"use client";

import Image, { StaticImageData } from "next/image";
import Autonomous from "@/app/image/approach/autonomous.png";
import Core from "@/app/image/approach/core.png";
import Seamless from "@/app/image/approach/seamless.png";

interface ApproachItem {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
  imagePosition: "left" | "right";
  bulletPoints?: string[];
}

const approachItems: ApproachItem[] = [
  {
    id: "autonomous",
    title: "Autonomous Operation",
    description:
      "Transform your operation with AI that works independently, making intelligent decisions without constant human oversight.",
    image: Autonomous,
    imageAlt: "Autonomous",
    imagePosition: "left",
    bulletPoints: [
      "Intelligent coding that adapt to demand.",
      "A common Decision making for complex workflows.",
    ],
  },
  {
    id: "core",
    title: "Co-Creation at the Core",
    description:
      "We believe the best AI solutions are not built in isolation, but in collaboration. That's why we work closely with your teams from day one—understanding your workflows, challenges, and ambitions. This partnership-driven model ensures every solution we design is transparent, reliable, and tailored to your unique business context.",
    image: Core,
    imageAlt: "core",
    imagePosition: "right",
  },
  {
    id: "seamless",
    title: "Seamless Integration",
    description:
      "AI should enhance your operations—not disrupt them. Our solutions are designed to integrate smoothly with existing systems, tools, and workflows. This ensures adoption is effortless, processes remain efficient, and your team can immediately leverage the benefits without unnecessary friction.",
    image: Seamless,
    imageAlt: "seamless",
    imagePosition: "left",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="bg-background dark:bg-background-dark">
      <div className="max-w-6xl py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="md:text-center text-left mb-10 sm:mb-12">
          <h2 className="text-base font-medium text-black uppercase tracking-wider mb-6 sm:mb-8 dark:text-white">
            OUR APPROACH
          </h2>
        </div>

        {approachItems.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col ${
              item.imagePosition === "right"
                ? "lg:flex-row-reverse"
                : "lg:flex-row"
            } items-center gap-8 ${
              index < approachItems.length - 1 ? "mb-12" : ""
            }`}
          >
            <div className="w-full lg:w-1/2">
              <div className="rounded-xl overflow-hidden p-2">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="mt-4 sm:mt-6 w-full lg:w-1/2 text-justify  md:text-left">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-[#031119] dark:text-white leading-tight">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base max-w-xl text-[#999999] mx-0 leading-relaxed mb-4">
                {item.description}
              </p>
              {item.bulletPoints && (
                <ul className="space-y-2  text-[#999999] text-sm sm:text-base">
                  {item.bulletPoints.map((point, i) => (
                    <li key={i} className="flex justify-start">
                      <span className="text-[#999999] mr-2">•</span> {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
