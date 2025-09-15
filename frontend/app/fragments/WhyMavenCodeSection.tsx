"use client";

import React from "react";
import { Zap, Brain, Network, Cpu } from "lucide-react";

export default function WhyMavenCodeSection() {
  const features = [
    {
      title: "Real-time responsiveness",
      text: "Systems that process millions...",
      icon: Zap,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      title: "Systems that evolve",
      text: "AI agents learn from interactions...",
      icon: Brain,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      title: "Decision-making at the edge",
      text: "Local processing for faster...",
      icon: Network,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      title: "Human-AI collaboration",
      text: "Interfaces for seamless interaction...",
      icon: Cpu,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
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
            <Zap className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-blue-700 font-mono text-sm">
              Why MavenCode?
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-slate-800">Not Automation.</span>
            <br />
            <span className="text-blue-600">Actual Autonomy.</span>
          </h1>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Automation solves tasks. Autonomy enables choices...
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col justify-between p-8 ${item.bgColor} border ${item.borderColor} rounded-2xl relative overflow-hidden group shadow-sm hover:shadow-lg transition-shadow duration-300`}
            >
              <div className="relative z-10">
                <div className="min-h-[200px]">
                  <h3 className="text-2xl font-bold mb-6 text-slate-800 hover:text-blue-600 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {item.text}
                  </p>
                </div>

                <div className="mt-8 flex justify-center">
                  <item.icon className={`w-12 h-12 ${item.iconColor}`} />
                </div>
              </div>

              <div className="absolute top-4 right-4 w-3 h-3 bg-blue-500 rounded-full opacity-60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
