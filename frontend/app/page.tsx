"use client";

import type React from "react";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react"; // kept as you had it
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Component() {
  return (
    <div className="max-w-[1800px] mx-auto w-[95%]">
      <main className="w-full h-[600px]  bg-center mx-auto px-6 md:px-12  py-8 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 ">
        <div className="lg:col-span-1 flex flex-col h-full flex flex-col">
          <h1 className="text-2xl md:text-3xl lg:text-6xl  lg:leading-[70px] mb-4">
            <span className="text-[#0054aa]">
              Turning AI Into Your Competitive Edge Less hand-holding. More
              momentum.
            </span>
          </h1>
          <div>
            <p className="text-xl text-black mb-8 max-w-2xl leading-[35px]">
              We build autonomous systems that think, decide, and execute, from
              real-time pipelines to self-improving AI agents. Intelligence that
              moves faster, with less human effort.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 text-2xl">
              <Link href={"/contact-us"}>
                <Button className="font-normal md:min-w-[300px] w-fit rounded-none bg-[#0054aa] hover:bg-[#003d7f] cursor-pointer text-xl  text-white px-6 py-6 flex items-center justify-center">
                  Talk to an Engineer <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1">
          <Image
            src="/ai-brain.webp"
            width={0}
            height={0}
            alt=""
            className="w-full h-auto"
          />
        </div>
      </main>

      {/* Featured Content / Intro (added) */}
      <section className="w-full relative mx-auto px-6 md:px-12 py-12 lg:py-16 bg-white">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl font-mnormal mb-4  text-black -900">
              Built for Autonomy.
            </h2>
            <h3 className="text-2xl font-normaltext-[#0054aa] mb-4">
              Designed for Impact.
            </h3>
            <p className=" text-black -700 mb-6 leading-[35px] text-xl">
              We engineer AI systems that{" "}
              <span className="font-normal  text-black -900">
                think, decide, and adapt
              </span>{" "}
              not just react. Fueled by real-time data, guided by logic, and
              designed to evolve, our solutions help organizations achieve
              measurable transformation.
            </p>

            <ul className="space-y-4 text-xl">           <li>
                <a href="#" className="text-[#0054aa]">
                  Reduce friction
                </a>
              </li>
              <li>
                <a href="#" className="text-[#0054aa]">
                  Scale at speed
                </a>
              </li>
              <li>
                <a href="#" className="text-[#0054aa]">
                  Operate with minimal manual intervention
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column */}
          <div>
            <p className=" text-black -700 mb-6 leading-[35px] text-xl">
              This isn't about chasing abstract AI dreams. It's about{" "}
              <span className="font-normal  text-black -900">
                practical, high-performance intelligence
              </span>{" "}
              that integrates seamlessly into your operations — adaptive agents,
              self-learning models, and scalable infrastructure.
            </p>

            <p className=" text-black -700 mb-6 leading-[35px] text-xl">
              We empower systems to handle the repetitive, predictable, and
              time-consuming tasks, freeing your team to focus on{" "}
              <span className="text-[#0054aa] font-normal">
                innovation, strategy, and human brilliance
              </span>
              .
            </p>

            {/* Benefits grid styled like links */}
            <ul className="space-y-4 text-xl t">
              {[
                "Adaptive agents for evolving tasks ",
                "Self-learning models that grow smarter ",
                "Scalable infrastructure built for speed ",
              ].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-[#0054aa]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Promo Banner */}
        <div className="mt-12 bg-gray-50 border border-gray-200 rounded-none flex flex-col md:flex-row text-lg items-center justify-between">
          <div className="flex items-center justify-center mb-4 md:mb-0 w-[100px] h-[100px] mr-4">
            <Image
              src="/talk.png"
              alt="Transform with Us"
              width={0}
              height={0}
              className="h-auto w-full"
            />
          </div>
          <div className="flex-1 mb-4 md:mb-0">
            <h4 className="font-normal text-2xl  text-black -900">Transform with Us</h4>
            <p className=" text-black -700 text-xl leading-[35px]">
              Unlock autonomy and measurable impact — start building AI that
              adapts with your business today.
            </p>
          </div>
          <a
            href="#"
            className="bg-[#0054aa] text-white px-6 py-3 rounded-none hover:bg-[#004080] transition min-w-[300px] flex items-center justify-between "
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </section>

      {/* What We Build */}
      <section className="w-full mx-auto px-6 md:px-12 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
          {/* LEFT SIDE EXPLANATION */}
          <div>
            <h2 className="text-2xl font-normal text-[#0054aa] mb-4">
              What We Build
            </h2>
            <p className=" text-black -600 text-xl leading-[35px] mb-6 ">
              From adaptive AI agents to cloud-native infrastructure, our
              systems are designed to evolve and scale with your business. Built
              on the world’s most reliable cloud platforms, they combine
              flexibility, speed, and resilience.
            </p>
          </div>

          {/* RIGHT SIDE UNIFIED GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-gray-200 rounded-none overflow-hidden">
            {/* AI Agents */}
            <div className="p-6 border-r border-b border-gray-200">
              <Image
                src="/platform.png"
                alt="AI Agents"
                width={64}
                height={64}
                className="mb-4"
              />
              <h3 className="text-2xl font-normal mb-2">AI Agents</h3>
              <p className="text-lg text-blac30leading-[25px]">
                Lightweight and adaptive components that improve over time.
              </p>
            </div>

            {/* Real-Time Pipelines */}
            <div className="p-6 border-r border-b border-gray-200">
              <Image
                src="/apps.png"
                alt="Pipelines"
                width={64}
                height={64}
                className="mb-4"
              />
              <h3 className="text-2xl font-normal mb-2">Real-Time Pipelines</h3>
              <p className="text-xl leading-[35px]  text-black ">
                Systems built for growth, flexibility, and speed.
              </p>
            </div>

            {/* Cloud Native */}
            <div className="p-6 border-b border-gray-200">
              <Image
                src="/models.png"
                alt="Cloud Native"
                width={64}
                height={64}
                className="mb-4"
              />
              <h3 className="text-2xl font-normal mb-2">Cloud Native</h3>
              <p className="text-xl leading-[35px]  text-black ">
                Optimized for accuracy, speed, and impact.
              </p>
            </div>

            {/* AWS */}
            <div className="p-6 border-r border-gray-200">
              <Image
                src="/aws.png"
                alt="AWS"
                width={64}
                height={64}
                className="mb-4"
              />
              <h3 className="text-2xl font-normal mb-2">AWS</h3>
              <p className="text-xl leading-[35px]  text-black ">
                Reliable infrastructure, analytics, and edge services.
              </p>
            </div>

            {/* GCP */}
            <div className="p-6 border-r border-gray-200">
              <Image
                src="/google-cloud.jpg"
                alt="GCP"
                width={64}
                height={64}
                className="mb-4"
              />
              <h3 className="text-2xl font-normal mb-2">Google Cloud</h3>
              <p className="text-xl leading-[35px]  text-black ">
                Scalable compute, data services, and ML tooling.
              </p>
            </div>

            {/* Azure */}
            <div className="p-6">
              <Image
                src="/azure.png"
                alt="Azure"
                width={64}
                height={64}
                className="mb-4"
              />
              <h3 className="text-2xl font-normal mb-2">Azure</h3>
              <p className="text-xl leading-[35px]  text-black ">
                Enterprise-grade security and global integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why MavenCode Section */}

      <section className="w-full mx-auto px-6 md:px-12 py-12 lg:py-16">
        <div className="w-full mx-auto">
          <h1 className="text-3xl font-normal mb-6 text-[#0054aa]">
            Why MavenCode?
          </h1>
          <h2 className="text-2xl font-normal mb-4 text-[#0054aa]">
            Not Automation. Actual Autonomy.
          </h2>
          <p className="text-xl text-black -700 mb-12 leading-[35px] max-w-3xl">
            Automation solves tasks. Autonomy enables choices. That's the leap
            we support, building systems that adapt, evolve, and act
            independently.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-gray-200">
            {/* Real-time responsiveness */}
            <div className="flex flex-col justify-between p-6 border-b border-r border-gray-200">
              <div className="min-h-[200px]">
                <h3 className="text-2xl font-normal mb-4  text-black -900">
                  Real-time responsiveness
                </h3>
                <p className=" text-black -600 text-xl leading-[35px]">
                  Systems that process millions of decisions daily with
                  reliability at scale.
                </p>
              </div>
              <div className="mt-6 text-[#0054aa]">
                {/* Lightning icon */}⚡
              </div>
            </div>

            {/* Systems that evolve */}
            <div className="flex flex-col justify-between p-6 border-b border-r border-gray-200">
              <div  className="min-h-[200px]">
                <h3 className="text-2xl font-normal mb-4  text-black -900">
                  Systems that evolve
                </h3>
                <p className=" text-black -600 text-xl leading-[35px]">
                  AI agents learn from interactions, improving over time without
                  retraining.
                </p>
              </div>
              <div className="mt-6 text-[#0054aa]">🧠</div>
            </div>

            {/* Decision-making at the edge */}
            <div className="flex flex-col justify-between p-6 border-b border-r border-gray-200">
              <div className="min-h-[200px]">
                <h3 className="text-2xl font-normal mb-4  text-black -900">
                  Decision-making at the edge
                </h3>
                <p className=" text-black -600 text-xl leading-[35px]">
                  Local processing for faster response times and reduced
                  latency.
                </p>
              </div>
              <div className="mt-6 text-[#0054aa]">🌐</div>
            </div>

            {/* Human-AI collaboration */}
            <div className="flex flex-col justify-between p-6 border-b border-gray-200">
              <div  className="min-h-[200px]">
                <h3 className="text-2xl font-normal mb-4  text-black -900">
                  Human-AI collaboration
                </h3>
                <p className=" text-black -600 text-xl leading-[35px]">
                  Interfaces for seamless interaction between teams and AI
                  systems.
                </p>
              </div>
              <div className="mt-6 text-[#0054aa]">🤝</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
