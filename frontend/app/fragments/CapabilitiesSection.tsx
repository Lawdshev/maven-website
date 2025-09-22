"use client";

import React from "react";
import Image from "next/image";
import { Zap, Brain, Cpu, Network, Code, ArrowRight } from "lucide-react";

export default function CapabilitiesSection() {
  return (
    <section className="w-full relative mx-auto px-6 md:px-12 py-20 lg:py-32 border-b border-gray-200">
      {/* Section Background */}
      <div className="absolute inset-0 rounded-3xl blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1780px]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#0054AA] mb-6 text-xl font-medium">
            {/* <Code className=" mr-2" style={{ color: "#0054AA" }} /> */}
            <span className=" " style={{ color: "#0054AA" }}>
              Engineering Excellence
            </span>
          </div>
          <p className="text-xl text-black max-w-4xl mx-auto leading-relaxed mb-4">
            We engineer AI systems that{" "}
            <span className="font-bold" style={{ color: "#0054AA" }}>
              think, decide, and adapt
            </span>{" "}
            — not just react to predefined scenarios.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="space-y-20">
          {/* First Row - Image Left, Content Right */}
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            <div className="order-2 lg:order-1">
              <div className="relative h-full">
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&crop=center"
                  alt="AI Automation"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl"></div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-gray-100/70 backdrop-blur-sm rounded-2xl p-10 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-normal text-black mb-4">
                  Autonomous Operations
                </h3>
                <p className="text-black mb-6 leading-relaxed text-lg">
                  Transform your operations with AI that works independently,
                  making intelligent decisions without constant human oversight.
                </p>
                <p className="text-black mb-8 leading-relaxed text-sm">
                  Our systems{" "}
                  <span className="font-semibold" style={{ color: "#0054AA" }}>
                    learn, adapt, and optimize
                  </span>{" "}
                  in real-time, delivering consistent results while your team
                  focuses on strategic initiatives.
                </p>
                <ul className="space-y-6">
                  {[
                    {
                      text: "Self-healing infrastructure that fixes issues automatically",
                      icon: Zap,
                      color: "text-[#0054AA]",
                    },
                    {
                      text: "Intelligent scaling that adapts to demand patterns",
                      icon: Cpu,
                      color: "text-[#0054AA]",
                    },
                    {
                      text: "Autonomous decision-making for complex workflows",
                      icon: Network,
                      color: "text-[#0054AA]",
                    },
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-black"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 text-[#0054aa]" />
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Second Row - Content Left, Image Right */}
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            <div className="order-1">
              <div className="bg-gray-100/70 backdrop-blur-sm rounded-2xl p-10 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-normal text-black mb-4">
                  Intelligent Adaptation
                </h3>
                <p className="text-black mb-6 leading-relaxed text-lg">
                  Our AI systems don't just execute tasks—they continuously
                  evolve and improve their performance based on real-world
                  feedback and changing conditions.
                </p>
                <p className="text-black mb-8 leading-relaxed text-sm">
                  Built with{" "}
                  <span className="font-semibold" style={{ color: "#0054AA" }}>
                    advanced learning algorithms
                  </span>{" "}
                  that enable true autonomous intelligence, reducing your
                  operational overhead while maximizing efficiency.
                </p>
                <ul className="space-y-6">
                  {[
                    {
                      text: "Dynamic task allocation that optimizes resource usage",
                      icon: Brain,
                      color: "text-[#0054AA]",
                    },
                    {
                      text: "Continuous learning from operational data patterns",
                      icon: Cpu,
                      color: "text-[#0054AA]",
                    },
                    {
                      text: "Predictive maintenance that prevents issues before they occur",
                      icon: Network,
                      color: "text-[#0054AA]",
                    },
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-black"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 text-[#0054aa]" />
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="order-2">
              <div className="relative h-full">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center"
                  alt="AI Innovation"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tl from-purple-600/20 to-pink-600/20 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
