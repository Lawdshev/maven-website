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
      <div className="max-w-6xl mx-auto py-36 px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#01CBFB33] dark:bg-[#10718833] mb-8">
          <span className="text-sm font-medium text-[#1E5993] dark:text-[#78A7D5] uppercase tracking-wide">
            Service
          </span>
        </div>

        <h2 className="text-xl font-normal  max-w-3xl mx-auto text-[#111827] dark:text-[#DAE0EC] ">
          Cutting edge technology stack designed for, scale, performance and
          innovation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-background dark:bg-background-dark  rounded-2xl shadow-lg overflow-hidden relative"
            >
              <div className="relative flex justify-center mb-6">
                <Image src={service.image} alt={service.title} />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <div className="bg-background dark:bg-background-dark rounded-full p-3 shadow-lg border border-border dark:border-border-dark">
                    <Image
                      src={service.icon}
                      alt={`${service.title} icon`}
                      width={30}
                      height={30}
                    />
                  </div>
                </div>
              </div>

              <div className="text-center p-6 max-w-md mx-auto">
                <h3 className="text-[22px] font-bold text-[#222222] dark:text-[#DDDDDD] mb-4">
                  {service.title}
                </h3>
                <p className=" text-[#555555] dark:text-[#AAAAAA] leading-[30px]">
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
