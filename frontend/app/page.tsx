"use client";

import React, { useState } from "react";
import HeroSection from "./fragments/HeroSection";
import CapabilitiesSection from "./fragments/CapabilitiesSection";
import TechStackSection from "./fragments/TechStackSection";
import WhyMavenCodeSection from "./fragments/WhyMavenCodeSection";
import BlogSection from "./fragments/BlogSection";

export default function Component() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <HeroSection onContactClick={() => setOpen(true)} />
      <CapabilitiesSection />
      <TechStackSection />
      <WhyMavenCodeSection />
      <BlogSection />
    </div>
  );
}
