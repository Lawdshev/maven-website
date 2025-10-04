"use client";

import { useTheme } from "../contexts/ThemeContext";

export default function About() {
  const { theme } = useTheme();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 mb-8">
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide">
            About Us
          </span>
        </div>

        <h2 className="text-[40px] font-bold text-foreground mb-4">
          Transform Ambition into AI-Powered Result
        </h2>

        <p className="text-xl text-insighttext leading-relaxed mx-auto">
          At Mavencode, we believe AI should deliver real impact — not just
          hype. We partner with organizations to design and scale AI solutions
          that are transparent, reliable, and built for the future.
        </p>
      </div>
    </section>
  );
}
