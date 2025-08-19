"use client";

import type React from "react";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react"; // kept as you had it
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Component() {
  return (
    <div className="text-gray-900">
      <main className="w-full min-h-[700px] bg-[url('/hero-image-5.png')] bg-cover bg-center mx-auto px-6 md:px-12 py-8 lg:py-16 grid grid-cols-1 lg:grid-cols-1 gap-8">
        <div className="lg:col-span-1 flex flex-col justify-center w-[80%]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[medium] leading-tight mb-6">
            <span className="text-[#0054aa]">
              Turning AI Into Your Competitive Edge Less hand-holding. More
              momentum.
            </span>
          </h1>
          <p className="text-xl text-black mb-8 max-w-2xl leading-[30px]">
            We build autonomous systems that think, decide, and execute, from
            real-time pipelines to self-improving AI agents. Intelligence that
            moves faster, with less human effort.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 text-2xl">
            <Link href={"/contact-us"}>
              <Button className="font-normal bg-[#0054aa] hover:bg-[#003d7f] cursor-pointer text-xl  text-white px-6 py-6 rounded-md flex items-center justify-center">
                Talk to an Engineer <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Featured Content / Intro (added) */}
      <section className="w-full relative mx-auto px-6 md:px-12 py-8 lg:py-12 slanted-bg flex ">
        <div className="">
          <h2 className="text-3xl  font-[medium]  mb-6 text-[#0054aa] leading-[50px]">
            Built for Autonomy.
            <br className="hidden md:block" />
            <span className="text-gray-900">Designed for Impact.</span>
          </h2>

          <p className="text-lg text-gray-700 max-w-5xl mb-4 leading-relaxed">
            We engineer AI systems that{" "}
            <span className="font-normal text-gray-900">
              think, decide, and adapt
            </span>{" "}
            not just react. Fueled by real-time data, guided by logic, and
            designed to evolve, our solutions help organizations achieve
            measurable transformation.
          </p>

          <p className="text-lg text-gray-700 max-w-5xl mb-4 leading-relaxed">
            This isn't about chasing abstract AI dreams. It's about
            <span className="font-normal text-gray-900">
              {" "}
              practical, high-performance intelligence
            </span>
            that integrates seamlessly into your operations — adaptive agents,
            self-learning models, and scalable infrastructure.
          </p>

          <p className="text-lg text-gray-700 max-w-5xl mb-10 leading-relaxed">
            We empower systems to handle the repetitive, predictable, and
            time-consuming tasks, freeing your team to focus on{" "}
            <span className="text-[#0054aa] font-normal">
              innovation, strategy, and human brilliance
            </span>
            .
          </p>

          {/* Benefits */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "Reduce friction", icon: "⚡" },
              { title: "Scale at speed", icon: "🚀" },
              { title: "Operate with minimal manual intervention", icon: "🤖" },
            ].map((item, index) => (
              <li
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300"
              >
                {/* <div className="text-4xl mb-3">{item.icon}</div> */}
                <p className="font-normal text-gray-900">{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Recommended for you section */}
      <section className="w-full mx-auto px-6 py-8 lg:py-12">
        <h2 className="text-3xl font-[medium] mb-6 text-[#0054aa]">
          What we build
        </h2>
        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide justify-between">
          <div className="flex-shrink-0 w-[400px] bg-gray-50 rounded-lg overflow-hidden shadow-sm border border-gray-200 ">
            <Image
              src="/ai-agent.png"
              alt="Webinar: The AI Oversight Gap"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-[300px]  mb-3 object-cover"
            />
            <div className="p-4">
              <p className="text-xl font-[medium] text-black">AI Agents</p>
              <h3 className="font-normal text-lg mt-2">
                Lightweight and adaptive components that respond to new inputs
                and improve overtime
              </h3>
              <Link
                href="#"
                className="text-[#0054aa] hover:underline flex items-center mt-2 font-normal"
              >
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0 w-[400px] bg-gray-50 rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <Image
              src="/binary.png"
              alt="Podcast: AI to defend against AI-based cybersecurity threats"
              width={0}
              height={0}
              className="w-full h-[300px] mb-3 object-cover"
            />
            <div className="p-4">
              <p className="text-xl font-[medium] text-black">
                Real-Time Data Pipelines
              </p>
              <h3 className="font-normal text-lg mt-2">
                Infrastructure that delivers insights where and when needed
              </h3>
              <Link
                href="#"
                className="text-[#0054aa] hover:underline flex items-center mt-2 font-normal"
              >
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0 w-[400px] bg-gray-50 rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <Image
              src="/cloud.png"
              alt="Product: Accelerate responsible AI"
              width={0}
              height={0}
              className="w-full h-[300px] mb-3 object-cover"
            />
            <div className="p-4">
              <p className="text-xl font-[medium] text-black">
                Cloud Native Architecture
              </p>
              <h3 className="font-normal text-lg mt-2">
                Performance-driven systems built for growth, flexibility, and
                speed
              </h3>
              <Link
                href="#"
                className="text-[#0054aa] hover:underline flex items-center mt-2 font-normal"
              >
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions by Industry */}
      <section className="w-full mx-auto px-6 md:px-12 py-8 lg:py-12 ">
        <h2 className="text-3xl font-[medium] mb-8 text-[#0054aa]">
          Solutions by Industry
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-gray-200 rounded-lg overflow-hidden">
          <div className="p-6 border-b border-r border-gray-200 flex flex-col cursor-pointer justify-between">
            <div>
              <h3 className="text-xl font-medium mb-2">Retail</h3>
              <p className="text-sm text-gray-600 mb-4">
                Smarter inventory and operations with smarter data flow
              </p>
              <Image
                src="/shopping-cart.png"
                alt="Retail icon"
                width={64}
                height={64}
                className="mb-4"
              />
            </div>
            <Link
              href="#"
              className="text-[#0054aa] hover:underline flex items-center font-normal"
            >
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="p-6 border-b border-r lg:border-r-0 border-gray-200 cursor-pointer flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-medium mb-2">Healthcare</h3>
              <p className="text-sm text-gray-600 mb-4">
                Support critical decisions with accurate, fast insights
              </p>
              <Image
                src="/hospital.png"
                alt="AI models icon"
                width={64}
                height={64}
                className="mb-4"
              />
            </div>
            <Link
              href="#"
              className="text-[#0054aa] hover:underline flex items-center font-normal"
            >
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="p-6 border-b border-r border-gray-200 flex flex-col cursor-pointer justify-between">
            <div>
              <h3 className="text-xl font-medium mb-2">Finance</h3>
              <p className="text-sm text-gray-600 mb-4">
                Automate risk evaluation and regulatory pipelines
              </p>
              <Image
                src="/finance.png"
                alt="Consulting icon"
                width={64}
                height={64}
                className="mb-4"
              />
            </div>
            <Link
              href="#"
              className="text-[#0054aa] hover:underline flex items-center font-normal"
            >
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="p-6 border-b border-r border-l border-gray-200 cursor-pointer flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-medium mb-2">Energy</h3>
              <p className="text-sm text-gray-600 mb-4">
                Real-time visibility across large, dispersed systems
              </p>
              <Image
                src="/lighting.png"
                alt="Consulting icon"
                width={64}
                height={64}
                className="mb-4"
              />
            </div>
            <Link
              href="#"
              className="text-[#0054aa] hover:underline flex items-center font-normal"
            >
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Technology Foundation (added) */}
      <section className="w-full mx-auto px-6 md:px-12 py-8 lg:py-12">
        <h2 className="text-3xl font-[medium] mb-4 text-[#0054aa]">
          Built on Trusted Infrastructure
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          We build on platforms known for scalability and security: Google
          Cloud, AWS, and Microsoft Azure. Our solutions are modular,
          data-centric, and designed with security from the ground up.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-gray-200 rounded-lg overflow-hidden">
          <div className="p-6 border-b border-r border-gray-200 flex flex-col cursor-pointer justify-between">
            <div>
              <h3 className="text-xl font-medium mb-2">AWS</h3>
              <p className="text-sm text-gray-600 mb-4">
                Reliable infrastructure, analytics, and edge services.
              </p>
              <Image
                src="/aws.png"
                alt="AI solutions icon"
                width={100}
                height={100}
                className="mb-4"
              />
            </div>
          </div>
          <div className="p-6 border-b border-r lg:border-r-0 border-gray-200 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-medium mb-2">Google Cloud</h3>
              <p className="text-sm text-gray-600 mb-4">
                Scalable compute, data services, and ML tooling.
              </p>
              <Image
                src="/google-cloud.jpg"
                alt="AI models icon"
                width={100}
                height={100}
                className="mb-4"
              />
            </div>
          </div>
          <div className="p-6 border-b border-r invisible border-gray-200 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-medium mb-2">Microsoft Azure</h3>
              <p className="text-sm text-gray-600 mb-4">
                Enterprise-grade security and integration tooling.
              </p>
              <Image
                src="/placeholder.svg?height=64&width=64"
                alt="Consulting icon"
                width={64}
                height={64}
                className="mb-4"
              />
            </div>
          </div>

          <div className="p-6 border-b border-r border-l border-gray-200 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-medium mb-2">Microsoft Azure</h3>
              <p className="text-sm text-gray-600 mb-4">
                Enterprise-grade security and integration tooling.
              </p>
              <Image
                src="/azure.png"
                alt="Consulting icon"
                width={100}
                height={100}
                className="mb-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why MavenCode Section */}

      <section className="w-full mx-auto px-6 md:px-12 py-12 lg:py-16">
        <div className="w-full mx-auto">
          <h1 className="text-3xl font-[medium] mb-6 text-[#0054aa]">
            Why MavenCode ?
          </h1>
          <h2 className="text-2xl font-[medium] mb-4 text-[#0054aa]">
            Not Automation. Actual Autonomy.
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Automation solves tasks. Autonomy enables choices. That's the leap
            we support, building systems that adapt, evolve, and act
            independently.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 2xl:gap-32">
            {/* Real-time responsiveness */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="bg-[#0054aa] text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {/* Lightning bolt for speed */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-normal mb-2 text-gray-900">
                  Real-time responsiveness by design
                </h3>
                <p className="text-gray-600 mb-4">
                  We've built systems that process millions of decisions daily,
                  with reliability at scale.
                </p>
              </div>
            </div>

            {/* Systems that evolve */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="bg-[#0054aa] text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {/* Brain / AI learning */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4a8 8 0 00-8 8 8 8 0 0016 0 8 8 0 00-8-8z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h.01M15 12h.01M12 15h.01M12 9h.01"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-normal mb-2 text-gray-900">
                  Systems that evolve through use
                </h3>
                <p className="text-gray-600 mb-4">
                  Our AI agents learn from interactions, becoming more effective
                  over time without manual retraining.
                </p>
              </div>
            </div>

            {/* Decision-making at the edge */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="bg-[#0054aa] text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {/* Network / nodes icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6l4 2m0-8a4 4 0 11-8 0 4 4 0 018 0zM6 12a4 4 0 100 8 4 4 0 000-8zm12 0a4 4 0 100 8 4 4 0 000-8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-normal mb-2 text-gray-900">
                  Decision-making at the edge
                </h3>
                <p className="text-gray-600 mb-4">
                  Local processing for faster response times and reduced latency
                  in critical operations.
                </p>
              </div>
            </div>

            {/* Human-AI collaboration */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="bg-[#0054aa] text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {/* Handshake icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 11h.01M16 11h.01M12 15h.01M12 9h.01M4 6l4 4m8-4l4 4M4 18l4-4m8 4l4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-normal mb-2 text-gray-900">
                  Human-AI collaboration
                </h3>
                <p className="text-gray-600 mb-4">
                  Interfaces designed for seamless interaction between your team
                  and autonomous systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action (added) */}
      <section className="bg-[#f5f7fb] py-12">
        <div className="w-full mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-[medium] mb-2 text-[#0054aa] leading-[50px]">
              Build with Less Friction. Scale with More Intelligence.
            </h2>
            <p className="text-gray-700 mb-4 leading-[30px]">
              We craft systems that are adaptable, intelligent, and ready for
              tomorrow's challenges.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Link href="/contact-us">
              <Button className="font-normal bg-[#0054aa] hover:bg-[#003d7f] text-white px-6 py-6">
                Contact MavenCode
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
