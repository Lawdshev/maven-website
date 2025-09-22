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
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function TechStackSection() {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };

  const techItems = [
    {
      title: "AI Agents",
      description:
        "Intelligent autonomous systems that learn, adapt, and make decisions in real-time environments.",
      icon: Brain,
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center",
      features: [
        "Machine Learning",
        "Natural Language Processing",
        "Computer Vision",
      ],
    },
    {
      title: "Real-Time Pipelines",
      description:
        "High-performance data processing systems that handle massive volumes with millisecond latency.",
      icon: Network,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
      features: [
        "Stream Processing",
        "Event-Driven Architecture",
        "Auto-scaling",
      ],
    },
    {
      title: "Cloud Native",
      description:
        "Containerized, microservices-based applications designed for cloud environments.",
      icon: Cloud,
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center",
      features: ["Kubernetes", "Docker", "Serverless Functions"],
    },
  ];

  return (
    <section className="w-full mx-auto px-6 md:px-12 py-20 lg:py-32 bg-white border-b">
      <div className="relative z-10 mx-auto max-w-[1780px]">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full border text-xl border-[#0054AA] mb-6"
            variants={fadeUp}
          >
            <span className="font-medium text-[#0054AA]">Tech Stack</span>
          </motion.div>

          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Cutting-edge technology stack designed for scale, performance, and
            innovation
          </p>
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          {techItems.map((item, i) => (
            <motion.div key={i} className="text-center group" variants={fadeUp}>
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="w-full h-[250px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#0054aa]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <item.icon className="h-16 w-16 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-normal mb-4 text-[#0054aa]">
                {item.title}
              </h3>
              <p className="text-lg leading-[30px] text-black">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
