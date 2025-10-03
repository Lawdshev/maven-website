'use client'

import { useTheme } from '../contexts/ThemeContext'

export default function About() {
  const { theme } = useTheme()

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          {/* Section Label */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 mb-8">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide">
              About Us
            </span>
          </div>

          {/* Title */}
          <h2 className="text-[40px]  font-bold text-foreground mb-4">
            Transform Ambition into AI-Powered Result
          </h2>

          {/* Description */}
          <p className="text-xl text-center text-insighttext leading-relaxed  mx-auto">
          At Mavencode we believe AI Should deliver real impact - not just hype.  We Partner with Organizations to design and scale AI solution that are transparent, Reliable and built for future from co creation and rapid prototyping to seamless integration. Our Aproach Ensures lasting results and memorable value. 
          </p>
        </div>
      </div>
    </section>
  )
}
