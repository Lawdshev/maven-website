"use client";

import Image from "next/image";
import Autonomous from "@/app/image/approach/autonomous.png";
import Core from "@/app/image/approach/core.png";
import Seamless from "@/app/image/approach/seamless.png";

export default function Approach() {
  return (
    <section
      id="approach"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background dark:bg-background-dark"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-base font-medium text-black uppercase tracking-wider mb-8 dark:text-white ">
            OUR APPROACH
          </h2>
        </div>

        {/* Item 1 */}
        <div className="flex flex-col lg:flex-row  gap-8 mb-12">
          <div className="w-full lg:w-1/2">
            <div className="rounded-xl overflow-hidden p-2">
              <Image
                src={Autonomous}
                alt="Autonomous"
                className="w-full  object-cover rounded-lg"
              />
            </div>
          </div>
          <div className=" mt-6 w-full lg:w-1/2">
            <h3 className="text-4xl font-bold mb-4 text-[#031119] dark:text-white">
              Autonomous Operation
            </h3>
            <p className="text-base max-w-xl text-[#999999] mb-4 leading-[1.8rem]">
              Transform your operation with AI that works independently, making
              intelligent decisions without constant human oversight.
            </p>
            <ul className="space-y-2 text-[#999999]">
              <li className="flex">
                <span className="text-[#999999] mr-2">•</span> Intelligent
                coding that adapt to demand.
              </li>
              <li className="flex">
                <span className="text-[#999999] mr-2">•</span> A common Decision
                making for complex workflows.
              </li>
            </ul>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col lg:flex-row  gap-8 mb-12">
          <div className=" mt-6 w-full lg:w-1/2">
            <h3 className="text-4xl font-bold mb-4 text-[#031119] dark:text-white">
              Co-Creation at the Core
            </h3>
            <p className="text-base max-w-xl text-[#999999]">
              We believe the best AI solutions are not built in isolation, but
              in collaboration. That’s why we work closely with your teams from
              day one—understanding your workflows, challenges, and ambitions.
              This partnership-driven model ensures every solution we design is
              transparent, reliable, and tailored to your unique business
              context.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden  p-2 w-full lg:w-1/2">
            <Image
              src={Core}
              alt="core"
              className="w-full  object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2">
            <div className="rounded-xl overflow-hidden  p-2">
              <Image
                src={Seamless}
                alt="seamless"
                className="w-full  object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="mt-6 w-full lg:w-1/2">
            <h3 className="text-4xl font-bold mb-4 text-[#031119] dark:text-white">
              Seamless Integration
            </h3>
            <p className="text-base max-w-xl text-[#999999]">
              AI should enhance your operations—not disrupt them. Our solutions
              are designed to integrate smoothly with existing systems, tools,
              and workflows. This ensures adoption is effortless, processes
              remain efficient, and your team can immediately leverage the
              benefits without unnecessary friction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
