"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onContactClick: () => void;
}

export default function HeroSection({ onContactClick }: HeroSectionProps) {
  return (
    <main className="w-full h-screen max-h-[800px] relative flex items-center px-6 md:px-12 lg:px-24 py-16 overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://gw.alipayobjects.com/v/huamei_gcee1x/afts/video/jXRBRK_VAwoAAAAAAAAAAAAAK4eUAQBr"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay for Text Readability */}
      {/* <div className="absolute inset-0 bg-black/70 z-10"></div> */}

      {/* Main Content - Left Aligned */}
      <div className="max-w-4xl w-full relative z-20">
        <div className="space-y-8">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-tight text-white">
            Artificial Intelligence
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl max-w-3xl leading-relaxed text-white/90">
            Learn how we're helping capture the opportunity of generative AI
          </p>

          {/* Call to Action */}
          <div className="pt-8">
            <Button
              className="text-lg px-8 py-4 rounded-lg font-normal bg-white text-black hover:bg-white/90"
              onClick={onContactClick}
            >
              Learn more
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
