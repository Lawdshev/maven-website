"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Zap,
  Brain,
  Cpu,
  Network,
  Code,
  Terminal,
  Database,
  Cloud,
  Shield,
} from "lucide-react";
import { motion } from "framer-motion";
import { Modal } from "antd";
import ContactForm from "./contact-us/contact-form";

// Animation helpers
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
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

const glow = {
  hidden: { boxShadow: "0 0 0px rgba(0, 84, 170, 0)" },
  visible: {
    boxShadow: "0 0 20px rgba(0, 84, 170, 0.3), 0 0 40px rgba(0, 84, 170, 0.1)",
    transition: { duration: 1.5, repeat: Infinity, repeatType: "reverse" },
  },
};

const techFloat = {
  hidden: { y: 0 },
  visible: {
    y: [-5, 5, -5],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" as const },
  },
};

export default function Component() {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100 relative overflow-hidden">
      {/* Enhanced Tech Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-grid-pattern" />
        </div>

        {/* Floating Code Elements */}
        <motion.div
          className="absolute top-20 left-10 text-blue-600 font-mono text-xs opacity-40"
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {"<AI />"}
        </motion.div>

        <motion.div
          className="absolute top-40 right-20 text-blue-500 font-mono text-xs opacity-30"
          animate={{
            x: [0, -80, 0],
            y: [0, 30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          {"{code}"}
        </motion.div>

        <motion.div
          className="absolute bottom-40 left-20 text-blue-600 font-mono text-xs opacity-35"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            opacity: [0.35, 0.7, 0.35],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          {"function()"}
        </motion.div>

        {/* Enhanced Particle System */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              i % 3 === 0
                ? "bg-blue-500"
                : i % 3 === 1
                ? "bg-blue-400"
                : "bg-blue-600"
            }`}
            style={{
              top: `${20 + i * 7}%`,
              left: `${10 + i * 8}%`,
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="max-w-[1780px] mx-auto w-[95%] relative z-10">
        {/* HERO SECTION - Modern Tech Layout */}
        <main className="w-full min-h-screen flex items-center justify-center px-6 md:px-12 py-16 relative">
          {/* Hero Background with Tech Elements */}
          <div className="absolute inset-0 bg-blue-50/50 rounded-3xl blur-3xl" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl w-full relative z-10">
            {/* Hero Text Content */}
            <motion.div
              transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }}
              className="lg:col-span-1 flex flex-col justify-center space-y-8"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              {/* Tech Badge */}
              <motion.div
                className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 border border-[#0553a9] w-fit"
                variants={fadeUp}
              >
                <Code className="w-4 h-4 text-[#0553a9] mr-2" />
                <span className="text-[#0553a9] font-mono text-sm">
                  AI Engineering
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl xl:text-6xl font-bold "
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-slate-800 leading-tight">
                  Turning AI Into Your
                </span>
                <br />
                <span className="text-[#0553a9] leading-tight">
                  Competitive Edge
                </span>
                <br />
                <span className="text-slate-600 text-2xl md:text-3xl lg:text-4xl font-normal ">
                  Less hand-holding. <br /> More momentum.
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-slate-600 max-w-2xl leading-relaxed"
                variants={fadeUp}
              >
                We build autonomous systems that think, decide, and execute,
                from real-time pipelines to self-improving AI agents.
                Intelligence that moves faster, with less human effort.
              </motion.p>

              {/* Tech Stack Preview */}
              <motion.div className="flex flex-wrap gap-4" variants={fadeUp}>
                {[
                  { icon: Terminal, label: "DevOps" },
                  { icon: Database, label: "Data" },
                  { icon: Cloud, label: "Cloud" },
                  { icon: Shield, label: "Security" },
                ].map((tech, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center px-4 py-2 bg-white border border-blue-200 rounded-lg shadow-sm"
                    whileHover={{
                      scale: 1.05,
                      borderColor: "rgba(59, 130, 246, 0.5)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <tech.icon className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-slate-700 text-sm">{tech.label}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }}
                variants={fadeUp}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div
                  transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button
                    className="font-normal md:min-w-[300px] w-fit rounded-lg bg-[#0553a9] hover:bg-[#0553a9] cursor-pointer text-lg text-white px-8 py-6 flex items-center justify-center relative overflow-hidden group shadow-lg"
                    onClick={() => setOpen(true)}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <span className="relative z-10 flex items-center">
                      Talk to an Engineer
                      <motion.div
                        animate={{ x: isHovered ? 5 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </motion.div>
                    </span>
                  </Button>
                </motion.div>
                {/* 
                <motion.div
                  className="flex items-center px-6 py-6 border border-slate-600/50 rounded-lg bg-slate-800/30 backdrop-blur-sm cursor-pointer"
                  whileHover={{
                    scale: 1.02,
                    borderColor: "rgba(59, 130, 246, 0.5)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <GitBranch className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-gray-300">View Our Work</span>
                </motion.div> */}
              </motion.div>
            </motion.div>

            {/* Hero Visual - Enhanced AI Brain */}
            <motion.div
              transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }}
              className="lg:col-span-1 relative flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="relative w-full max-w-lg">
                {/* Enhanced Background Glow */}
                <motion.div
                  className="absolute inset-0 bg-blue-100/40 rounded-3xl blur-3xl"
                  animate={{
                    opacity: [0.4, 0.7, 0.4],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />

                {/* Main AI Brain Image */}
                <motion.div
                  className="relative z-10"
                  variants={techFloat}
                  initial="hidden"
                  animate="visible"
                >
                  <Image
                    src="/ai-brain.webp"
                    width={0}
                    height={0}
                    alt="AI Brain"
                    className="w-full h-auto drop-shadow-2xl"
                  />
                </motion.div>

                {/* Floating Tech Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Brain className="w-4 h-4 text-white" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <Cpu className="w-3 h-3 text-white" />
                </motion.div>

                {/* Circuit Pattern Overlay */}
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full" viewBox="0 0 400 400">
                    <defs>
                      <pattern
                        id="circuit"
                        x="0"
                        y="0"
                        width="40"
                        height="40"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M0 20h40M20 0v40"
                          stroke="currentColor"
                          strokeWidth="1"
                          fill="none"
                          className="text-blue-500"
                        />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#circuit)" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </main>

        {/* CAPABILITIES SECTION - Modern Tech Layout */}
        <motion.section
          className="w-full relative mx-auto px-6 md:px-12 py-20 lg:py-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {/* Section Background */}
          <div className="absolute inset-0 bg-blue-50/80 rounded-3xl blur-3xl" />

          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div className="text-center mb-16" variants={fadeUp}>
              <motion.div
                className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 border border-blue-300 mb-6"
                variants={fadeUp}
              >
                <Code className="w-4 h-4 text-blue-600 mr-2" />
                <span className="text-blue-700 font-mono text-sm">
                  Engineering Excellence
                </span>
              </motion.div>

              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-slate-800">Built for Autonomy.</span>
                <br />
                <span className="text-blue-600">Designed for Impact.</span>
              </h2>

              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                We engineer AI systems that{" "}
                <span className="text-blue-600 font-semibold">
                  think, decide, and adapt
                </span>{" "}
                not just react...
              </p>
            </motion.div>

            {/* Capabilities Grid */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column */}
              <motion.div
                transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }}
                variants={fadeUp}
                className="space-y-8"
              >
                <div className="bg-white border border-blue-200 rounded-2xl p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">
                    Core Capabilities
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                    This isn't about chasing abstract AI dreams...
                  </p>
                  <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                    We empower systems to handle repetitive tasks, freeing your
                    team to focus on{" "}
                    <span className="text-blue-600 font-semibold">
                      innovation, strategy, and human brilliance
                    </span>
                    .
                  </p>
                  <ul className="space-y-6">
                    {[
                      {
                        text: "Reduce friction",
                        icon: Zap,
                        color: "text-yellow-400",
                      },
                      {
                        text: "Scale at speed",
                        icon: Cpu,
                        color: "text-blue-400",
                      },
                      {
                        text: "Operate with minimal manual intervention",
                        icon: Network,
                        color: "text-green-400",
                      },
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        whileHover={{ x: 10, scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center group cursor-pointer text-slate-600 hover:text-slate-800 transition-colors duration-200 text-lg"
                      >
                        <motion.div
                          className={`mr-4 ${item.color}`}
                          animate={{ rotate: [0, 360] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 0.5,
                          }}
                        >
                          <item.icon size={24} />
                        </motion.div>
                        {item.text}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Right Column */}
              <motion.div
                transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }}
                variants={fadeUp}
                className="space-y-8"
              >
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">
                    Innovation Focus
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                    This isn't about chasing abstract AI dreams...
                  </p>
                  <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                    We empower systems to handle repetitive tasks, freeing your
                    team to focus on{" "}
                    <span className="text-blue-600 font-semibold">
                      innovation, strategy, and human brilliance
                    </span>
                    .
                  </p>
                  <ul className="space-y-6">
                    {[
                      {
                        text: "Adaptive agents for evolving tasks",
                        icon: Brain,
                        color: "text-purple-400",
                      },
                      {
                        text: "Self-learning models that grow smarter",
                        icon: Cpu,
                        color: "text-cyan-400",
                      },
                      {
                        text: "Scalable infrastructure built for speed",
                        icon: Network,
                        color: "text-green-400",
                      },
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        whileHover={{ x: 10, scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center group cursor-pointer text-slate-600 hover:text-slate-800 transition-colors duration-200 text-lg"
                      >
                        <motion.div
                          className={`mr-4 ${item.color}`}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.3,
                          }}
                        >
                          <item.icon size={24} />
                        </motion.div>
                        {item.text}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Call to Action Banner */}
            <motion.div
              transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }}
              className="mt-16 bg-blue-100 border border-blue-300 rounded-2xl p-8"
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                  <motion.div
                    variants={pulse}
                    initial="hidden"
                    animate="visible"
                    className="relative"
                  >
                    <Image
                      src="/talk.png"
                      alt="Transform with Us"
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                  </motion.div>
                  <div>
                    <motion.h4 className="text-3xl font-bold text-slate-800 mb-2">
                      Transform with Us
                    </motion.h4>
                    <p className="text-slate-600 text-lg">
                      Unlock autonomy and measurable impact...
                    </p>
                  </div>
                </div>

                <motion.a
                  href="#"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 min-w-[300px] flex items-center justify-center rounded-xl relative overflow-hidden group shadow-lg"
                >
                  <span className="relative z-10 flex items-center text-lg font-semibold">
                    Get Started
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.div>
                  </span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* TECH STACK SECTION */}
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
                <span className="text-blue-700 font-mono text-sm">
                  Tech Stack
                </span>
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
              {[
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
              ].map((item, i) => (
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

                    <p className="text-slate-600 leading-relaxed">
                      {item.text}
                    </p>
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

        {/* WHY MAVENCODE SECTION */}
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
              {[
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
              ].map((item, i) => (
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

        <Modal
          open={open}
          onCancel={() => setOpen(false)}
          footer={null}
          className="contact-modal-wrapper"
          style={{ top: 20 }}
        >
          <ContactForm />
        </Modal>
      </div>
    </div>
  );
}
