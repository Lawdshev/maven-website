"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Brain, Cpu, Network, Code } from "lucide-react";

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

export default function CapabilitiesSection() {
  return (
    <motion.section
      className="w-full relative mx-auto px-6 md:px-12 py-20 lg:py-32"
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
                We empower systems to handle repetitive tasks, freeing your team
                to focus on{" "}
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
                We empower systems to handle repetitive tasks, freeing your team
                to focus on{" "}
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
  );
}
