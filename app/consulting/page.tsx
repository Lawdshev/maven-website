"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  TrendingUp,
  Heart,
  ShoppingCart,
  Factory,
  Shield,
  Lightbulb,
  Target,
  Zap,
  AlertTriangle,
} from "lucide-react"

export default function ConsultingPage() {
  const industries = [
    {
      title: "Finance & Banking",
      description:
        "Deploy AI-driven fraud detection, risk modeling, and automated compliance to protect assets and unlock smarter financial operations.",
      icon: TrendingUp,
      color: "from-[#0054aa] to-blue-700",
      image: "/finance-consulting.png",
    },
    {
      title: "Healthcare & Life Sciences",
      description:
        "Leverage AI for faster diagnostics, predictive patient care, and automated administrative workflows to improve both outcomes and efficiency.",
      icon: Heart,
      color: "from-blue-600 to-blue-800",
      image: "/healthcare-consulting.png",
    },
    {
      title: "Retail & E-Commerce",
      description:
        "Harness real-time demand forecasting, personalized recommendations, and supply chain optimization to maximize sales and customer loyalty.",
      icon: ShoppingCart,
      color: "from-slate-600 to-slate-800",
      image: "/retail-consulting.png",
    },
    {
      title: "Manufacturing & Logistics",
      description:
        "Integrate AI-powered quality control, predictive maintenance, and intelligent routing to increase uptime, reduce costs, and streamline operations.",
      icon: Factory,
      color: "from-gray-600 to-gray-800",
      image: "/manufacturing-consulting.png",
    },
  ]

  return (
    <div className="text-gray-900">
      {/* Hero Section with Warning */}
      <main className="w-full min-h-[700px] bg-gradient-to-br from-[#0054aa] to-[#003d7f] mx-auto px-6 md:px-12 py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-sm text-red-200 mb-4">
            <Link href="/" className="text-red-200 hover:text-white">
              Home
            </Link>{" "}
            / Consulting
          </div>

          {/* Warning Banner */}
          <div className="bg-[#0054aa] bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-2xl p-6 mb-8">
            <div className="flex items-center mb-4">
              <AlertTriangle className="h-8 w-8 text-yellow-700 mr-3" />
              <h2 className="text-2xl font-[medium] text-white">Hidden AI Dangers That Could Cost You Millions</h2>
            </div>
            <p className="text-[#e3f2fd] text-lg leading-relaxed">
              Without proper AI governance, security protocols, and strategic implementation, organizations face data
              breaches, compliance violations, and operational failures that can devastate business operations and
              reputation.
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[medium] leading-tight mb-6 text-white">
            MavenCode AI Consulting
          </h1>
          <p className="text-xl text-[#e3f2fd] mb-8 max-w-3xl leading-relaxed">
            Navigate AI implementation safely with expert guidance that protects your business while unlocking
            transformational value.
          </p>
          <Button className="bg-white text-[#0054aa] hover:bg-gray-100 px-8 py-4 text-lg font-normal rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
            Discover All We Offer
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </main>

      {/* Consulting Reinvented Section */}
      <section className="w-full mx-auto px-6 md:px-12 py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-[medium] mb-6 text-[#0054aa]">Consulting Reinvented for the AI Era</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              MavenCode AI Consulting blends deep technical mastery with a business-first mindset. At the crossroads of
              advanced AI, automation, and scalable infrastructure, we create solutions that deliver measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-[medium] mb-6 text-gray-900">Our Approach</h3>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  We work side-by-side with clients to advise, design, build, and operate intelligent systems that solve
                  today's challenges and evolve for tomorrow's opportunities.
                </p>

                <div className="space-y-6">
                  {[
                    { icon: Lightbulb, title: "Advise", desc: "Strategic AI roadmaps aligned with business goals" },
                    { icon: Target, title: "Design", desc: "Architecture that scales with your growth" },
                    { icon: Zap, title: "Build", desc: "Implementation with measurable outcomes" },
                    { icon: Shield, title: "Operate", desc: "Ongoing optimization and support" },
                  ].map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#0054aa] to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-normal text-gray-900 text-lg">{step.title}</h4>
                        <p className="text-gray-600">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0054aa] to-blue-700 rounded-3xl transform rotate-3 opacity-10"></div>
              <Image
                src="/ai-consulting-process.png"
                alt="AI consulting process visualization showing strategic planning and implementation phases"
                width={600}
                height={400}
                className="rounded-3xl shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="w-full mx-auto px-6 md:px-12 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-[medium] mb-6 text-[#0054aa]">Industry Expertise</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Deep domain knowledge across critical industries, delivering AI solutions that understand your unique
              challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {industries.map((industry, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${industry.color} p-8 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="relative z-10 flex items-center">
                      <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mr-6">
                        <industry.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-[medium]">{industry.title}</h3>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="relative mb-6 rounded-2xl overflow-hidden bg-gray-50">
                      <Image
                        src={industry.image || "/placeholder.svg"}
                        alt={`${industry.title} AI consulting solutions`}
                        width={500}
                        height={250}
                        className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6">{industry.description}</p>

                    <Button
                      className={`bg-gradient-to-r ${industry.color} hover:opacity-90 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full`}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="w-full mx-auto px-6 md:px-12 py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-[medium] mb-6 text-[#0054aa]">Innovating Together</h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Our partnerships with top technology platforms enable enterprise-grade solutions designed to scale.
          </p>

          {/* Partnership Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            {[
              { name: "AWS", logo: "/aws-logo.png" },
              { name: "Google Cloud", logo: "/gcp-logo.png" },
              { name: "Microsoft Azure", logo: "/azure-logo.png" },
              { name: "OpenAI", logo: "/openai-logo.png" },
            ].map((partner, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={`${partner.name} partnership`}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Next CTA */}
      <section className="bg-gradient-to-br from-[#0054aa] to-blue-700 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="w-full mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-[medium] mb-6 text-white leading-tight">What's Next?</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Ready to see how MavenCode Consulting can accelerate your business? Connect with us to discuss your goals
              and discover how our experts can design and deliver a powerful AI transformation roadmap tailored to you.
            </p>
            <Button className="bg-white text-[#0054aa] hover:bg-gray-100 px-10 py-6 text-lg font-normal rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Book a Consultation
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
