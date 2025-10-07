"use client";
import Button from "../../components/Button";
import Image from "next/image";
import Woman from "@/app/image/aboutus/woman.png";
import Code from "@/app/image/aboutus/code.png";
import Logo from "@/app/image/aboutus/logo.png";
import DarkLogo from "@/app/image/aboutus/darkLogo.png"
import AgentAi from "@/app/image/services/agentAi.png";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function AboutUsSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <section className="bg-white dark:bg-[#2A2C38]">
      <div className="max-w-6xl mx-auto py-36 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Section - Text Content */}
          <div className="space-y-4 text-left">
            <h1 className="text-4xl  font-bold  text-about-text dark:text-about-text-dark leading-tight">
              About us
            </h1>

            <p className="text-base text-about-text dark:text-about-text-dark text-justify leading-relaxed max-w-sm">
              Welcome to <span className="font-bold">Mavencode</span> — your
              trusted partner in AI and cloud transformation.We believe
              technology should deliver real impact, not hype. That’s why we
              design and scale intelligent solutions that are transparent,
              reliable, and built for the future. Whether it’s AI-driven
              automation, cloud-native systems, or enterprise integration, we
              help organizations unlock innovation and measurable value.
            </p>

            <div className="pt-4">
              <Button variant="primary" size="md" href="/services">
                See our services
              </Button>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-4 h-[400px]">
              {/* Top Left - Woman working at desk */}
              <div className="relative rounded-lg overflow-hidden w-full h-full">
                <Image
                  src={Woman}
                  alt="Person working at desk with multiple monitors"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Top Right - Logo */}
              <div className="relative rounded-lg overflow-hidden bg-white dark:bg-gray-800 w-full h-full">
                <Image
                  src={resolvedTheme === "dark" ? DarkLogo : Logo}
                  alt="MAVENCODE Logo"
                  fill
                  className="object-contain p-8 transform rotate-[-15deg]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Bottom Left - AgentAi image */}
              <div className="relative rounded-lg overflow-hidden w-full h-full">
                <Image
                  src={AgentAi}
                  alt="Agent AI illustration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Bottom Right - Laptop with code */}
              <div className="relative rounded-lg overflow-hidden w-full h-full">
                <Image
                  src={Code}
                  alt="Laptop displaying code with syntax highlighting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
