"use client";

import AgentAi from "@/app/image/services/agentAi.png";
import Time from "@/app/image/services/time.png";
import Cloud from "@/app/image/services/cloud.png";
import Image from "next/image";
import IconOne from "@/app/image/services/iconOne.png";
import IconTwo from "@/app/image/services/iconTwo.png";
import IconThree from "@/app/image/services/iconThree.png";

export default function Services() {
  const services = [
    {
      title: "AI Agent",
      description:
        "Lorem ipsum amet, consectetur adipisicing elit,sd do eiusmod tempor incididunt labore etdolore magna aliqua..",
      image: AgentAi,
      icon: IconOne,
    },
    {
      title: "Real Time Pipeline",
      description:
        "Lorem ipsum amet, consectetur adipisicing elit,sd do eiusmod tempor incididunt labore etdolore magna aliqua..",
      image: Time,
      icon: IconTwo,
    },
    {
      title: "Cloud Native",
      description:
        "Lorem ipsum amet, consectetur adipisicing elit,sd do eiusmod tempor incididunt labore etdolore magna aliqua..",
      image: Cloud,
      icon: IconThree,
    },
  ];

  return (
    <section id="services" className="bg-white dark:bg-[#2A2C38]">
      <div className="max-w-6xl mx-auto py-20 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-8 text-left md:text-center">
        {/* Section Header */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#01CBFB33] dark:bg-[#10718833] mb-6 sm:mb-8">
          <span className="text-xs sm:text-sm font-medium text-[#1E5993] dark:text-[#78A7D5] uppercase tracking-wide">
            Service
          </span>
        </div>

        <h2 className="text-base sm:text-lg md:text-xl font-normal max-w-3xl mx-auto text-[#111827] dark:text-[#DAE0EC] leading-relaxed">
          Cutting edge technology stack designed for scale, performance and
          innovation
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 sm:mt-12 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-background dark:bg-background-dark rounded-2xl shadow-lg overflow-hidden relative"
            >
              {/* Image */}
              <div className="relative flex justify-center mb-8 sm:mb-10">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <div className="bg-background dark:bg-background-dark rounded-full p-3 shadow-lg border border-border dark:border-border-dark">
                    <Image
                      src={service.icon}
                      alt={`${service.title} icon`}
                      width={28}
                      height={28}
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="text-justify md:text-center p-4 sm:p-6 max-w-md mx-auto">
                <h3 className="text-lg sm:text-xl md:text-[22px] font-bold text-[#222222] dark:text-[#DDDDDD] mb-3 sm:mb-4">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-[#555555] dark:text-[#AAAAAA] leading-relaxed sm:leading-[30px]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
