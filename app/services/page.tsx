import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Brain,
  Cloud,
  Database,
  Users,
  CheckCircle,
  Building,
  Heart,
  DollarSign,
  Zap,
} from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-6 md:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-sm text-gray-500 mb-4">
              <Link href="/" className="text-[#0054aa] hover:underline">
                Home
              </Link>{" "}
              / Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-[#0054aa]">
              <span className="text-[#0054aa]">Transform Your Business</span>{" "}
              with <span className="text-[#0054aa]">AI, Cloud, and Data</span>
            </h1>
            <p className="text-xl leading-[30px] text-gray-700 mb-8 max-w-2xl">
              In today's competitive landscape, staying ahead means making
              smarter decisions, operating more efficiently, and unlocking new
              opportunities. Our AI, cloud, and data solutions are designed to
              give you the precision, speed, and scale needed to outpace
              competitors and lead your industry.
            </p>
            <div className="flex flex-col  sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 text-2xl">
              <Link href={"/contact-us"}>
                <Button className="bg-[#0054aa] hover:bg-[#003d7f] min-w-[200px] cursor-pointer text-xl  text-white px-6 py-6 rounded-md flex items-center justify-center">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/ai-transformation-hero.png"
              alt="Minimal navy and cobalt arcs on white background converging to a central point, symbolizing AI-powered business transformation"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* AI + DATA */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-[#0054aa] -100 rounded-lg">
                <Brain className="h-8 w-8 text-[#fff]" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">AI + DATA</h2>
            </div>
            <div className="mb-6">
              <Image
                src="/ai-data-interface.png"
                alt="Futuristic AI interface with industry icons and flowing data streams representing machine learning and predictive analytics"
                width={500}
                height={300}
                className="rounded-lg w-full"
              />
            </div>
            <p className="text-xl text-gray-700 mb-6 font-semibold">
              Harness the potential of artificial intelligence to solve
              industry-defining challenges.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700 text-lg font-medium leading-[30px]">
                  Machine learning models tailored to retail, healthcare,
                  finance, and energy operations
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700 text-lg font-medium leading-[30px]">
                  Predictive analytics to optimize decisions and anticipate
                  trends
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700 text-lg font-medium leading-[30px]">
                  Natural language processing for smarter, faster interactions
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700 text-lg font-medium leading-[30px]">
                  AI governance to ensure fairness, transparency, and ethical
                  deployment
                </span>
              </li>
            </ul>
          </div>

          {/* CLOUD ENGINEERING */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Cloud className="h-8 w-8 text-purple-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                CLOUD ENGINEERING
              </h2>
            </div>
            <div className="mb-6">
              <Image
                src="/cloud-engineering.png"
                alt="Abstract cloud network with global connections, server infrastructure, and security icons representing scalable cloud engineering"
                width={500}
                height={300}
                className="rounded-lg w-full"
              />
            </div>
            <p className="text-xl text-gray-700 mb-6 font-semibold">
              Scalable, secure, and future-ready cloud architecture.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700 text-lg font-medium leading-[30px]">
                  End-to-end cloud migration strategies
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700 text-lg font-medium leading-[30px]">
                  Backend systems built on Google Cloud, AWS, and Microsoft
                  Azure
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700 text-lg font-medium leading-[30px]">
                  Cloud-native architecture for high availability and
                  performance
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700 text-lg font-medium leading-[30px]">
                  Security-first design for compliance in regulated industries
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Data Infrastructure Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Database className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  DATA INFRASTRUCTURE
                </h2>
              </div>
              <p className="text-xl text-gray-700 mb-6 font-semibold">
                Turn massive datasets into instant, actionable insight.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-lg font-medium leading-[30px]">
                    High-performance pipelines for real-time data processing
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-lg font-medium leading-[30px]">
                    Data lake and warehouse solutions for unified access
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-lg font-medium leading-[30px]">
                    Intelligent data modeling and governance frameworks
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-lg font-medium leading-[30px]">
                    Seamless integration with legacy systems
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <Image
                src="/data-infrastructure.png"
                alt="High-tech visualization of real-time data pipelines and analytics dashboards representing modern data infrastructure"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="container mx-auto px-6 md:px-12 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-[#0054aa]">Industry</span>{" "}
          <span className="text-[#0054aa]">Solutions</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="p-3 bg-[#0054aa] -100 rounded-lg w-fit mb-4">
              <Building className="h-8 w-8 text-[#0054aa]" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Retail</h3>
            <p className="text-gray-600 text-sm">
              Demand forecasting, dynamic pricing, personalized customer
              experiences
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="p-3 bg-red-100 rounded-lg w-fit mb-4">
              <Heart className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Healthcare</h3>
            <p className="text-gray-600 text-sm">
              Data-driven patient care, operational optimization, regulatory
              compliance
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="p-3 bg-green-100 rounded-lg w-fit mb-4">
              <DollarSign className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Finance</h3>
            <p className="text-gray-600 text-sm">
              Fraud detection, risk modeling, real-time trading analytics
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="p-3 bg-yellow-100 rounded-lg w-fit mb-4">
              <Zap className="h-8 w-8 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Oil & Gas</h3>
            <p className="text-gray-600 text-sm">
              Predictive maintenance, field data analytics, energy optimization
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Delivery */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-[#0054aa] -600 rounded-lg">
                <Users className="h-12 w-12 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-6">PARTNERSHIP DELIVERY</h2>
            <p className="text-xl mb-8">
              We do not just build systems, we build them with you.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="space-y-3">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <p className="text-gray-300">
                  Co-creation with client teams from concept to deployment
                </p>
              </div>
              <div className="space-y-3">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <p className="text-gray-300">
                  Technology-agnostic approach to choose the right tools for
                  each challenge
                </p>
              </div>
              <div className="space-y-3">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <p className="text-gray-300">
                  Managed services for monitoring, updates, and performance
                  tuning
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-6 md:px-12 py-16 text-center">
        <h2 className="text-xl md:text-3xl font-bold mb-6">
          <span className="text-[#0054aa]">LET'S BUILD SOMETHING</span>{" "}
          <span className="text-[#0054aa]">INTELLIGENT TOGETHER</span>
        </h2>
        <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          Ready to explore how AI, cloud, and data can transform your business?
          Book a discovery call with MavenCode today and start your journey
          toward autonomous, high-performance systems that give you a lasting
          competitive edge.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
           <Link href="/contact-us">
              <Button className="bg-[#0054aa] hover:bg-[#003d7f] text-white px-6 py-6">
               Book Discovery Call
              </Button>
            </Link>
        </div>
      </section>
    </div>
  );
}
