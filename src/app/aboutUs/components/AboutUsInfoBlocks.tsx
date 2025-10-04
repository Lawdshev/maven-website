import Image from "next/image";
import Goal from "@/app/image/aboutus/goal.png"; 
import Mission from "@/app/image/aboutus/mission.png";
import Serve from "@/app/image/aboutus/serve.png";
import Maven from "@/app/image/aboutus/maven.png";

export default function AboutUsInfoBlocks() {
  return (
    <section className="bg-white dark:bg-[#1A1A1A] relative">
      {/* Blue vertical lines */}
      <div className="absolute left-0 top-0 w-px h-full bg-blue-500"></div>
      <div className="absolute right-0 top-0 w-px h-full bg-blue-500"></div>

      <div className="max-w-6xl mx-auto py-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Hero Section */}
        <div className="mb-16">
          <h2 className="text-[32px] font-medium text-about-text dark:text-about-text-dark leading-tight max-w-md mb-6">
            Focus on growth. We handle the intelligence.
          </h2>
          <p className="text-[15px] text-about-text dark:text-about-text-dark leading-relaxed max-w-2xl">
            At Mavencode, we take care of the heavy lifting — from AI-driven automation to cloud-native systems — so you can focus on scaling your business. With solutions designed to adapt, learn, and grow with you, we make innovation effortless.
          </p>
        </div>

        {/* Info Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 01 - Our Mission (small, left) */}
          <div className="md:col-span-1">
            <div className="mb-4 rounded-lg overflow-hidden">
              <Image src={Mission} alt="Our Mission" className="w-full h-48 object-cover" />
            </div>
            <h3 className="text-sm font-bold text-about-heading dark:text-about-heading-dark mb-2">01</h3>
            <h4 className="text-lg font-semibold text-about-heading dark:text-about-heading-dark mb-2">Our mission</h4>
            <p className="text-xs text-about-text dark:text-about-text-dark max-w-xs">
            At Mavencode, our mission is to empower businesses with AI and cloud technologies that drive efficiency, adaptability, and growth. We turn complex challenges into intelligent, scalable solutions that create lasting results.
            </p>
          </div>

          {/* 02 - Who we serve (wide, right same row) */}
          <div className="md:col-span-2">
            <div className="mb-4 rounded-lg overflow-hidden">
              <Image src={Serve} alt="Who we serve" className="w-full h-48  object-cover" />
            </div>
            <h3 className="text-sm font-bold text-about-heading dark:text-about-heading-dark mb-2">02</h3>
            <h4 className="text-lg font-semibold text-about-heading dark:text-about-heading-dark mb-2">Who we serve</h4>
            <p className="text-xs text-about-text dark:text-about-text-dark max-w-xs ">
            We work with forward-thinking organizations of all sizes. Whether it’s automating workflows, building secure cloud infrastructure, or applying AI for decision-making, we deliver tailored solutions for diverse industries.
            </p>
          </div>

          {/* 03 - Goals (left, second row) */}
          <div className="md:col-span-2">
            <div className="mb-4 rounded-lg overflow-hidden">
              <Image src={Goal} alt="Goals" className="w-full h-48 object-cover" />
            </div>
            <h3 className="text-sm font-bold text-about-heading dark:text-about-heading-dark mb-2">03</h3>
            <h4 className="text-lg font-semibold text-about-heading dark:text-about-heading-dark mb-2">Goals</h4>
            <p className="text-xs text-about-text dark:text-about-text-dark max-w-xs">
            We are driven by a commitment to innovation, reliability, and measurable impact. Our goal is not just to deploy AI or cloud solutions, but to ensure they integrate seamlessly, scale effectively, and deliver tangible business value over time.
            </p>
          </div>

          {/* 04 - Why Mavencode? (right, second row) */}
          <div className="md:col-span-1">
            <div className="mb-4 rounded-lg overflow-hidden">
              <Image src={Maven} alt="Why Mavencode" className="w-full h-48 object-cover" />
            </div>
            <h3 className="text-sm font-bold text-about-heading dark:text-about-heading-dark mb-2">04</h3>
            <h4 className="text-lg font-semibold text-about-heading dark:text-about-heading-dark mb-2">Why Mavencode?</h4>
            <p className="text-xs text-about-text dark:text-about-text-dark max-w-xs">
            Because we go beyond technology. Choosing Mavencode means choosing a partner who values co-creation, transparency, and future-readiness. We don’t just build solutions—we build trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
