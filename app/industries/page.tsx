"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  ShoppingCart,
  Heart,
  TrendingUp,
  Zap,
  Users,
  Shield,
  BarChart3,
  Clock,
} from "lucide-react";

export default function IndustriesPage() {
  return (
    <div className="text-gray-900">
      {/* Hero Section */}
      <main className="w-full min-h-[700px]  bg-cover bg-center mx-auto px-6 md:px-12 py-8 lg:py-16 grid grid-cols-1 lg:grid-cols-1 gap-8">
        <div className="flex items-center justify-between">
          <div className="lg:col-span-1 flex flex-col justify-center w-[45%]">
            <div className="text-sm text-gray-500 mb-4">
              <Link href="/" className="text-[#0054aa] hover:underline">
                Home
              </Link>{" "}
              / Industries
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[medium] leading-tight mb-6">
              <span className="text-[#0054aa]">Intelligent Solutions,</span>
              <br />
              <span className="text-gray-900">Built for Your Industry</span>
            </h1>
            <p className="text-xl text-black mb-8 max-w-2xl leading-[30px]">
              From retail shelves to hospital floors, trading desks to energy
              grids, MavenCode designs AI, cloud, and data systems that meet the
              demands of your world.
            </p>
          </div>
          <div className="relative w-[45%]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0054aa] to-[#0054aa] -700 rounded-3xl transform rotate-3 opacity-10"></div>
            <Image
              src="/industries.png"
              alt="Aindustries"
              width={600}
              height={400}
              className="rounded-3xl shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </main>

      {/* Retail Section */}
      <section className="w-full mx-auto px-6 md:px-12 py-16 lg:py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-50 opacity-30"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0054aa] opacity-5 rounded-full -translate-y-48 translate-x-48"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {/* Industry Header */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0054aa] to-[#0054aa] -700 rounded-2xl flex items-center justify-center shadow-lg">
                <ShoppingCart className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-[medium] text-[#0054aa]">Retail</h2>
                <div className="w-20 h-1 bg-[from-[#0054aa] to-[#0054aa] -400 rounded-full mt-2"></div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-[medium] mb-6 text-gray-900">
                Smarter inventory and operations with smarter data flow.
              </h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Retail thrives on timing, precision, and customer experience,
                and each depends on accurate, fast-moving data. Our AI-powered
                systems give retailers the tools to respond instantly to shifts
                in demand, supply chain disruptions, and customer preferences.
              </p>

              {/* Applications Cards */}
              <div className="space-y-6 mb-8">
                <h4 className="text-xl font-normal text-gray-900 flex items-center">
                  <BarChart3 className="h-5 w-5 text-[#0054aa] mr-2" />
                  Applications of AI in Retail:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Demand Forecasting",
                      desc: "Predict future sales with precision to avoid overstocking and lost revenue.",
                      icon: TrendingUp,
                    },
                    {
                      title: "Dynamic Pricing",
                      desc: "Adjust prices in real time based on demand, competition, and inventory levels.",
                      icon: BarChart3,
                    },
                    {
                      title: "Customer Personalization",
                      desc: "Recommend products and promotions tailored to individual behavior.",
                      icon: Users,
                    },
                    {
                      title: "Supply Chain Optimization",
                      desc: "Monitor inventory, shipments, and vendor performance in real time.",
                      icon: Shield,
                    },
                  ].map((app, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-blue-50 to-slate-50 p-4 rounded-xl border border-blue-100 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-[#0054aa] rounded-lg flex items-center justify-center flex-shrink-0">
                          <app.icon className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <h5 className="font-normal text-gray-900 text-sm">
                            {app.title}
                          </h5>
                          <p className="text-xs text-gray-600 mt-1">
                            {app.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0054aa] h-[400px] to-[#0054aa] -700 rounded-3xl transform rotate-3 opacity-10"></div>
            <Image
              src="/ai-retail-solutions.png"
              alt="AI retail solutions for inventory management, dynamic pricing, and customer personalization"
              width={600}
              height={400}
              className="rounded-3xl shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-300"
            />

            {/* Move benefits section here */}
            <div className="bg-[from-slate-50 to-gray-50 p-6 rounded-2xl border border-gray-200 mt-8">
              <h4 className="text-lg font-normal mb-4 text-gray-900 flex items-center">
                <CheckCircle className="h-5 w-5 text-[#0054aa] mr-2" />
                Key Benefits:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Fewer stockouts and reduced waste",
                  "Increased revenue through targeted offers",
                  "Faster response to market changes",
                  "Improved customer satisfaction",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#0054aa] rounded-full"></div>
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Move button here */}
            <div className="mt-6">
              <Link href="/contact-us">
                <Button className=" w-fit mx-auto bg-[#0054aa] to-[#0054aa] -800 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full h-[46px]">
                  Transform Your Retail Operations
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Section */}
      <section className="w-full mx-auto px-6 md:px-12 py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-slate-50 to-[#0054aa] -50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-gray-200 opacity-20 rounded-full -translate-y-36 -translate-x-36"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 opacity-20 rounded-full translate-y-48 translate-x-48"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-1 lg:order-2">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-slate-700 rounded-3xl transform -rotate-3 opacity-10"></div>
            <Image
              src="/ai-healthcare-solutions.png"
              alt="AI healthcare solutions for predictive diagnostics and clinical decision support"
              width={600}
              height={400}
              className="rounded-3xl shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-300"
            />

            {/* Move benefits section here */}
            <div className="bg-[from-slate-50 to-gray-50 p-6 rounded-2xl border border-gray-200 mt-8">
              <h4 className="text-lg font-normal mb-4 text-gray-900 flex items-center">
                <CheckCircle className="h-5 w-5 text-[#0054aa] mr-2" />
                Patient & Operational Benefits:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Faster, more accurate diagnoses",
                  "Better patient outcomes with proactive care",
                  "Reduced operational costs",
                  "Improved compliance and data security",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#0054aa] rounded-full"></div>
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Move button here */}
            <div className="mt-6">
              <Link href="/contact-us">
                <Button className=" w-fit mx-auto bg-[#0054aa] text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full h-[46px]">
                  Explore Healthcare AI Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="space-y-8 order-2 lg:order-1">
            {/* Industry Header */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-[#0054aa] rounded-2xl flex items-center justify-center shadow-lg">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-[medium] text-[#0054aa]">Healthcare</h2>
                <div className="w-20 h-1 bg-[#0054aa] rounded-full mt-2"></div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-[medium] mb-6 text-gray-900">
                Support critical decisions with accurate, fast insights.
              </h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                In healthcare, the stakes are high. Every decision affects
                patient outcomes, compliance, and operational efficiency. Our AI
                and data solutions help providers, researchers, and
                administrators make smarter choices, in seconds, not days.
              </p>

              {/* Applications Grid */}
              <div className="space-y-6 mb-8">
                <h4 className="text-xl font-normal text-gray-900 flex items-center">
                  <Heart className="h-5 w-5 text-[#0054aa] mr-2" />
                  Applications of AI in Healthcare:
                </h4>
                <div className="space-y-4">
                  {[
                    {
                      title: "Predictive Diagnostics",
                      desc: "Identify disease risk early with AI-assisted imaging and patient data analysis.",
                      color: "#000",
                      border: "border-gray-200",
                    },
                    {
                      title: "Operational Efficiency",
                      desc: "Automate scheduling, resource allocation, and supply management.",
                    color: "#000",
                      border: "border-slate-200",
                    },
                    {
                      title: "Clinical Decision Support",
                      desc: "Deliver real-time recommendations to clinicians at the point of care.",
                   color: "#000",
                      border: "border-blue-200",
                    },
                    {
                      title: "Regulatory Compliance",
                      desc: "Ensure adherence to HIPAA and other data privacy regulations.",
                      color: "#000",
                      border: "border-gray-200",
                    },
                  ].map((app, index) => (
                    <div
                      key={index}
                      className={`bg-[${app.color} p-4 rounded-xl border ${app.border} hover:shadow-md transition-all duration-300`}
                    >
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-[#0054aa] mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-normal text-gray-900">
                            {app.title}
                          </span>
                          <span className="text-gray-700"> – {app.desc}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Finance Section */}
      <section className="w-full mx-auto px-6 md:px-12 py-16 lg:py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-50 opacity-50"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0054aa] opacity-10 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gray-300 opacity-10 rounded-full translate-y-36 -translate-x-36"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {/* Industry Header */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0054aa] to-[#0054aa] -700 rounded-2xl flex items-center justify-center shadow-lg">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-[medium] text-[#0054aa]">Finance</h2>
                <div className="w-20 h-1 bg-[from-[#0054aa] to-[#0054aa] -400 rounded-full mt-2"></div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-[medium] mb-6 text-gray-900">
                Automate risk evaluation and regulatory pipelines.
              </h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                The financial services sector has always been data-driven, but
                the rise of AI is redefining how firms assess risk, detect
                fraud, and make investment decisions. With vast quantities of
                clean, structured data available, the opportunity to automate
                and enhance decision-making is immense.
              </p>

              {/* Applications with Icons */}
              <div className="space-y-6 mb-8">
                <h4 className="text-xl font-normal text-gray-900 flex items-center">
                  <TrendingUp className="h-5 w-5 text-[#0054aa] mr-2" />
                  Applications of AI in Finance:
                </h4>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    {
                      title: "Time Series Prediction",
                      desc: "Forecast market movements with stacked models that outperform single-model approaches.",
                      icon: BarChart3,
                        gradient: "#0054aa",
                    },
                    {
                      title: "Automated Due Diligence",
                      desc: "Use AI to review contracts, agreements, and financial documents, reducing manual errors.",
                      icon: Shield,
                     gradient: "#0054aa",
                    },
                    {
                      title: "Fraud Detection & Risk Management",
                      desc: "Identify anomalies, detect threats early, and automatically generate risk reports.",
                      icon: Shield,
                        gradient: "#0054aa",
                    },
                    {
                      title: "Portfolio Management",
                      desc: "Continuously adjust investment strategies based on real-time market conditions.",
                      icon: TrendingUp,
                      gradient: "#0054aa",
                    },
                  ].map((app, index) => (
                    <div
                      key={index}
                      className="bg-[from-blue-50 to-slate-50 p-5 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-10 h-10 bg-[${app.gradient}]  rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <app.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h5 className="font-normal text-gray-900 mb-1">
                            {app.title}
                          </h5>
                          <p className="text-sm text-gray-600">{app.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0054aa] to-[#0054aa] -700 rounded-3xl transform rotate-3 opacity-10"></div>
            <Image
              src="/ai-finance-solutions.png"
              alt="AI finance solutions for fraud detection, risk management, and portfolio optimization"
              width={600}
              height={400}
              className="rounded-3xl shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-300"
            />

            {/* Move benefits section here */}
            <div className="bg-[from-slate-50 to-gray-50 p-6 rounded-2xl border border-gray-200 mt-8">
              <h4 className="text-lg font-normal mb-4 text-gray-900 flex items-center">
                <CheckCircle className="h-5 w-5 text-[#0054aa] mr-2" />
                Financial Benefits:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Faster, more accurate insights",
                  "Lower operational risk and reduced fraud",
                  "Increased profitability through smarter decisions",
                  "Continuous system improvement with ML",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#0054aa] rounded-full"></div>
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Move button here */}
            <div className="mt-6">
              <Link href="/contact-us">
                <Button className=" w-fit mx-auto bg-[#0054aa] -800 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full h-[46px]">
                  Strengthen Your Financial Operations
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Section */}
      <section className="w-full mx-auto px-6 md:px-12 py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-[#0054aa] -50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-gray-200 opacity-20 rounded-full -translate-y-40 -translate-x-40"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-200 opacity-20 rounded-full translate-y-48 translate-x-48"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-1 lg:order-2">
            <div className="absolute inset-0 bg-[#0054aa] rounded-3xl transform -rotate-3 opacity-10"></div>
            <Image
              src="/ai-energy-solutions.png"
              alt="AI energy solutions for predictive maintenance, load forecasting, and remote monitoring"
              width={600}
              height={400}
              className="rounded-3xl shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-300"
            />

            {/* Move benefits section here */}
            <div className="bg-[from-slate-50 to-gray-50 p-6 rounded-2xl border border-gray-200 mt-8">
              <h4 className="text-lg font-normal mb-4 text-gray-900 flex items-center">
                <CheckCircle className="h-5 w-5 text-[#0054aa] mr-2" />
                Operational Benefits:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Reduced downtime and maintenance costs",
                  "More reliable energy delivery",
                  "Lower environmental footprint",
                  "Faster incident detection and resolution",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#0054aa] rounded-full"></div>
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Move button here */}
            <div className="mt-6">
              <Link href="/contact-us">
                <Button className=" w-fit mx-auto bg-[#0054aa] text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full h-[46px]">
                  Power Your Energy Network with AI
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="space-y-8 order-2 lg:order-1">
            {/* Industry Header */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-[#0054aa] rounded-2xl flex items-center justify-center shadow-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-[medium] text-slate-700">Energy</h2>
                <div className="w-20 h-1 bg-[#0054aa] rounded-full mt-2"></div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-[medium] mb-6 text-gray-900">
                Real-time visibility across large, dispersed systems.
              </h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Energy operations span vast geographies and involve countless
                moving parts, all of which need constant monitoring. Our
                AI-enabled platforms turn raw sensor and field data into
                actionable intelligence for operators and decision-makers.
              </p>

              {/* Applications with Timeline Style */}
              <div className="space-y-6 mb-8">
                <h4 className="text-xl font-normal text-gray-900 flex items-center">
                  <Zap className="h-5 w-5 text-[#0054aa] mr-2" />
                  Applications of AI in Energy:
                </h4>
                <div className="space-y-4">
                  {[
                    {
                      title: "Predictive Maintenance",
                      desc: "Detect equipment issues before they cause costly downtime.",
                      icon: Clock,
                        gradient: "#0054aa",
                    },
                    {
                      title: "Load Forecasting",
                      desc: "Predict energy demand to optimize production and distribution.",
                      icon: BarChart3,
                     gradient: "#0054aa",
                    },
                    {
                      title: "Remote Monitoring",
                      desc: "Track performance of assets across multiple locations in real time.",
                      icon: Shield,
                        gradient: "#0054aa",
                    },
                    {
                      title: "Sustainability Optimization",
                      desc: "Analyze energy usage to improve efficiency and reduce environmental impact.",
                      icon: Zap,
                      gradient: "#0054aa",
                    },
                  ].map((app, index) => (
                    <div key={index} className="relative">
                      <div className="flex items-start space-x-4 bg-[from-slate-50 to-gray-50 p-5 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300 group">
                        <div
                          className={`w-10 h-10 bg-[${app.gradient}]  rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <app.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h5 className="font-normal text-gray-900 mb-1">
                            {app.title}
                          </h5>
                          <p className="text-sm text-gray-600">{app.desc}</p>
                        </div>
                      </div>
                      {index < 3 && (
                        <div className="absolute left-5 top-16 w-0.5 h-4 bg-gradient-to-b from-slate-300 to-gray-300"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
