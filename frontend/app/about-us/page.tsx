"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Target,
  Shield,
  Lightbulb,
  Users,
  Zap,
  RefreshCw,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Modal } from "antd";
import { useState } from "react";
import ContactForm from "../contact-us/contact-form";

export default function AboutPage() {
  const [open, setOpen] = useState(false);

  const commitments = [
    {
      title: "Impact that lasts",
      description:
        "Solutions that adapt and scale with your needs, helping you not only achieve immediate goals but also build a foundation for long-term success. We focus on technology that grows with your business rather than holding you back.",
      icon: Target,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Integrity in execution",
      description:
        "Our processes are transparent from start to finish. We operate with clarity, open communication, and accountability at every step — ensuring that you know exactly how your AI journey is progressing and why decisions are made.",
      icon: Shield,
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Innovation with purpose",
      description:
        "We’re not interested in hype. We focus on designing AI that solves practical, real-world challenges — from improving workflows to unlocking entirely new revenue streams. Innovation should always be tied to tangible value.",
      icon: Lightbulb,
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const workingMethods = [
    {
      title: "Co-creation",
      description:
        "We embed ourselves within your teams, working side by side to align business objectives with technological possibilities. Together, we co-design strategies that are relevant, feasible, and impactful.",
      icon: Users,
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Agility",
      description:
        "The AI landscape moves fast, and so do we. Through rapid prototyping, short feedback loops, and iterative delivery, we bring your ideas to life faster while minimizing risk.",
      icon: Zap,
      image:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Integration",
      description:
        "We don’t just build isolated tools; we create solutions that fit into your existing systems seamlessly. Integration means you don’t have to start over — you just get stronger with what you already have.",
      icon: Layers,
      image:
        "https://images.unsplash.com/photo-1614036634925-2f88f9e86c73?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Continuous improvement",
      description:
        "AI doesn’t stop learning, and neither do we. As your business evolves, our solutions evolve too — refining accuracy, efficiency, and usability over time to deliver ongoing value.",
      icon: RefreshCw,
      image:
        "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const principles = [
    {
      title: "Human-Centered AI",
      description:
        "We design solutions that augment human creativity and decision-making, ensuring technology always works for people, not the other way around.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Sustainability",
      description:
        "Technology should contribute to a better future. We prioritize efficiency, scalability, and practices that minimize waste.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Collaboration First",
      description:
        "The best ideas are co-created. We work side by side with your teams to ensure solutions reflect both business needs and user reality.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    },
  ];

  // Animation
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="text-black mx-auto font-normal">
      {/* Hero */}
      <motion.main
        className="w-full max-h-[900px] h-screen relative text-white px-6 md:px-12 py-16 flex "
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0054aa]/80"></div>

        <div className="relative z-10 max-w-[1780px] mx-auto flex justify-between items-center">
          <div className="text-left max-w-[780px] mx-0">
            <div className="text-sm text-blue-200 mb-4">
              <Link href="/" className="hover:underline">
                Home
              </Link>{" "}
              / About Us
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-6xl lg:leading-[70px] mb-6 font-normal">
              We help organizations transform
              <br />
              <span className="text-blue-200">
                ambition into AI-powered results
              </span>
            </h1>

            <p className="text-xl text-white mb-8 max-w-2xl leading-[35px]">
              At MavenCode, technology is more than systems and software—it’s a
              force for meaningful change. We blend strategy, engineering, and
              AI to help clients innovate, scale, and lead with confidence.
            </p>

            <p className="text-lg text-blue-100 leading-[30px]">
              From designing enterprise-ready AI models to streamlining everyday
              processes, we partner with organizations of all sizes to reimagine
              how they work and compete in a digital-first world.
            </p>
          </div>
        </div>
      </motion.main>

      {/* Commitment Cards */}
      <section className="w-full mx-auto px-6 md:px-12 py-20 border-t border-gray-200">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-16">
          <motion.div variants={fadeUp}>
            <h2 className="text-4xl mb-6 text-[#0054aa] font-normal">
              Our Commitment
            </h2>
            <p className="text-xl leading-[35px] text-black max-w-3xl">
              Every solution we deliver is built to create measurable outcomes.
              Whether it’s unlocking new revenue streams, enhancing customer
              experiences, or building more resilient systems, our priority is
              sustainable growth for your organization. We align our work with
              your long-term vision so impact lasts well beyond project launch.
            </p>
          </motion.div>

          <div className="flex flex-col gap-20">
            {commitments.map((c, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center group transition-all duration-300 ${
                  i % 2 === 0 ? "" : "lg:grid-flow-col-dense"
                }`}
              >
                <div className="p-8 bg-white border border-gray-200 shadow-none hover:bg-[#0054aa] hover:text-white transition-all duration-300">
                  <c.icon className="h-10 w-10 text-[#0054aa] mb-4 group-hover:text-white" />
                  <h3 className="text-2xl mb-3 font-normal">{c.title}</h3>
                  <p className="text-lg leading-[30px]">{c.description}</p>
                </div>
                <Image
                  src={c.image}
                  alt={c.title}
                  width={700}
                  height={500}
                  className="w-full h-[350px] object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Methods */}
      <section className="w-full mx-auto px-6 md:px-12 py-20 border-t border-gray-200">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-16">
          <motion.div variants={fadeUp}>
            <h2 className="text-4xl mb-6 text-[#0054aa] font-normal">
              How We Work
            </h2>
            <p className="text-xl leading-[35px] text-black max-w-3xl">
              We go beyond building technology — we embed ourselves as true
              partners. Our approach balances creativity with discipline,
              ensuring every project has both innovative spark and practical
              grounding. Collaboration, agility, and accountability define how
              we operate every day.
            </p>
          </motion.div>

          <div className="flex flex-col gap-20">
            {workingMethods.map((m, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center group transition-all duration-300"
              >
                {/* If even index → Image first, odd index → Text first */}
                {i % 2 === 0 ? (
                  <>
                    <Image
                      src={m.image}
                      alt={m.title}
                      width={700}
                      height={500}
                      className="w-full h-[350px] object-cover"
                    />
                    <div className="p-8 bg-white border border-gray-200 shadow-none hover:bg-[#0054aa] hover:text-white transition-all duration-300">
                      <m.icon className="h-10 w-10 text-[#0054aa] mb-4 group-hover:text-white" />
                      <h3 className="text-2xl mb-3 font-normal">{m.title}</h3>
                      <p className="text-lg leading-[30px]">{m.description}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="p-8 bg-white border border-gray-200 shadow-none hover:bg-[#0054aa] hover:text-white transition-all duration-300">
                      <m.icon className="h-10 w-10 text-[#0054aa] mb-4 group-hover:text-white" />
                      <h3 className="text-2xl mb-3 font-normal">{m.title}</h3>
                      <p className="text-lg leading-[30px]">{m.description}</p>
                    </div>
                    <Image
                      src={m.image}
                      alt={m.title}
                      width={700}
                      height={500}
                      className="w-full h-[350px] object-cover"
                    />
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vertical Cards */}
      <section className="w-full mx-auto px-6 md:px-12 py-20 border-t border-gray-200">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-16">
          <motion.div variants={fadeUp}>
            <h2 className="text-4xl mb-6 text-[#0054aa] font-normal">
              What Drives Us
            </h2>
            <p className="text-xl leading-[35px] text-black max-w-3xl">
              Beyond methods and processes, we’re inspired by the principles
              that guide meaningful AI adoption. These are the cornerstones of
              how we deliver impact that matters.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {principles.map((card, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex flex-col bg-white border border-gray-200 group hover:bg-[#0054aa] hover:text-white transition-all duration-300"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  width={400}
                  height={250}
                  className="w-full h-[250px] object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl mb-3 font-normal">{card.title}</h3>
                  <p className="text-lg leading-[28px]">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <motion.section
        className="w-full mx-auto px-6 md:px-12 py-20 border-t border-gray-200"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl mb-6 text-[#0054aa] font-normal">
              Who We Are
            </h2>
            <p className="text-xl text-black leading-[35px] mb-6">
              We are engineers, strategists, and problem solvers who believe AI
              should empower people, not replace them. Our mission is to build
              systems that combine human creativity with machine intelligence to
              drive impact where it matters most.
            </p>
            <p className="text-xl text-black leading-[35px] mb-6">
              Our team has worked across industries — from healthcare and
              finance to logistics and retail — helping organizations apply AI
              responsibly and effectively. We understand that AI is not a
              one-size-fits-all solution, and we tailor everything we do to your
              unique challenges.
            </p>
            <p className="text-xl text-black leading-[35px]">
              With a culture rooted in transparency, collaboration, and
              experimentation, MavenCode is more than a service provider — we’re
              your long-term innovation partner.
            </p>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
            alt="Our Team"
            width={700}
            height={500}
            className="w-full h-[400px] object-cover"
          />
        </div>
      </motion.section>

      {/* CTA */}
      <motion.div
        className="my-20 bg-white border border-gray-200 p-10 flex flex-col md:flex-row text-lg items-center justify-between group transition-all duration-500 hover:bg-[#0054aa] hover:text-white hover:-translate-y-2"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="mx-auto max-w-[1780px]">
          <div className="flex-1 mb-6">
            <h4 className="font-semibold text-3xl mb-2">
              Let's Shape Your AI Future
            </h4>
            <p className="text-xl leading-[35px] max-w-3xl">
              Talk to our experts and discover how MavenCode can help you
              design, build, and scale AI solutions that transform your
              business. Whether you’re just starting your AI journey or scaling
              enterprise-wide adoption, we’re here to guide you every step of
              the way.
            </p>
          </div>
          <Button
            variant="outline"
            className="bg-[#0054aa] hover:bg-black text-white text-xl rounded-none w-fit px-6 py-6 md:min-w-[200px] transition-all duration-300 group-hover:bg-white group-hover:text-[#0054aa]"
            onClick={() => setOpen(true)}
          >
            Contact Us
          </Button>
        </div>
      </motion.div>

      {/* Contact Modal */}
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        className="contact-modal-wrapper"
        style={{ top: 20 }}
      >
        <ContactForm />
      </Modal>
    </div>
  );
}
