"use client";

import React, { useState } from "react";
import HeroSection from "./fragments/HeroSection";
import CapabilitiesSection from "./fragments/CapabilitiesSection";
import TechStackSection from "./fragments/TechStackSection";
import BlogSection from "./fragments/BlogSection";
import AboutSummary from "./fragments/AboutSummary";

export default function Component() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div>
      <HeroSection onContactClick={() => setOpen(true)} />
        <AboutSummary/>
      <CapabilitiesSection />
      <TechStackSection />
      <BlogSection />

      </div>
    </div>
  );
}
