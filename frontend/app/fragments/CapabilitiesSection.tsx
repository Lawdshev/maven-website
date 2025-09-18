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
        <div className="text-center mb-5">
          <div className="inline-flex items-center px-4 py-2 rounded-full  border border-[#0054AA] mb-6">
            <Code className="w-4 h-4 mr-2" style={{ color: "#0054AA" }} />
            <span className="font-mono text-sm" style={{ color: "#0054AA" }}>
              Engineering Excellence
            </span>
          </div>

          <div className="mb-8">
            <Image
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop&crop=center"
              alt="AI Engineering"
              width={800}
              height={400}
              className="mx-auto  shadow-lg"
            />
          </div>

          <h2 className="text-3xl md:text-4xl font-medium mb-6 leading-relaxed">
            <span className="text-black -800">Built for Autonomy.</span>
            <br />
            <span style={{ color: "#0054AA" }}>Designed for Impact.</span>
          </h2>

          <p className="text-xl text-black -600 max-w-3xl mx-auto leading-relaxed">
            We engineer AI systems that{" "}
            <span className="font-semibold" style={{ color: "#0054AA" }}>
              think, decide, and adapt
            </span>{" "}
            not just react...
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="space-y-16">
          {/* First Row - Image Left, Content Right */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&crop=center"
                alt="AI Automation"
                width={600}
                height={400}
                className=" shadow-lg w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-white border border-[#0054aa]  p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-black -800 mb-6">
                  Core Capabilities
                </h3>
                <p className="text-black -600 mb-6 leading-relaxed text-xl ">
                  This isn't about chasing abstract AI dreams...
                </p>
                <p className="text-black -600 mb-8 leading-relaxed text-xl ">
                  We empower systems to handle repetitive tasks, freeing your
                  team to focus on{" "}
                  <span className="font-semibold" style={{ color: "#0054AA" }}>
                    innovation, strategy, and human brilliance
                  </span>
                  .
                </p>
                <ul className="space-y-6">
                  {[
                    {
                      text: "Reduce friction",
                      icon: Zap,
                      color: "text-black",
                    },
                    {
                      text: "Scale at speed",
                      icon: Cpu,
                      color: "text-black",
                    },
                    {
                      text: "Operate with minimal manual intervention",
                      icon: Network,
                      color: "text-black",
                    },
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center group cursor-pointer text-black -600 hover:text-black -800 transition-colors duration-200 text-xl "
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-1">
              <div className="border border-[#0054aa]  p-8">
                <h3 className="text-2xl font-bold text-black -800 mb-6">
                  Innovation Focus
                </h3>
                <p className="text-black -600 mb-6 leading-relaxed text-xl ">
                  This isn't about chasing abstract AI dreams...
                </p>
                <p className="text-black -600 mb-8 leading-relaxed text-xl ">
                  We empower systems to handle repetitive tasks, freeing your
                  team to focus on{" "}
                  <span className="font-semibold" style={{ color: "#0054AA" }}>
                    innovation, strategy, and human brilliance
                  </span>
                  .
                </p>
                <ul className="space-y-6">
                  {[
                    {
                      text: "Adaptive agents for evolving tasks",
                      icon: Brain,
                      color: "text-black",
                    },
                    {
                      text: "Self-learning models that grow smarter",
                      icon: Cpu,
                     color: "text-black",
                    },
                    {
                      text: "Scalable infrastructure built for speed",
                      icon: Network,
                      color: "text-black",
                    },
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center group cursor-pointer text-black -600 hover:text-black -800 transition-colors duration-200 text-xl "
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
              <Image
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop&crop=center"
                alt="AI Innovation"
                width={600}
                height={400}
                className=" shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
