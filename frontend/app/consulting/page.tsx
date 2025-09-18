"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  TrendingUp,
  Heart,
  ShoppingCart,
  Factory,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ConsultingPage() {
  const industries = [
    {
      title: "Finance & Banking",
      description:
        "Enable smarter financial services with AI solutions for fraud prevention, credit risk modeling, customer insights, and regulatory compliance—driving security, trust, and efficiency.",
      icon: TrendingUp,
      image: "/finance-consulting.png",
    },
    {
      title: "Healthcare & Life Sciences",
      description:
        "Transform patient care with predictive diagnostics, personalized treatment recommendations, and automated clinical workflows that reduce costs while improving outcomes.",
      icon: Heart,
      image: "/healthcare-consulting.png",
    },
    {
      title: "Retail & E-Commerce",
      description:
        "Boost revenue and loyalty through AI-powered demand forecasting, hyper-personalized shopping experiences, and optimized supply chain management at scale.",
      icon: ShoppingCart,
      image: "/retail-consulting.png",
    },
    {
      title: "Manufacturing & Logistics",
      description:
        "Increase productivity and resilience with predictive maintenance, real-time quality control, and intelligent routing systems that minimize downtime and streamline operations.",
      icon: Factory,
      image: "/manufacturing-consulting.png",
    },
  ];

  return (
    <div className="text-black max-w-[1780px] w-[95%] mx-auto">
      {/* Hero Section */}
      <motion.main
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full border-b border-gray-200 px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-8"
      >
        <div>
          <div className="text-sm text-black/70 mb-4">
            <Link href="/" className="text-[#0054aa] hover:underline">
              Home
            </Link>{" "}
            / Consulting
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-6xl lg:leading-[70px] mb-6 font-normal">
            <span className="text-[#0054aa]">MavenCode AI Consulting</span>
            <br />
          </h1>
          <p className="text-xl text-black/80 max-w-2xl leading-[35px] mb-6">
            We partner with forward-thinking organizations to design, build, and
            scale AI solutions that create measurable business impact. Our
            approach blends deep technical expertise with a sharp focus on
            strategy, adoption, and long-term value.
          </p>
          <Button className="bg-[#0054aa] text-white px-6 py-6 text-xl rounded-none hover:bg-[#004080]">
            Discover All We Offer
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center"
        >
          <Image
            src="/consulting-hero.png"
            alt="Consulting overview"
            width={600}
            height={400}
            className="border border-gray-200"
          />
        </motion.div>
      </motion.main>

      {/* Industry Expertise */}
      <section className="w-full mx-auto px-6 md:px-12 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h2 className="text-3xl font-medium mb-6 text-[#0054aa]">
              Industry Expertise
            </h2>
            <p className="text-xl leading-[35px] text-black/80 max-w-3xl mx-auto">
              From strategy to execution, we help organizations harness AI to
              tackle complex challenges, seize new opportunities, and stay ahead
              of change in their industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-200 divide-y md:divide-y-0 md:divide-x divide-gray-200 overflow-hidden">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`p-8 ${index >= 2 ? "md:border-t" : ""}`}
              >
                <h3 className="text-2xl font-medium mb-4 text-black">
                  {industry.title}
                </h3>
                <p className="text-xl leading-[35px] text-black/80 mb-6">
                  {industry.description}
                </p>
                <Image
                  src={industry.image || "/placeholder.svg"}
                  alt={`${industry.title} AI consulting solutions`}
                  width={500}
                  height={250}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <Button className="bg-[#0054aa] text-white px-6 py-6 text-xl rounded-none hover:bg-[#004080] w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-gray-50 border-t border-gray-200 py-16 px-6 md:px-12 text-center"
      >
        <h2 className="text-3xl font-medium mb-6 text-[#0054aa]">What’s Next</h2>
        <p className="text-xl leading-[35px] text-black/80 max-w-3xl mx-auto mb-8">
          Let’s turn your AI ambitions into business results. Our experts will
          work with you to define the right strategy, build scalable solutions,
          and deliver lasting transformation—tailored to your goals.
        </p>
        <Button className="bg-[#0054aa] text-white px-8 py-6 text-xl rounded-none hover:bg-[#004080]">
          Book a Consultation
        </Button>
      </motion.section>
    </div>
  );
}
