"use client";

import React from "react";
import Image from "next/image";
import {
  Brain,
  Cpu,
  Network,
  Terminal,
  Database,
  Cloud,
  Shield,
} from "lucide-react";

export default function TechStackSection() {
  const techItems = [
    {
      img: "/platform.png",
      title: "AI Agents",
      text: "Lightweight and adaptive components...",
      color: "bg-blue-50",
      borderColor: "border-blue-200",
      icon: Brain,
      iconColor: "text-blue-600",
    },
    {
      img: "/apps.png",
      title: "Real-Time Pipelines",
      text: "Systems built for growth...",
      color: "bg-blue-50",
      borderColor: "border-blue-200",
      icon: Network,
      iconColor: "text-blue-600",
    },
    {
      img: "/models.png",
      title: "Cloud Native",
      text: "Optimized for accuracy...",
      color: "bg-blue-50",
      borderColor: "border-blue-200",
      icon: Cloud,
      iconColor: "text-blue-600",
    },
    {
      img: "/aws.png",
      title: "AWS",
      text: "Reliable infrastructure...",
      color: "bg-blue-50",
      borderColor: "border-blue-200",
      icon: Database,
      iconColor: "text-blue-600",
    },
    {
      img: "/google-cloud.jpg",
      title: "Google Cloud",
      text: "Scalable computer...",
      color: "bg-blue-50",
      borderColor: "border-blue-200",
      icon: Cpu,
      iconColor: "text-blue-600",
    },
    {
      img: "/azure.png",
      title: "Azure",
      text: "Enterprise-grade security...",
      color: "bg-blue-50",
      borderColor: "border-blue-200",
      icon: Shield,
      iconColor: "text-blue-600",
    },
  ];

  return (
    <section className="w-full mx-auto px-6 md:px-12 py-20 lg:py-32">
      {/* Section Background */}
      {/* <div className="absolute inset-0 rounded-3xl blur-3xl" /> */}

      <div className="relative z-10 mx-auto max-w-[1780px]">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#0054AA] mb-6">
            <Terminal className="w-4 h-4 mr-2" style={{ color: "#0054AA" }} />
            <span className="font-mono text-sm" style={{ color: "#0054AA" }}>
              Tech Stack
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            <span className=" text-black -800">What We Build</span>
          </h2>

          <p className="text-xl  text-black -600 max-w-3xl mx-auto leading-relaxed">
            From adaptive AI agents to cloud-native infrastructure...
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techItems.map((item, i) => (
            <div>
              <div className="relative z-10 text-xl flex items-center flex-col justify-center text-center">
                <item.icon
                  className={`w-[150px] h-[150px] ${item.iconColor}`}
                />

                <h3 className=" font-normal my-2 text-black ">{item.title}</h3>

                <p className="text-black">{item.text}</p>
              </div>

              {/* <div
                className={`absolute top-4 right-4 w-3 h-3 ${item.iconColor.replace(
                  "text-",
                  "bg-"
                )} rounded-full opacity-60`}
              /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
