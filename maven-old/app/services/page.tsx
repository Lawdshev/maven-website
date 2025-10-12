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
  Shield,
  Lock,
  Camera,
  Phone,
  Key,
  Bell,
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
    <div className="text-black mx-auto font-normal">
      {/* Hero Section - About Page Style */}
      <motion.main
        className="w-full max-h-[900px] h-screen relative text-white px-6 md:px-12 py-16 flex"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0054aa]/80"></div>

        <div className="relative z-10 max-w-[1780px] w-[95%] mx-auto flex justify-between items-center">
          <div className="text-left max-w-[780px] mx-0">
            <div className="text-sm text-blue-200 mb-4">
              <Link href="/" className="hover:underline">
                Home
              </Link>{" "}
              / Services
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-6xl lg:leading-[70px] mb-6 font-normal">
              Transform Your Business with{" "}
              <span className="text-blue-200">AI, Cloud, and Data</span>
            </h1>

            <p className="text-xl text-white mb-8 max-w-2xl leading-[35px]">
              In today's competitive landscape, staying ahead means making
              smarter decisions, operating more efficiently, and unlocking new
              opportunities.
            </p>

            <p className="text-lg text-blue-100 leading-[30px]">
              From designing enterprise-ready AI models to streamlining everyday
              processes, we partner with organizations of all sizes to reimagine
              how they work and compete in a digital-first world.
            </p>
          </div>
        </div>
      </motion.main>

      {/* Main Services Section */}
      <motion.section
        className="w-full mx-auto px-6 md:px-12 py-20 border-t border-gray-200"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="max-w-[1780px] w-[95%] mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl mb-6 text-[#0054aa] font-normal">
              Services
            </h2>
            <p className="text-xl leading-[35px] text-black max-w-3xl mx-auto">
              We provide comprehensive technology solutions to help your
              business thrive in the digital age.
            </p>
          </motion.div>

          {/* Main Services - Template Style */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: "AI + Data Solutions",
                description:
                  "Harness the potential of artificial intelligence to solve industry-defining challenges with machine learning models, predictive analytics, and natural language processing.",
                image: "/ai-data-interface.png",
                icon: Brain,
              },
              {
                title: "Cloud Engineering",
                description:
                  "Scalable, secure, and future-ready cloud architecture with end-to-end migration strategies and cloud-native solutions.",
                image: "/cloud-engineering.png",
                icon: Cloud,
              },
              {
                title: "Data Infrastructure",
                description:
                  "Turn massive datasets into instant, actionable insights with high-performance pipelines and intelligent data modeling.",
                image: "/data-infrastructure.png",
                icon: Database,
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="text-center group"
              >
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={250}
                    className="w-full h-[250px] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#0054aa]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <service.icon className="h-16 w-16 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-normal mb-4 text-[#0054aa]">
                  {service.title}
                </h3>
                <p className="text-lg leading-[30px] text-black">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Detailed Services Section */}
      <motion.section
        className="w-full mx-auto px-6 md:px-12 py-20 border-t border-gray-200"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="max-w-[1780px] w-[95%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Access Solutions",
                description:
                  "Advanced access control systems with multi-factor authentication, role-based permissions, and secure identity management for enterprise environments.",
                image:
                  "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
                icon: Shield,
              },
              {
                title: "Security Monitoring",
                description:
                  "Real-time security monitoring and alerting systems with AI-powered threat detection and automated incident response capabilities.",
                image:
                  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
                icon: Bell,
              },
              {
                title: "Data Encryption",
                description:
                  "End-to-end encryption solutions for data at rest and in transit, ensuring your sensitive information remains protected across all platforms.",
                image:
                  "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
                icon: Lock,
              },
              {
                title: "Security Analytics",
                description:
                  "Advanced security analytics and reporting with machine learning algorithms to identify patterns and prevent potential security breaches.",
                image:
                  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
                icon: Camera,
              },
              {
                title: "Compliance Management",
                description:
                  "Comprehensive compliance frameworks for GDPR, HIPAA, SOX, and other regulatory requirements with automated audit trails.",
                image:
                  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
                icon: CheckCircle,
              },
              {
                title: "Incident Response",
                description:
                  "Rapid incident response and recovery services with 24/7 monitoring and automated remediation to minimize business impact.",
                image:
                  "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=800&q=80",
                icon: Zap,
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white border border-gray-200 overflow-hidden group hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#0054aa]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <service.icon className="h-12 w-12 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-normal mb-4 text-[#0054aa]">
                    {service.title}
                  </h3>
                  <p className="text-lg leading-[30px] text-black">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Industry Solutions */}
      <motion.section
        className="w-full mx-auto px-6 md:px-12 py-20 border-t border-gray-200"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="max-w-[1780px] w-[95%] mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl mb-6 text-[#0054aa] font-normal">
              Industry Solutions
            </h2>
            <p className="text-xl leading-[35px] text-black max-w-3xl mx-auto">
              Tailored solutions for specific industries, designed to address
              unique challenges and opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <motion.div
                key={i}
                className="bg-white border border-gray-200 p-8 group hover:bg-[#0054aa] hover:text-white transition-all duration-300"
                variants={fadeUp}
              >
                <s.icon className="h-12 w-12 text-[#0054aa] mb-4 group-hover:text-white" />
                <h3 className="text-2xl font-normal mb-4">{s.title}</h3>
                <p className="text-lg leading-[30px]">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Training Section */}
      <motion.section
        className="w-full mx-auto px-6 md:px-12 py-20 border-t border-gray-200 bg-gray-50"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="max-w-[1780px] w-[95%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp}>
              <div className="relative mb-8 overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                  alt="Technology Training"
                  width={600}
                  height={400}
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute inset-0 bg-[#0054aa]/30 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Users className="h-16 w-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-normal">Expert Training</h3>
                  </div>
                </div>
              </div>
              <div className="text-sm text-[#0054aa] mb-4">Join Us</div>
              <h2 className="text-4xl mb-6 text-[#0054aa] font-normal">
                Expert Technology Training
              </h2>
              <p className="text-xl leading-[35px] text-black mb-8">
                Comprehensive training programs to ensure your team can
                effectively utilize and maintain the solutions we build
                together. From AI implementation to cloud architecture, we
                provide hands-on training that empowers your organization.
              </p>
              <Button
                className="bg-[#0054aa] hover:bg-[#003d7f] text-white text-lg rounded-none px-8 py-4"
                onClick={() => setOpen(true)}
              >
                Register Today
              </Button>
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "AI Implementation",
                    description:
                      "Learn to implement and manage AI solutions effectively with hands-on training on machine learning models and data pipelines.",
                    icon: Brain,
                  },
                  {
                    title: "Cloud Architecture",
                    description:
                      "Master cloud-native development and deployment strategies across AWS, Azure, and Google Cloud platforms.",
                    icon: Cloud,
                  },
                  {
                    title: "Data Management",
                    description:
                      "Understand data governance, security, and optimization techniques for enterprise-scale data infrastructure.",
                    icon: Database,
                  },
                  {
                    title: "Security Best Practices",
                    description:
                      "Implement comprehensive security measures and compliance frameworks for your technology stack.",
                    icon: Shield,
                  },
                  {
                    title: "DevOps & Automation",
                    description:
                      "Streamline development workflows with CI/CD pipelines, infrastructure as code, and automated testing.",
                    icon: Zap,
                  },
                  {
                    title: "Performance Optimization",
                    description:
                      "Optimize system performance and scalability through monitoring, profiling, and tuning techniques.",
                    icon: CheckCircle,
                  },
                ].map((training, i) => (
                  <div
                    key={i}
                    className="bg-white border border-gray-200 p-6 group hover:shadow-md transition-shadow duration-300"
                  >
                    <training.icon className="h-8 w-8 text-[#0054aa] mb-4" />
                    <h3 className="text-lg font-normal mb-3 text-[#0054aa]">
                      {training.title}
                    </h3>
                    <p className="text-sm leading-[24px] text-black">
                      {training.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
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
  );
}
