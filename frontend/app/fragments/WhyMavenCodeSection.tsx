"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Brain, Network, Cpu } from "lucide-react";

// Animation helpers
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

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
    <motion.section
      className="w-full mx-auto px-6 md:px-12 py-20 lg:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
    >
      {/* Section Background */}
      <div className="absolute inset-0 rounded-3xl blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={fadeUp}>
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 border border-blue-300 mb-6"
            variants={fadeUp}
          >
            <Zap className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-blue-700 font-mono text-sm">
              Why MavenCode?
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-slate-800">Not Automation.</span>
            <br />
            <span className="text-blue-600">Actual Autonomy.</span>
          </h1>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Automation solves tasks. Autonomy enables choices...
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={stagger}
        >
          {features.map((item, i) => (
            <motion.div
              transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }}
              key={i}
              className={`flex flex-col justify-between p-8 ${item.bgColor} border ${item.borderColor} rounded-2xl relative overflow-hidden group shadow-sm`}
              variants={fadeUp}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                scale: 1.05,
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"
                animate={{
                  opacity: [0, 0.4, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.8,
                }}
              />

              <div className="relative z-10">
                <div className="min-h-[200px]">
                  <motion.h3
                    className="text-2xl font-bold mb-6 text-slate-800"
                    whileHover={{ color: "#2563eb" }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.title}
                  </motion.h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {item.text}
                  </p>
                </div>

                <motion.div
                  className="mt-8 flex justify-center"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                >
                  <item.icon className={`w-12 h-12 ${item.iconColor}`} />
                </motion.div>
              </div>

              <motion.div
                className="absolute top-4 right-4 w-3 h-3 bg-blue-500 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.4,
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
