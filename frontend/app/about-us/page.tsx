"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Target,
  Shield,
  Lightbulb,
  Users,
  Zap,
  RefreshCw,
  Layers,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function AboutPage() {
  const commitments = [
    {
      title: "Impact that lasts",
      description: "Solutions that adapt and scale with your needs",
      icon: Target,
    },
    {
      title: "Integrity in execution",
      description: "Clear, transparent processes from start to finish",
      icon: Shield,
    },
    {
      title: "Innovation with purpose",
      description: "AI that solves real problems, not just creates hype",
      icon: Lightbulb,
    },
  ];

  const workingMethods = [
    {
      title: "Co-creation",
      description:
        "Working alongside your teams to align technology with business goals",
      icon: Users,
    },
    {
      title: "Agility",
      description: "Rapid prototyping, testing, and scaling for faster results",
      icon: Zap,
    },
    {
      title: "Integration",
      description: "Solutions designed to fit seamlessly into your systems",
      icon: Layers,
    },
    {
      title: "Continuous improvement",
      description: "AI that learns, adapts, and grows with your business",
      icon: RefreshCw,
    },
  ];

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className=" text-black max-w-[1780px] w-[95%] mx-auto font-normal">
      {/* Hero Section */}
      <motion.main
        className="w-full min-h-[500px] bg-[#0054aa] text-white px-6 md:px-12 py-16 "
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="max-w-[750px]">
          <div className="text-sm text-blue-200 mb-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            / About Us
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-6xl  lg:leading-[70px] mb-6 font-normal">
            We help organizations transform
            <br />
            <span className="text-blue-200">
              ambition into AI-powered results
            </span>
          </h1>
          <p className="text-xl text-black mb-8 max-w-2xl leading-[35px] text-white">
            At MavenCode, technology is more than systems and software—it’s a
            force for meaningful change. We blend strategy, engineering, and AI
            to help clients innovate, scale, and lead with confidence.
          </p>
        </div>
      </motion.main>

      {/* Our Commitment */}
      <motion.section
        className="w-full mx-auto px-6 md:px-12 py-16 border-t border-gray-200"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className=" flex flex-col gap-3 justify-between">
          <motion.div className="max-w-[650px]" variants={fadeUp}>
            <h2 className="text-4xl mb-6 text-[#0054aa] font-normal">
              Our Commitment
            </h2>
            <p className="text-xl leading-[35px]  text-black -700 ">
              We measure success by outcomes. Every solution we design is built
              to deliver measurable value, resilience, and new opportunities.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-200 divide-x divide-gray-200 min-h-[300px] max-w-[1200px] mt-[20px]">
            {commitments.map((c, i) => (
              <motion.div key={i} className="p-8" variants={fadeUp}>
                <c.icon className="h-8 w-8 text-[#0054aa] mb-4" />
                <h3 className="text-xl mb-2 font-normal">{c.title}</h3>
                <p className=" text-black -600 text-lg leading-[30px]">
                  {c.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* How We Work */}
      <motion.section
        className="w-full mx-auto px-6 md:px-12 py-16 border-t border-gray-200"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className=" flex gap-3 justify-between">
          <motion.div variants={fadeUp}>
            <h2 className="text-4xl mb-6 text-[#0054aa] font-normal">
              How We Work
            </h2>
            <p className="text-xl  text-black -700 mb-12 max-w-3xl leading-[35px]">
              We work as partners, not just providers. Our approach combines:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-200 divide-x divide-y divide-gray-200">
            {workingMethods.map((m, i) => (
              <motion.div
                key={i}
                className="p-8 flex items-start space-x-4 min-h-[300px]"
                variants={fadeUp}
              >
                <m.icon className="h-7 w-7 text-[#0054aa] flex-shrink-0" />
                <div>
                  <h3 className="text-xl mb-1 font-normal">{m.title}</h3>
                  <p className=" text-black -600 text-lg leading-[30px]">
                    {m.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Who We Are */}
      <motion.section
        className="w-full mx-auto px-6 md:px-12 py-16 border-t border-gray-200"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl mb-6 text-[#0054aa] font-normal">
              Who We Are
            </h2>
          </div>
          <div>
            <p className="text-xl  text-black -700 leading-[35px] mb-6">
              We are engineers, strategists, and problem solvers. Our mission is
              to create AI systems that bring real impact—not just buzzwords.
            </p>
            <p className="text-xl  text-black -700 leading-[35px]">
              With a commitment to transparency, scalability, and human
              collaboration, we make AI practical, reliable, and built for the
              future.
            </p>
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.div
        className="my-12 bg-gray-50 border border-gray-200  p-8 rounded-none flex flex-col md:flex-row text-lg items-center justify-between"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="flex-1 mb-4 md:mb-0">
          <h4 className="font-semibold text-3xl mb-2 text-black -900">
            Let's Shape Your AI Future
          </h4>
          <p className="text-xl  text-black -700 leading-[35px] max-w-3xl">
            Talk to our experts and discover how MavenCode can help you design,
            build, and scale AI solutions that transform your business.
          </p>
        </div>
        <Link href="/contact-us">
          <Button
            variant="outline"
            className="bg-[#0054aa] hover:bg-[#003d7f] text-white text-xl rounded-none w-fit px-6 py-6 md:min-w-[200px]"
          >
            Contact Us
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
