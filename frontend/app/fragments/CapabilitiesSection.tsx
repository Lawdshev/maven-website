"use client";

import React from "react";
import Image from "next/image";
import { Zap, Brain, Cpu, Network, Code } from "lucide-react";

export default function CapabilitiesSection() {
  return (
    <section className="w-full relative mx-auto px-6 md:px-12 py-20 lg:py-32">
      {/* Section Background */}
      <div className="absolute inset-0 rounded-3xl blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1780px]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#0054AA] mb-6">
            <Code className="w-4 h-4 mr-2" style={{ color: "#0054AA" }} />
            <span className="font-mono text-sm" style={{ color: "#0054AA" }}>
              Engineering Excellence
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-8 leading-tight">
            <span className="text-gray-900">Built for</span>
            <br />
            <span style={{ color: "#0054AA" }}>Autonomy.</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-4">
            We engineer AI systems that{" "}
            <span className="font-bold" style={{ color: "#0054AA" }}>
              think, decide, and adapt
            </span>{" "}
            — not just react to predefined scenarios.
          </p>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From autonomous decision-making to self-healing infrastructure, our
            solutions evolve with your business needs.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="space-y-20">
          {/* First Row - Image Left, Content Right */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&crop=center"
                  alt="AI Automation"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl"></div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-white border border-[#0054aa] rounded-2xl p-10 shadow-xl h-full flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Autonomous Operations
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  Transform your operations with AI that works independently,
                  making intelligent decisions without constant human oversight.
                </p>
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
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
                      className="flex items-center group cursor-pointer text-gray-700 hover:text-gray-900 transition-colors duration-200 text-lg"
                    >
                      <div className={`mr-4 ${item.color}`}>
                        <item.icon size={24} />
                      </div>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Second Row - Content Left, Image Right */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-1">
              <div className="bg-white border border-[#0054aa] rounded-2xl p-10 shadow-xl h-full flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Intelligent Adaptation
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  Our AI systems don't just execute tasks—they continuously
                  evolve and improve their performance based on real-world
                  feedback and changing conditions.
                </p>
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
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
                      className="flex items-center group cursor-pointer text-gray-700 hover:text-gray-900 transition-colors duration-200 text-lg"
                    >
                      <div className={`mr-4 ${item.color}`}>
                        <item.icon size={24} />
                      </div>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="order-2">
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop&crop=center"
                  alt="AI Innovation"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl shadow-xl"
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
