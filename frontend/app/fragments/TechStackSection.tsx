"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Brain,
  Cpu,
  Network,
  Terminal,
  Database,
  Cloud,
  Shield,
} from "lucide-react";

// Animation helpers
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const pulse = {
  hidden: { scale: 1 },
  visible: {
    scale: [1, 1.05, 1],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" as const },
  },
};

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
    <motion.section
      className="w-full mx-auto px-6 md:px-12 py-20 lg:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
    >
      {/* Section Background */}
      <div className="absolute inset-0 bg-blue-50/60 rounded-3xl blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={fadeUp}>
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 border border-blue-300 mb-6"
            variants={fadeUp}
          >
            <Terminal className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-blue-700 font-mono text-sm">Tech Stack</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-slate-800">What We Build</span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From adaptive AI agents to cloud-native infrastructure...
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techItems.map((item, i) => (
            <motion.div
              transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }}
              key={i}
              className={`p-8 ${item.color} border ${item.borderColor} rounded-2xl relative overflow-hidden group shadow-sm`}
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
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    variants={pulse}
                    initial="hidden"
                    animate="visible"
                    className="relative"
                  >
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={48}
                      height={48}
                      className="rounded-lg"
                    />
                  </motion.div>
                  <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                </div>

                <motion.h3
                  className="text-2xl font-bold mb-4 text-slate-800"
                  whileHover={{ color: "#2563eb" }}
                  transition={{ duration: 0.2 }}
                >
                  {item.title}
                </motion.h3>

                <p className="text-slate-600 leading-relaxed">{item.text}</p>
              </div>

              <motion.div
                className={`absolute top-4 right-4 w-3 h-3 ${item.iconColor.replace(
                  "text-",
                  "bg-"
                )} rounded-full opacity-60`}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
