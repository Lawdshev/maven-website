"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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

export default function Component() {
  const [open, setOpen] = useState(false);
  return (
    <div className="max-w-[1780px] mx-auto w-[95%]">
      {/* HERO */}
      <main className="w-full h-[600px] bg-center mx-auto px-6 md:px-12 py-8 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Hero text */}
        <motion.div
          transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }}
          className="lg:col-span-1 flex flex-col h-full"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.h1
            className="text-2xl md:text-3xl lg:text-6xl lg:leading-[70px] mb-4 text-[#0054aa]"
            variants={fadeUp}
          >
            Turning AI Into Your Competitive Edge Less hand-holding. More
            momentum.
          </motion.h1>

          <motion.p
            className="text-xl text-black mb-8 max-w-2xl leading-[35px]"
            variants={fadeUp}
          >
            We build autonomous systems that think, decide, and execute, from
            real-time pipelines to self-improving AI agents. Intelligence that
            moves faster, with less human effort.
          </motion.p>

          <motion.div
            transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }}
            variants={fadeUp}
          >
            <motion.div
              transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button
                className="font-normal md:min-w-[300px] w-fit rounded-none bg-[#0054aa] hover:bg-[#003d7f] cursor-pointer text-xl text-white px-6 py-6 flex items-center justify-center"
                onClick={() => setOpen(true)}
              >
                Talk to an Engineer <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Hero image */}
        <motion.div
          transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }}
          className="lg:col-span-1"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Image
            src="/ai-brain.webp"
            width={0}
            height={0}
            alt="AI Brain"
            className="w-full h-auto"
          />
        </motion.div>
      </main>

      {/* INTRO SECTION */}
      <motion.section
        className="w-full relative mx-auto px-6 md:px-12 py-12 lg:py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left */}
          <motion.div
            transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }}
            variants={fadeUp}
          >
            <h2 className="text-4xl font-normal mb-4 text-black">
              Built for Autonomy.
            </h2>
            <h3 className="text-2xl font-normal text-[#0054aa] mb-4">
              Designed for Impact.
            </h3>
            <p className="text-black mb-6 leading-[35px] text-xl">
              We engineer AI systems that{" "}
              <span className="font-normal text-black">
                think, decide, and adapt
              </span>{" "}
              not just react...
            </p>
            <ul className="space-y-4 text-xl">
              {[
                "Reduce friction",
                "Scale at speed",
                "Operate with minimal manual intervention",
              ].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-[#0054aa]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right */}
          <motion.div
            transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }}
            variants={fadeUp}
          >
            <p className="text-black mb-6 leading-[35px] text-xl">
              This isn't about chasing abstract AI dreams...
            </p>
            <p className="text-black mb-6 leading-[35px] text-xl">
              We empower systems to handle repetitive tasks, freeing your team
              to focus on{" "}
              <span className="text-[#0054aa] font-normal">
                innovation, strategy, and human brilliance
              </span>
              .
            </p>
            <ul className="space-y-4 text-xl">
              {[
                "Adaptive agents for evolving tasks",
                "Self-learning models that grow smarter",
                "Scalable infrastructure built for speed",
              ].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-[#0054aa]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Banner */}
        <motion.div
          transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }}
          className="mt-12 bg-gray-50 border border-gray-200 flex flex-col md:flex-row text-lg items-center justify-between p-6"
          variants={fadeUp}
        >
          <Image
            src="/talk.png"
            alt="Transform with Us"
            width={100}
            height={100}
            className="mb-4 md:mb-0"
          />
          <div className="flex-1 mb-4 md:mb-0 px-4">
            <h4 className="font-normal text-2xl text-black">
              Transform with Us
            </h4>
            <p className="text-black text-xl leading-[35px]">
              Unlock autonomy and measurable impact...
            </p>
          </div>
          <motion.a
            href="#"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#0054aa] text-white px-6 py-3 min-w-[300px] flex items-center justify-between"
          >
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </motion.a>
        </motion.div>
      </motion.section>

      {/* WHAT WE BUILD */}
      <motion.section
        className="w-full mx-auto px-6 md:px-12 py-12 lg:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
          {/* Left */}
          <motion.div
            transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }}
            variants={fadeUp}
          >
            <h2 className="text-2xl font-normal text-[#0054aa] mb-4">
              What We Build
            </h2>
            <p className="text-black text-xl leading-[35px] mb-6">
              From adaptive AI agents to cloud-native infrastructure...
            </p>
          </motion.div>

          {/* Right grid */}
          <motion.div
            transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-gray-200"
            variants={stagger}
          >
            {[
              {
                img: "/platform.png",
                title: "AI Agents",
                text: "Lightweight and adaptive components...",
              },
              {
                img: "/apps.png",
                title: "Real-Time Pipelines",
                text: "Systems built for growth...",
              },
              {
                img: "/models.png",
                title: "Cloud Native",
                text: "Optimized for accuracy...",
              },
              {
                img: "/aws.png",
                title: "AWS",
                text: "Reliable infrastructure...",
              },
              {
                img: "/google-cloud.jpg",
                title: "Google Cloud",
                text: "Scalable compute...",
              },
              {
                img: "/azure.png",
                title: "Azure",
                text: "Enterprise-grade security...",
              },
            ].map((item, i) => (
              <motion.div
                transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }}
                key={i}
                className="p-6 border border-gray-200"
                variants={fadeUp}
                whileHover={{ y: -5, boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="mb-4"
                />
                <h3 className="text-2xl font-normal mb-2">{item.title}</h3>
                <p className="text-xl text-black">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* WHY MAVENCODE */}
      <motion.section
        className="w-full mx-auto px-6 md:px-12 py-12 lg:py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        <motion.div
          transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }}
          variants={fadeUp}
        >
          <h1 className="text-3xl font-normal mb-6 text-[#0054aa]">
            Why MavenCode?
          </h1>
          <h2 className="text-2xl font-normal mb-4 text-[#0054aa]">
            Not Automation. Actual Autonomy.
          </h2>
          <p className="text-xl text-black mb-12 leading-[35px] max-w-3xl">
            Automation solves tasks. Autonomy enables choices...
          </p>
        </motion.div>

        <motion.div
          transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-gray-200"
          variants={stagger}
        >
          {[
            {
              title: "Real-time responsiveness",
              text: "Systems that process millions...",
              icon: "⚡",
            },
            {
              title: "Systems that evolve",
              text: "AI agents learn from interactions...",
              icon: "🧠",
            },
            {
              title: "Decision-making at the edge",
              text: "Local processing for faster...",
              icon: "🌐",
            },
            {
              title: "Human-AI collaboration",
              text: "Interfaces for seamless interaction...",
              icon: "🤝",
            },
          ].map((item, i) => (
            <motion.div
              transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }}
              key={i}
              className="flex flex-col justify-between p-6 border border-gray-200"
              variants={fadeUp}
              whileHover={{ y: -5, boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }}
            >
              <div className="min-h-[200px]">
                <h3 className="text-2xl font-normal mb-4 text-black">
                  {item.title}
                </h3>
                <p className="text-xl text-black leading-[35px]">{item.text}</p>
              </div>
              <div className="mt-6 text-[#0054aa]">{item.icon}</div>
            </motion.div>
          ))}
        </motion.div>
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
  );
}
