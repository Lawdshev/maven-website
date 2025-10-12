"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ShoppingCart,
  Heart,
  TrendingUp,
  Zap,
  ClipboardList,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import { Modal } from "antd";
import { useState } from "react";
import ContactForm from "../contact-us/contact-form";

export default function IndustriesPage() {
  const [open, setOpen] = useState(false);
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="text-black max-w-[1780px] w-[95%] mx-auto">
      {/* Hero Section */}
      <motion.main
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        className="w-full border-b border-gray-200 px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-8"
      >
        <motion.div variants={fadeUp}>
          <div className="text-sm text-black mb-4">
            <Link href="/" className="text-[#0054aa] hover:underline">
              Home
            </Link>{" "}
            / Industries
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-6xl lg:leading-[70px] mb-4">
            <span className="text-[#0054aa]">Intelligent Solutions,</span>
            <br />
            <span className="text-black">Built for Your Industry</span>
          </h1>
          <p className="text-xl text-black max-w-2xl leading-[35px]">
            From retail shelves to hospital floors, trading desks to energy
            grids, MavenCode designs AI, cloud, and data systems that meet the
            demands of your world.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="flex justify-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Image
            src="/industries.png"
            alt="Industries overview"
            width={600}
            height={400}
            className="border border-gray-200 shadow-md"
          />
        </motion.div>
      </motion.main>

      {/* Industry Sections */}
      {[
        {
          id: "retail",
          title: "Retail",
          icon: ShoppingCart,
          desc: "Retail thrives on timing, precision, and customer experience. Our AI-powered systems give retailers the tools to respond instantly to shifts in demand, supply chain disruptions, and customer preferences.",
          applications: [
            {
              title: "Demand Forecasting",
              desc: "Predict future sales with precision.",
            },
            { title: "Dynamic Pricing", desc: "Adjust prices in real time." },
            {
              title: "Customer Personalization",
              desc: "Recommend tailored products.",
            },
            {
              title: "Supply Chain Optimization",
              desc: "Monitor inventory and vendors in real time.",
            },
          ],
          benefits: [
            "Fewer stockouts and reduced waste",
            "Increased revenue through targeted offers",
            "Faster response to market changes",
            "Improved customer satisfaction",
          ],
          button: "Transform Your Retail Operations",
        },
        {
          id: "healthcare",
          title: "Healthcare",
          icon: Heart,
          desc: "In healthcare, every decision affects outcomes. Our AI and data solutions help providers, researchers, and administrators make smarter choices in seconds, not days.",
          applications: [
            {
              title: "Predictive Diagnostics",
              desc: "Identify disease risk early with AI.",
            },
            {
              title: "Operational Efficiency",
              desc: "Automate scheduling and resource allocation.",
            },
            {
              title: "Clinical Decision Support",
              desc: "Deliver recommendations to clinicians.",
            },
            {
              title: "Regulatory Compliance",
              desc: "Ensure adherence to HIPAA and privacy rules.",
            },
          ],
          benefits: [
            "Faster, more accurate diagnoses",
            "Better patient outcomes",
            "Reduced operational costs",
            "Improved compliance and data security",
          ],
          button: "Explore Healthcare AI Solutions",
        },
        {
          id: "finance",
          title: "Finance",
          icon: TrendingUp,
          desc: "The financial sector has always been data-driven, but AI is redefining how firms assess risk, detect fraud, and make investment decisions.",
          applications: [
            {
              title: "Time Series Prediction",
              desc: "Forecast market movements with stacked models.",
            },
            {
              title: "Automated Due Diligence",
              desc: "Use AI to review contracts and reduce errors.",
            },
            {
              title: "Fraud Detection & Risk Management",
              desc: "Identify anomalies and detect threats early.",
            },
            {
              title: "Portfolio Management",
              desc: "Adjust strategies based on real-time data.",
            },
          ],
          benefits: [
            "Faster, more accurate insights",
            "Lower operational risk and reduced fraud",
            "Increased profitability",
            "Continuous improvement with ML",
          ],
          button: "Strengthen Your Financial Operations",
        },
        {
          id: "energy",
          title: "Energy",
          icon: Zap,
          desc: "Energy operations span vast geographies. Our AI-enabled platforms turn raw sensor and field data into actionable intelligence for operators and decision-makers.",
          applications: [
            {
              title: "Predictive Maintenance",
              desc: "Detect issues before costly downtime.",
            },
            {
              title: "Load Forecasting",
              desc: "Predict demand to optimize distribution.",
            },
            {
              title: "Remote Monitoring",
              desc: "Track asset performance in real time.",
            },
            {
              title: "Sustainability Optimization",
              desc: "Analyze usage to reduce footprint.",
            },
          ],
          benefits: [
            "Reduced downtime and costs",
            "More reliable energy delivery",
            "Lower environmental footprint",
            "Faster incident detection",
          ],
          button: "Power Your Energy Network with AI",
        },
      ].map((industry, idx) => (
        <motion.section
          key={industry.id}
          id={industry.id}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2, delay: idx * 0.1 }}
          className="w-full mx-auto px-6 md:px-12 py-16 border-t border-gray-200"
        >
          <motion.div variants={fadeUp}>
            {/* Heading */}
            <div className="flex items-center space-x-3 mb-6">
              <industry.icon className="h-8 w-8 text-[#0054aa]" />
              <h2 className="text-3xl font-normal text-black">
                {industry.title}
              </h2>
            </div>
            <p className="text-xl text-black leading-[35px] mb-10 max-w-2xl">
              {industry.desc}
            </p>

            <div className="flex flex-col lg:flex-row justify-between gap-6">
              {/* Applications */}
              <motion.div variants={fadeUp} whileHover={{ scale: 1.02 }}>
                <h4 className="text-2xl font-normal mb-4 text-[#0054aa]">
                  Applications
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-200 divide-x divide-y divide-gray-200 mb-10">
                  {industry.applications.map((app, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      whileHover={{ backgroundColor: "#f0f7ff" }}
                      className="p-6 min-h-[200px]"
                    >
                      <ClipboardList className="h-6 w-6 text-[#0054aa] mb-3" />
                      <h3 className="text-xl font-medium mb-2">{app.title}</h3>
                      <p className="text-black leading-[30px] text-lg">
                        {app.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Benefits */}
              <motion.div variants={fadeUp} whileHover={{ scale: 1.02 }}>
                <h4 className="text-2xl font-normal mb-4 text-[#0054aa]">
                  Key Benefits
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-200 divide-x divide-y divide-gray-200 mb-10">
                  {industry.benefits.map((benefit, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      whileHover={{ backgroundColor: "#f0f7ff" }}
                      className="p-6 min-h-[200px]"
                    >
                      <Star className="h-6 w-6 text-[#0054aa] mb-3" />
                      <p className="text-black text-lg leading-[30px]">
                        {benefit}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div variants={fadeUp} whileHover={{ scale: 1.05 }}>
              <Button
                className="bg-[#0054aa] text-white px-6 py-6 text-xl rounded-none hover:bg-[#004080]"
                onClick={() => setOpen(true)}
              >
                {industry.button}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.section>
      ))}

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
