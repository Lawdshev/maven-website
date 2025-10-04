"use client";

import { useTheme } from "../contexts/ThemeContext";

export default function About() {
  const { theme } = useTheme();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#01CBFB33] dark:bg-blue-900/20 mb-8">
          <span className="text-sm font-medium text-[#1E5993] dark:text-blue-400 uppercase tracking-wide">
            About Us
          </span>
        </div>

        <h2 className="text-[40px] font-bold text-[#0F0049] mb-4">
          Transform Ambition into AI-Powered Result
        </h2>

        <p className="text-xl text-[#111827] font-light max-w-4xl leading-relaxed mx-auto">
          At Mavencode we believe AI Should deliver real impact - not just hype.
          We Partner with Organizations to design and scale AI solution that are
          transparent, Reliable and built for future from co creation and rapid
          prototyping to seamless integration. Our Aproach Ensures lasting
          results and memorable value.
        </p>
      </div>
    </section>
  );
}
