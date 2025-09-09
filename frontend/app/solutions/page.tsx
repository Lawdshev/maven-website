"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Zap,
  BarChart3,
  Bot,
  FileText,
  BarcodeIcon as Blueprint,
  Mic,
  Stethoscope,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

export default function SolutionsPage() {
  
 const solutions = [
    {
      id: "agentic-ai",
      title: "Agentic AI",
      subtitle: "Systems That Run Themselves",
      icon: Bot,
      overview:
        "Agentic AI represents the next leap in artificial intelligence—autonomous systems that can plan, decide, and execute without continuous human intervention. These AI agents collaborate like specialized teams, handling complex processes end-to-end with speed and precision.",
      whyItMatters:
        "Businesses lose countless hours on repetitive decisions and fragmented workflows. Agentic AI eliminates bottlenecks, enabling operations that scale effortlessly and adapt in real time.",
      howItWorks:
        "Multiple specialized AI agents work together: some plan, others execute, and others validate results. This orchestration creates a self-improving ecosystem that learns continuously from context and data.",
      features: [
        "Autonomous Decision-Making",
        "Multi-Agent Collaboration",
        "Self-Improving Intelligence",
        "Data-Aware & Context-Rich",
      ],
      useCases: [
        "Operations",
        "Customer Support",
        "IT & DevOps",
        "Finance",
        "Sales & Marketing",
      ],
      advantages: [
        "Reduce operational costs by up to 40%",
        "Faster time-to-decision across teams",
        "Adaptive intelligence with minimal oversight",
      ],
      benefits: [
        "Scalable automation across departments",
        "Improved accuracy and fewer errors",
        "Frees teams to focus on strategy and growth",
      ],
      image: "/agentic-ai-dashboard.png",
      button: "Book a Demo",
    },
    {
      id: "ai-takeoff",
      title: "AI Takeoff Software",
      subtitle: "From Plans to Estimates in Minutes",
      icon: FileText,
      overview:
        "Our AI Takeoff Software transforms construction plans into precise estimates instantly. It eliminates manual measurement errors and accelerates bid preparation for contractors, engineers, and architects.",
      whyItMatters:
        "Manual takeoffs are slow, inconsistent, and costly. Missing details can make or break a project bid. With AI, teams achieve accurate results in a fraction of the time.",
      howItWorks:
        "Upload digital blueprints or plans, and our AI automatically extracts measurements, applies standard rules, and generates structured estimates ready for use in your existing tools.",
      features: [
        "Instant extraction of measurements",
        "Consistent, error-free results",
        "Seamless tool integration",
        "Faster bid turnaround",
      ],
      useCases: [
        "Construction Estimating",
        "Architecture & Engineering",
        "Manufacturing",
      ],
      advantages: [
        "Up to 80% faster takeoffs",
        "Eliminates human miscalculations",
        "Works with industry-standard formats",
      ],
      benefits: [
        "Higher win rates on bids",
        "Reduced overhead for estimation teams",
        "More time to focus on client relationships",
      ],
      image: "/ai-takeoff-interface.png",
      button: "Book a Demo",
    },
    {
      id: "blueprint-classifier",
      title: "AI Blueprint Classifier",
      subtitle: "Drawings to Data, Fast and Flawless",
      icon: Blueprint,
      overview:
        "Blueprint Classifier converts complex technical drawings into structured, searchable data. With AI-powered recognition and annotation, it accelerates project documentation and collaboration.",
      whyItMatters:
        "Engineering and construction projects deal with thousands of drawings. Misclassification leads to delays and costly rework. AI makes it simple, accurate, and scalable.",
      howItWorks:
        "Using vision-based AI models, the system identifies blueprint elements, annotates them, and organizes them into searchable categories with confidence scoring.",
      features: [
        "Instant Recognition",
        "Smart Annotation",
        "Organized Output",
        "Confidence Scoring",
      ],
      useCases: ["Construction", "Manufacturing", "MEP and Architecture"],
      advantages: [
        "Eliminates manual tagging and sorting",
        "Creates a single source of truth",
        "Accelerates design and review cycles",
      ],
      benefits: [
        "Improved collaboration across stakeholders",
        "Fewer errors in document handling",
        "Reduced time spent on admin work",
      ],
      image: "/blueprint-classifier-demo.png",
      button: "Book a Demo",
    },
    {
      id: "voice-agent",
      title: "AI Voice Agent Platform",
      subtitle: "Speak, Act, Deliver",
      icon: Mic,
      overview:
        "Our AI Voice Agent enables businesses to automate customer interactions with natural, context-aware conversations. It reduces wait times while maintaining a human-like experience.",
      whyItMatters:
        "Customers expect 24/7 service. Traditional call centers are costly and limited. Voice AI handles thousands of calls simultaneously with consistent quality.",
      howItWorks:
        "A no-code builder lets teams design voice agents tailored to their brand. The AI understands intent, processes tasks, and learns from interactions to improve over time.",
      features: [
        "No-Code Voice Agent Builder",
        "Context-Aware Conversations",
        "Multilingual & Brand-Tuned",
        "Performance Insights",
      ],
      useCases: [
        "Customer Support",
        "Order Handling",
        "Appointment Scheduling",
        "Virtual Concierge",
      ],
      advantages: [
        "Available 24/7 without extra staffing",
        "Reduces average handling time by 60%",
        "Scales instantly to demand",
      ],
      benefits: [
        "Happier customers with faster resolutions",
        "Significant cost savings",
        "Better insights into customer behavior",
      ],
      image: "/voice-agent-platform.png",
      button: "Book a Demo",
    },
    {
      id: "medical-coding",
      title: "AI Medical Coding Software",
      subtitle: "From Notes to Codes in Seconds",
      icon: Stethoscope,
      overview:
        "Medical Coding AI transforms physician notes into standardized codes instantly. It reduces administrative burden and ensures accurate claim submission every time.",
      whyItMatters:
        "Manual coding is slow, error-prone, and expensive. Incorrect codes lead to claim denials and revenue loss. AI solves this with speed and accuracy.",
      howItWorks:
        "Our models analyze clinical documentation in real-time, suggest the correct codes, validate compliance, and integrate directly with EHR systems.",
      features: [
        "AI-Powered Code Prediction",
        "Real-Time Validation",
        "Batch Processing",
        "100% EHR Integration",
      ],
      useCases: [
        "Hospitals & Health Systems",
        "Medical Coding Companies",
        "Revenue Cycle Management",
      ],
      advantages: [
        "Up to 95% coding accuracy",
        "Cuts documentation time in half",
        "Fully HIPAA-compliant system",
      ],
      benefits: [
        "Higher claim acceptance rates",
        "Faster reimbursements",
        "Reduced administrative costs",
      ],
      image: "/medical-coding-software.png",
      button: "Book a Demo",
    },
    {
      id: "interview-agent",
      title: "AI Interview Agent",
      subtitle: "Smarter Talent Shortlisting at Scale",
      icon: Users,
      overview:
        "The AI Interview Agent automates initial candidate screenings, scoring applicants consistently and fairly. It shortlists top talent while saving recruiters valuable time.",
      whyItMatters:
        "Hiring pipelines are clogged with repetitive screenings. Recruiters waste hours on unsuitable candidates. AI ensures only the best-fit candidates move forward.",
      howItWorks:
        "Candidates interact with the AI agent through structured conversations. Responses are scored using pre-defined criteria, and recruiters receive a ranked shortlist instantly.",
      features: [
        "24/7 Candidate Access",
        "Automated Scoring",
        "Multilingual Support",
        "Hiring Dashboard",
      ],
      useCases: [
        "Talent Acquisition",
        "HR Departments",
        "Recruitment Agencies",
      ],
      advantages: [
        "Cuts screening time by 70%",
        "Ensures bias-free evaluation",
        "Works at global scale",
      ],
      benefits: [
        "Better hires, faster",
        "Reduced recruiter workload",
        "Improved candidate experience",
      ],
      image: "/interview-agent-dashboard.png",
      button: "Book a Demo",
    },
  ];

  return (
    <div className="text-black max-w-[1780px] mx-auto">
      {/* Hero Section */}
      <motion.main
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full border-b border-gray-200 px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-8"
      >
        <div>
          <div className="text-sm text-black mb-4">
            <Link href="/" className="text-[#0054aa] hover:underline">
              Home
            </Link>{" "}
            / Solutions
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-6xl lg:leading-[70px] mb-6 font-normal">
            <span className="text-[#0054aa]">AI-Powered Solutions,</span>
            <br />
            <span className="text-black">Built for Business Impact</span>
          </h1>
          <p className="text-xl text-black max-w-2xl leading-[35px]">
            From autonomous AI agents to specialized industry tools, our
            solutions deliver measurable results through intelligent automation
            and data-driven insights.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <Image
            src="/solutions-hero.png"
            alt="Solutions overview"
            width={600}
            height={400}
            className="border border-gray-200"
          />
        </motion.div>
      </motion.main>

      {/* Solutions Sections */}
      {solutions.map((solution, idx) => (
        <motion.section
          key={solution.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: idx * 0.15 }}
          className="w-full mx-auto px-6 md:px-12 py-16 border-t border-gray-200"
        >
          <div>
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3 mb-6"
            >
              <div className="flex items-center space-x-3 w-full justify-between">
                <div className="flex items-center space-x-3">
                  <solution.icon className="h-8 w-8 text-[#0054aa]" />
                  <h2 className="text-3xl font-normal text-black">
                    {solution.title}
                  </h2>
                </div>
                <div className="mb-6 max-w-4xl">
                  <p className="text-xl text-black leading-[35px]">
                    {solution.subtitle}
                  </p>
                  <p className="text-xl leading-[35px] text-black ">
                    {solution.overview}
                  </p>
                  <p className="text-xl leading-[35px] text-black ">
                    {solution.whyItMatters}
                  </p>
                  <p className="text-xl leading-[35px] text-black ">
                    {solution.howItWorks}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-normal mb-4 text-[#0054aa]">
                Key Features
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-200 divide-x divide-y divide-gray-200 mb-10">
                {solution.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 flex items-start gap-3 min-h-[250px]"
                  >
                    <CheckCircle className="h-6 w-6 text-[#0054aa] mt-1" />
                    <p className="text-black text-xl leading-[30px]">
                      {feature}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Use Cases, Advantages, Benefits */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center justify-between flex-wrap gap-4"
            >
              <div>
                <h4 className="text-xl font-normal mb-4 text-[#0054aa]">
                  Use Cases
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-200 divide-x divide-y divide-gray-200 mb-10 max-w-2xl">
                  {solution.useCases.map((uc, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="p-6 flex items-start gap-3 min-h-[150px]"
                    >
                      <BarChart3 className="h-6 w-6 text-[#0054aa] mt-1" />
                      <p className="text-black text-xl leading-[30px]">{uc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-normal mb-2 text-[#0054aa]">
                  Key Advantages
                </h4>
                <ul className="list-disc list-inside text-xl leading-[35px] text-black mb-8">
                  {solution.advantages.map((adv, i) => (
                    <li key={i} className="mb-2">
                      {adv}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-normal mb-2 text-[#0054aa]">
                  Benefits
                </h4>
                <ul className="list-disc list-inside text-xl leading-[35px] text-black mb-8">
                  {solution.benefits.map((ben, i) => (
                    <li key={i} className="mb-2">
                      {ben}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <Button className="bg-[#0054aa] text-white hover:bg-[#004080] px-6 py-6 rounded-none text-xl min-w-[200px]">
                {solution.button} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </motion.section>
      ))}
    </div>
  );
}
