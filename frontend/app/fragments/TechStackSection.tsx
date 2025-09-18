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
    {
      title: "AWS Infrastructure",
      description:
        "Scalable, secure cloud infrastructure leveraging Amazon Web Services ecosystem.",
      icon: Database,
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop&crop=center",
      features: ["EC2 & ECS", "RDS & DynamoDB", "Lambda & API Gateway"],
    },
    {
      title: "Google Cloud",
      description:
        "Advanced AI and analytics capabilities powered by Google Cloud Platform.",
      icon: Cpu,
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center",
      features: ["BigQuery", "Vertex AI", "Cloud Functions"],
    },
    {
      title: "Azure Services",
      description:
        "Enterprise-grade solutions with Microsoft Azure's comprehensive cloud platform.",
      icon: Shield,
      image:
        "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop&crop=center",
      features: ["Azure ML", "Cosmos DB", "Azure Functions"],
    },
  ];

  return (
    <section className="w-full mx-auto px-6 md:px-12 py-20 lg:py-32 bg-white">
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
            className="inline-flex items-center px-4 py-2 rounded-full border border-[#0054AA] mb-6"
            variants={fadeUp}
          >
            <Terminal className="w-4 h-4 mr-2 text-[#0054AA]" />
            <span className="font-mono text-sm text-[#0054AA]">Tech Stack</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-normal mb-6">
            <span className="text-black">What We Build</span>
          </h2>

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
            <motion.div
              key={i}
              className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group hover:border-[#0054aa]"
              variants={fadeUp}
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#0054aa]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 rounded-full bg-white/90">
                    <item.icon className="w-8 h-8 text-[#0054aa]" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-normal mb-4 text-black group-hover:text-[#0054aa] transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-black mb-6 leading-relaxed text-sm">
                  {item.description}
                </p>

                <div className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 text-[#0054aa]" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
