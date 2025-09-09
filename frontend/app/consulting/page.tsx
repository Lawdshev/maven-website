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

export default function ConsultingPage() {
  const industries = [
    {
      title: "Finance & Banking",
      description:
        "Deploy AI-driven fraud detection, risk modeling, and automated compliance to protect assets and unlock smarter financial operations.",
      icon: TrendingUp,
      image: "/finance-consulting.png",
    },
    {
      title: "Healthcare & Life Sciences",
      description:
        "Leverage AI for faster diagnostics, predictive patient care, and automated administrative workflows to improve both outcomes and efficiency.",
      icon: Heart,
      image: "/healthcare-consulting.png",
    },
    {
      title: "Retail & E-Commerce",
      description:
        "Harness real-time demand forecasting, personalized recommendations, and supply chain optimization to maximize sales and customer loyalty.",
      icon: ShoppingCart,
      image: "/retail-consulting.png",
    },
    {
      title: "Manufacturing & Logistics",
      description:
        "Integrate AI-powered quality control, predictive maintenance, and intelligent routing to increase uptime, reduce costs, and streamline operations.",
      icon: Factory,
      image: "/manufacturing-consulting.png",
    },
  ];

  return (
    <div className="text-black max-w-[1780px] w-[95%] mx-auto">
      {/* Hero Section */}
      <main className="w-full border-b border-gray-200 px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
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
            We help businesses design, build, and operate AI-driven solutions
            that deliver measurable impact—blending deep technical mastery with
            a business-first mindset.
          </p>
          <Button className="bg-[#0054aa] text-white px-6 py-6 text-xl rounded-none hover:bg-[#004080]">
            Discover All We Offer
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="flex justify-center">
          <Image
            src="/consulting-hero.png"
            alt="Consulting overview"
            width={600}
            height={400}
            className="border border-gray-200"
          />
        </div>
      </main>

      {/* Industry Expertise */}
      <section className="w-full mx-auto px-6 md:px-12 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-medium mb-6 text-[#0054aa]">
              Industry Expertise
            </h2>
            <p className="text-xl leading-[35px] text-black/80 max-w-3xl mx-auto">
              We work side-by-side with clients to advise, design, build, and
              operate intelligent systems that solve today’s challenges and
              evolve for tomorrow’s opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-200 divide-y md:divide-y-0 md:divide-x divide-gray-200 overflow-hidden">
            {industries.map((industry, index) => (
              <div key={index} className={`p-8 ${index >= 2 ? "md:border-t" : ""}`}>
                <h3 className="text-2xl font-medium mb-4 text-black">{industry.title}</h3>
                <p className="text-xl leading-[35px] text-black/80 mb-6">{industry.description}</p>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-gray-50 border-t border-gray-200 py-16 px-6 md:px-12 text-center">
        <h2 className="text-3xl font-medium mb-6 text-[#0054aa]">What’s Next</h2>
        <p className="text-xl leading-[35px] text-black/80 max-w-3xl mx-auto mb-8">
          Ready to see how MavenCode Consulting can accelerate your business? 
          Connect with us to discuss your goals and discover how our experts 
          can design and deliver a powerful AI transformation roadmap tailored to you.
        </p>
        <Button className="bg-[#0054aa] text-white px-8 py-6 text-xl rounded-none hover:bg-[#004080]">
          Book a Consultation
        </Button>
      </section>
    </div>
  );
}
