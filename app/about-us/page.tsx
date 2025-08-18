"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Target,
  Shield,
  Lightbulb,
  Users,
  Zap,
  RefreshCw,
  Layers,
  CheckCircle,
  Heart,
  Award,
  Rocket,
} from "lucide-react"

export default function AboutPage() {
  const commitments = [
    {
      title: "Impact that lasts",
      description: "Solutions that adapt and scale with your needs",
      icon: Target,
      color: "from-[#0054aa] to-blue-600",
    },
    {
      title: "Integrity in execution",
      description: "Clear, transparent processes from start to finish",
      icon: Shield,
      color: "from-blue-600 to-blue-700",
    },
    {
      title: "Innovation with purpose",
      description: "AI that solves real problems, not just creates hype",
      icon: Lightbulb,
      color: "from-blue-700 to-slate-700",
    },
  ]

  const workingMethods = [
    {
      title: "Co-creation",
      description: "Working alongside your teams to align technology with business goals",
      icon: Users,
      gradient: "from-[#0054aa] to-blue-600",
    },
    {
      title: "Agility",
      description: "Rapid prototyping, testing, and scaling for faster results",
      icon: Zap,
      gradient: "from-blue-600 to-blue-700",
    },
    {
      title: "Integration",
      description: "Solutions designed to fit seamlessly into your existing systems",
      icon: Layers,
      gradient: "from-blue-700 to-slate-700",
    },
    {
      title: "Continuous improvement",
      description: "AI that learns, adapts, and grows with your business",
      icon: RefreshCw,
      gradient: "from-slate-700 to-gray-700",
    },
  ]

  return (
    <div className="text-gray-900">
      {/* Hero Section */}
      <main className="w-full min-h-[700px] bg-gradient-to-br from-[#0054aa] to-blue-800 mx-auto px-6 md:px-12 py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="text-sm text-blue-200 mb-4">
            <Link href="/" className="text-blue-200 hover:text-white">
              Home
            </Link>{" "}
            / About Us
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 text-white">
            We help organizations transform
            <br />
            <span className="text-blue-200">ambition into AI-powered results</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            At MavenCode, technology is more than systems and software—it's a force for meaningful change. We blend
            strategic insight, engineering excellence, and a deep understanding of AI to help clients innovate, scale,
            and lead with confidence.
          </p>
        </div>
      </main>

      {/* Our Commitment */}
      <section className="w-full mx-auto px-6 md:px-12 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0054aa]">Our Commitment</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              We measure success by the outcomes we create. Every solution we design is built to deliver measurable
              value, improve operational resilience, and open new opportunities for growth. We commit to:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commitments.map((commitment, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${commitment.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <commitment.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{commitment.title}</h3>
                <p className="text-gray-600 leading-relaxed">{commitment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="w-full mx-auto px-6 md:px-12 py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0054aa]">How We Work</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              We work as partners, not just providers. Our approach combines:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {workingMethods.map((method, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-6">
                    <div
                      className={`w-14 h-14 bg-gradient-to-r ${method.gradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <method.icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900">{method.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{method.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="w-full mx-auto px-6 md:px-12 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0054aa]">Who We Are</h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  MavenCode is a team of engineers, strategists, and innovators with one mission — to help organizations
                  operate at their highest potential through AI and automation.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We bring together expertise in hybrid cloud, data engineering, and intelligent systems to solve
                  challenges across industries. Our strength lies in blending deep technical knowledge with
                  business-first thinking, ensuring every project delivers both innovation and impact.
                </p>
              </div>

              {/* Key Strengths */}
              <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center">
                  <Award className="h-5 w-5 text-[#0054aa] mr-2" />
                  Our Core Strengths
                </h3>
                <div className="space-y-3">
                  {[
                    "Deep technical expertise in AI and automation",
                    "Business-first approach to technology solutions",
                    "Cross-industry experience and domain knowledge",
                    "Proven track record of measurable results",
                  ].map((strength, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-[#0054aa] flex-shrink-0" />
                      <span className="text-gray-700">{strength}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0054aa] to-blue-700 rounded-3xl transform rotate-3 opacity-10"></div>
              <Image
                src="/mavencode-team.png"
                alt="MavenCode team of engineers, strategists, and AI innovators collaborating on solutions"
                width={600}
                height={400}
                className="rounded-3xl shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-300"
              />

              {/* Stats Overlay */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 z-20">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#0054aa]">50+</div>
                    <div className="text-sm text-gray-600">Projects Delivered</div>
                  </div>
                  <div className="w-px h-12 bg-gray-200"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#0054aa]">10+</div>
                    <div className="text-sm text-gray-600">Industries Served</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full mx-auto px-6 md:px-12 py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#0054aa]">What Drives Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Purpose-Driven Innovation",
                description: "Every solution we build serves a meaningful business purpose and creates lasting value.",
              },
              {
                icon: Users,
                title: "Partnership Mindset",
                description: "We succeed when our clients succeed. Your goals become our mission.",
              },
              {
                icon: Rocket,
                title: "Continuous Evolution",
                description: "We stay ahead of technology trends to deliver tomorrow's solutions today.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#0054aa] to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">Let's Shape Your AI Future</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Talk to our experts and discover how MavenCode can help you design, build, and scale AI solutions that
              transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <Button className="bg-white text-[#0054aa] hover:bg-gray-100 px-10 py-6 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  Book a Demo
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
              <Link href="/contact-us">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#0054aa] px-10 py-6 text-lg font-semibold rounded-xl transition-all duration-300 bg-transparent"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
