"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Brain,
  Cloud,
  Database,
  Users,
  Building,
  Heart,
  DollarSign,
  Zap,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Modal } from "antd";
import ContactForm from "../contact-us/contact-form";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const [open, setOpen] = useState(false);

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
      <motion.section
        className="w-full min-h-[500px] bg-[#0054aa] text-white px-6 md:px-12 py-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-sm text-blue-200 mb-4">
              <Link href="/" className="hover:underline">
                Home
              </Link>{" "}
              / Services
            </div>
            <h1 className="ttext-2xl md:text-3xl lg:text-6xl lg:leading-[70px] mb-6 font-normal">
              Transform Your Business with{" "}
              <span className="text-blue-200">AI, Cloud, and Data</span>
            </h1>
            <p className="text-xl text-blue-100 leading-[35px]  max-w-xl">
              In today’s competitive landscape, staying ahead means making
              smarter decisions, operating more efficiently, and unlocking new
              opportunities.
            </p>
            <div className="mt-8">
              <Button
                className="bg-white text-[#0054aa] text-xl border border-[#0054aa] hover:bg-blue-100 rounded-none px-6 py-6 min-w-[200px]"
                onClick={() => setOpen(true)}
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <motion.div
            className="flex justify-center lg:justify-end"
            variants={fadeUp}
          >
            <Image
              src="/ai-transformation-hero.png"
              alt="AI-powered business transformation"
              width={600}
              height={400}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Services Grid (AI + Cloud) */}
      <motion.section
        className="w-full border-b px-6 md:px-12 py-16 border-t border-gray-200"
        initial="hidden"
        id="ai-data"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gray-200 divide-x">
          {/* AI + DATA */}
          <motion.div
            className="p-10 flex flex-col justify-between min-h-[450px]"
            variants={fadeUp}
          >
            <Image
              src="/ai-data-interface.png"
              alt="AI and Data visualization"
              width={600}
              height={350}
              className="rounded-none border-none  mb-6"
            />
            <div>
              <div className="flex items-center space-x-3">
                <Brain className="h-8 w-8 text-[#0054aa]" />
                <h2 className="text-2xl font-normal text-black">AI + DATA</h2>
              </div>
              <p className="text-xl text-black leading-[35px] my-3">
                Harness the potential of artificial intelligence to solve
                industry-defining challenges.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Machine learning models tailored to retail, healthcare, finance, and energy operations",
                  "Predictive analytics to optimize decisions and anticipate trends",
                  "Natural language processing for smarter, faster interactions",
                  "AI governance to ensure fairness, transparency, and ethical deployment",
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <span className="text-black text-xl leading-[35px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* CLOUD ENGINEERING */}
          <motion.div
            className="p-10 flex flex-col justify-between min-h-[450px]"
            variants={fadeUp}
          >
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Cloud className="h-8 w-8 text-[#0054aa]" />
                <h2 className="text-2xl font-normal  text-black -900">
                  CLOUD ENGINEERING
                </h2>
              </div>
              <p className="text-xl text-black leading-[35px] my-3">
                Scalable, secure, and future-ready cloud architecture.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "End-to-end cloud migration strategies",
                  "Backend systems built on Google Cloud, AWS, and Microsoft Azure",
                  "Cloud-native architecture for high availability and performance",
                  "Security-first design for compliance in regulated industries",
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <span className="text-black text-xl leading-[35px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <Image
              src="/cloud-engineering.png"
              alt="Cloud engineering visualization"
              width={600}
              height={350}
              className="rounded-none border-none"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Data Infrastructure */}
      <motion.section
        className="w-full px-6 md:px-12 py-16 border-t border-gray-200"
        initial="hidden"
        id="cloud-engineering"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gray-200 divide-x">
          <div className="p-10 flex flex-col justify-between min-h-[450px]">
            <div className="flex items-center space-x-3 mb-6">
              <Database className="h-8 w-8 text-[#0054aa]" />
              <h2 className="text-2xl font-normal  text-black -900">
                DATA INFRASTRUCTURE
              </h2>
            </div>
            <p className="text-xl text-black leading-[35px] my-3">
              Turn massive datasets into instant, actionable insight.
            </p>
            <ul className="space-y-3">
              {[
                "High-performance pipelines for real-time data processing",
                "Data lake and warehouse solutions for unified access",
                "Intelligent data modeling and governance frameworks",
                "Seamless integration with legacy systems",
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <span className="text-black text-xl leading-[35px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <motion.div
            className="flex items-center justify-center border-l border-gray-200"
            variants={fadeUp}
          >
            <Image
              src="/data-infrastructure.png"
              alt="Modern data infrastructure visualization"
              width={600}
              height={400}
              className="rounded-none border-none"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Industry Solutions */}
      <motion.section
        className="w-full px-6 md:px-12 py-16 border-t border-gray-200"
        initial="hidden"
        id="data-infrastructure"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <h2 className="text-3xl font-normal text-[#0054aa] mb-12 text-center">
          Industry Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-gray-200 divide-x divide-y">
          {[
            {
              title: "Retail",
              icon: Building,
              text: "Demand forecasting, dynamic pricing, personalized customer experiences",
            },
            {
              title: "Healthcare",
              icon: Heart,
              text: "Data-driven patient care, operational optimization, regulatory compliance",
            },
            {
              title: "Finance",
              icon: DollarSign,
              text: "Fraud detection, risk modeling, real-time trading analytics",
            },
            {
              title: "Oil & Gas",
              icon: Zap,
              text: "Predictive maintenance, field data analytics, energy optimization",
            },
          ].map((s, i) => (
            <motion.div key={i} className="p-8 min-h-[250px]" variants={fadeUp}>
              <s.icon className="h-7 w-7 text-[#0054aa] mb-4" />
              <h3 className="text-2xl font-normal mb-2">{s.title}</h3>
              <p className=" text-black -600 text-xl leading-[35px]">
                {s.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Partnership Delivery */}
      <motion.section
        className="w-full px-6 md:px-12 py-16 border-t border-gray-200 bg-gray-50"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="max-w-6xl mx-auto text-center">
          <Users className="h-12 w-12 text-[#0054aa] mx-auto mb-6" />
          <h2 className="text-3xl font-normal mb-6">Partnership Delivery</h2>
          <p className="text-2xl mb-12  text-black -700 leading-[40px]">
            We don’t just build systems, we build them with you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-200 divide-x">
            {[
              "Co-creation with client teams from concept to deployment",
              "Technology-agnostic approach to choose the right tools",
              "Managed services for monitoring, updates, and performance tuning",
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-8 flex items-start space-x-3 min-h-[250px]"
                variants={fadeUp}
              >
                <CheckCircle className="h-12 w-12 text-green-600 mt-1" />
                <p className="text-black text-xl leading-[35px]">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.div
        className="my-12 bg-gray-50 border border-gray-200 p-8 rounded-none flex flex-col md:flex-row text-lg items-center justify-between"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="flex-1 mb-4 md:mb-0">
          <h4 className=" text-black -900 font-normal text-2xl mb-2">
            Let’s Build Something Intelligent Together
          </h4>
          <p className=" text-black -700 text-xl max-w-4xl leading-[35px]">
            Ready to explore how AI, cloud, and data can transform your
            business? Book a discovery call with MavenCode today.
          </p>
        </div>

        <Button
          className="bg-[#0054aa] hover:bg-[#003d7f] text-white text-xl rounded-none w-fit px-6 py-6 md:min-w-[200px]"
          onClick={() => setOpen(true)}
        >
          Book Discovery Call
        </Button>
      </motion.div>

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
