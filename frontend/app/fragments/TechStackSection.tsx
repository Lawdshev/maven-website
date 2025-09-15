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
      text: "Scalable compute...",
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
      <div className="absolute inset-0 rounded-3xl blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 border border-blue-300 mb-6">
            <Terminal className="w-4 h-4 mr-2" style={{ color: "#0054AA" }} />
            <span className="font-mono text-sm" style={{ color: "#0054AA" }}>
              Tech Stack
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-slate-800">What We Build</span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From adaptive AI agents to cloud-native infrastructure...
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techItems.map((item, i) => (
            <div
              key={i}
              className={`p-8 ${item.color} border ${item.borderColor} rounded-2xl relative overflow-hidden group shadow-sm hover:shadow-lg transition-shadow duration-300`}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={48}
                      height={48}
                      className="rounded-lg"
                    />
                  </div>
                  <item.icon className="w-6 h-6" style={{ color: "#0054AA" }} />
                </div>

                <h3
                  className="text-2xl font-bold mb-4 text-slate-800 transition-colors duration-200"
                  style={{ "--hover-color": "#0054AA" } as React.CSSProperties}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#0054AA")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#1e293b")
                  }
                >
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">{item.text}</p>
              </div>

              <div
                className="absolute top-4 right-4 w-3 h-3 rounded-full opacity-60"
                style={{ backgroundColor: "#0054AA" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
