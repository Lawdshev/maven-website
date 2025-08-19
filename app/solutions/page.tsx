"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Bot,
  FileText,
  BarcodeIcon as Blueprint,
  Mic,
  Stethoscope,
  Users,
  Zap,
  Shield,
  BarChart3,
  CheckCircle,
  Play,
} from "lucide-react"

export default function SolutionsPage() {
  const solutions = [
    {
      id: "agentic-ai",
      title: "Agentic AI",
      subtitle: "Systems That Run Themselves",
      icon: Bot,
      color: "from-[#0054aa] to-blue-700",
      features: [
        "Autonomous Decision-Making",
        "Multi-Agent Collaboration",
        "Self-Improving Intelligence",
        "Data-Aware & Context-Rich",
      ],
      useCases: ["Operations", "Customer Support", "IT & DevOps", "Finance", "Sales & Marketing"],
      image: "/agentic-ai-dashboard.png",
    },
    {
      id: "ai-takeoff",
      title: "AI Takeoff Software",
      subtitle: "From Plans to Estimates in Minutes",
      icon: FileText,
      color: "from-blue-600 to-blue-800",
      features: [
        "Instant extraction of measurements",
        "Consistent, error-free results",
        "Seamless tool integration",
        "Faster bid turnaround",
      ],
      useCases: ["Construction Estimating", "Architecture & Engineering", "Manufacturing"],
      image: "/ai-takeoff-interface.png",
    },
    {
      id: "blueprint-classifier",
      title: "AI Blueprint Classifier",
      subtitle: "Drawings to Data, Fast and Flawless",
      icon: Blueprint,
      color: "from-slate-600 to-slate-800",
      features: ["Instant Recognition", "Smart Annotation", "Organized Output", "Confidence Scoring"],
      useCases: ["Construction", "Manufacturing", "MEP and Architecture"],
      image: "/blueprint-classifier-demo.png",
    },
    {
      id: "voice-agent",
      title: "AI Voice Agent Platform",
      subtitle: "Speak, Act, Deliver",
      icon: Mic,
      color: "from-[#0054aa] to-blue-600",
      features: [
        "No-Code Voice Agent Builder",
        "Context-Aware Conversations",
        "Multilingual & Brand-Tuned",
        "Performance Insights",
      ],
      useCases: ["Customer Support", "Order Handling", "Appointment Scheduling", "Virtual Concierge"],
      image: "/voice-agent-platform.png",
    },
    {
      id: "medical-coding",
      title: "AI Medical Coding Software",
      subtitle: "From Notes to Codes in Seconds",
      icon: Stethoscope,
      color: "from-blue-700 to-slate-700",
      features: ["AI-Powered Code Prediction", "Real-Time Validation", "Batch Processing", "100% EHR Integration"],
      useCases: ["Hospitals & Health Systems", "Medical Coding Companies", "Revenue Cycle Management"],
      image: "/medical-coding-software.png",
    },
    {
      id: "interview-agent",
      title: "AI Interview Agent",
      subtitle: "Smarter Talent Shortlisting at Scale",
      icon: Users,
      color: "from-slate-700 to-gray-800",
      features: ["24/7 Candidate Access", "Automated Scoring", "Multilingual Support", "Hiring Dashboard"],
      useCases: ["Talent Acquisition", "HR Departments", "Recruitment Agencies"],
      image: "/interview-agent-dashboard.png",
    },
  ]

  return (
    <div className="text-gray-900">
      {/* Hero Section */}
      <main className="w-full min-h-[600px] bg-gradient-to-br from-[#0054aa] to-blue-800 mx-auto px-6 md:px-12 py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="text-sm text-blue-200 mb-4">
            <Link href="/" className="text-blue-200 hover:text-white">
              Home
            </Link>{" "}
            / Solutions
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[medium] leading-tight mb-6 text-white">
            AI-Powered Solutions
            <br />
            <span className="text-blue-200">Built for Business Impact</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            From autonomous AI agents to specialized industry tools, our solutions deliver measurable results through
            intelligent automation and data-driven insights.
          </p>
          <Button className="bg-white text-[#0054aa] hover:bg-gray-100 px-8 py-4 text-lg font-normal rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
            Explore All Solutions
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </main>

      {/* Solutions Grid */}
      <section className="w-full mx-auto px-6 md:px-12 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-[medium] mb-4 text-[#0054aa]">Six Solutions, Endless Possibilities</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each solution is designed to solve specific business challenges with AI-first engineering and measurable
              outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {solutions.map((solution, index) => (
              <div key={solution.id} className="group">
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${solution.color} p-8 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="relative z-10 flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mr-4">
                            <solution.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-[medium]">{solution.title}</h3>
                            <p className="text-sm opacity-90">{solution.subtitle}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Image */}
                    <div className="relative mb-6 rounded-2xl overflow-hidden bg-gray-50">
                      <Image
                        src={solution.image || "/placeholder.svg"}
                        alt={`${solution.title} interface demonstration`}
                        width={500}
                        height={300}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      <div className="absolute bottom-4 right-4">
                        <div className="w-10 h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                          <Play className="h-4 w-4 text-gray-700 ml-0.5" />
                        </div>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-lg font-normal mb-4 text-gray-900 flex items-center">
                        <Zap className="h-5 w-5 text-[#0054aa] mr-2" />
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {solution.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-[#0054aa] flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Use Cases */}
                    <div className="mb-6">
                      <h4 className="text-lg font-normal mb-4 text-gray-900 flex items-center">
                        <BarChart3 className="h-5 w-5 text-[#0054aa] mr-2" />
                        Use Cases
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.useCases.map((useCase, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-50 text-[#0054aa] text-sm rounded-full border border-blue-100"
                          >
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-4 border-t border-gray-100">
                      <Button
                        className={`bg-gradient-to-r ${solution.color} hover:opacity-90 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full`}
                      >
                        Book a Demo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Solutions */}
      <section className="w-full mx-auto px-6 md:px-12 py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-[medium] mb-6 text-[#0054aa]">
              Why MavenCode Solutions Lead the Market
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every solution is built with AI-first engineering, outcome-driven design, and enterprise-ready
              architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "AI-First Engineering",
                description: "Every component maximizes AI's autonomy and intelligence from the ground up.",
                color: "from-[#0054aa] to-blue-600",
              },
              {
                icon: BarChart3,
                title: "Outcome-Driven",
                description: "Success measured in reduced manual work, faster cycles, and higher output.",
                color: "from-blue-600 to-blue-700",
              },
              {
                icon: Shield,
                title: "Enterprise-Ready",
                description: "Secure, scalable, and adaptable to any platform with seamless integrations.",
                color: "from-blue-700 to-slate-700",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-[medium] mb-4 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="w-full mx-auto px-6 md:px-12 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-[medium] mb-6 text-[#0054aa]">Proven Results Across Industries</h2>
            <p className="text-lg text-gray-600">Our solutions deliver measurable impact from day one.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { metric: "80%", label: "Reduction in manual work" },
              { metric: "50%", label: "Faster processing times" },
              { metric: "70%", label: "Cost savings achieved" },
              { metric: "24/7", label: "Autonomous operation" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-[medium] text-[#0054aa] mb-2">{stat.metric}</div>
                <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-[#0054aa] to-blue-700 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="w-full mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-[medium] mb-6 text-white leading-tight">
              READY TO TRANSFORM YOUR OPERATIONS?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Book a personalized demo to see how our AI solutions can solve your specific business challenges and
              deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <Button className="bg-white text-[#0054aa] hover:bg-gray-100 px-10 py-6 text-lg font-normal rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  Book a Demo
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
              <Link href="/contact-us">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#0054aa] px-10 py-6 text-lg font-normal rounded-xl transition-all duration-300 bg-transparent"
                >
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
