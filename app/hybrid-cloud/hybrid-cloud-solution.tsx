import Link from "next/link"
import Image from "next/image"
import { PlayCircle, ArrowRight } from "lucide-react"

export default function HybridCloudSolutions() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 dark:text-gray-50">
              Optimize your IT to maximize ROI
            </h2>
          </div>
          <div className="space-y-4">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Get more out of data and AI where your workloads reside with a high-performance, cost-effective hybrid
              cloud platform that's open and secure. Explore our technologies, expertise and ecosystem of partners to
              capitalize on cloud-based and on-prem environments of your choice.
            </p>
            <Link href="#" className="inline-flex items-center text-[#0054aa] -600 hover:underline text-base font-medium">
              Learn more about Mavencode Hybrid Cloud for AI
              <PlayCircle className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Bottom Section - Hybrid Cloud Solutions */}
        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 dark:text-gray-50 mb-12">
          Hybrid Cloud solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Solution Card 1 */}
          <div className="flex flex-col items-start space-y-4">
            <Image
              src="/images/icon-binary-code.png"
              width={64}
              height={64}
              alt="Abstract binary code icon"
              className="h-16 w-16"
            />
            <h3 className="text-xl font-normal text-gray-900 dark:text-gray-50">
              Modernize & migrate applications with AI
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Modernize and containerize legacy applications and accelerate the time-to-value of hybrid cloud
              environments.
            </p>
            <Link href="#" className="inline-flex items-center text-[#0054aa] -600 hover:underline text-sm font-medium">
              Explore application modernization services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Solution Card 2 */}
          <div className="flex flex-col items-start space-y-4">
            <Image
              src="/images/icon-grid-squares.png"
              width={64}
              height={64}
              alt="Abstract grid of squares icon"
              className="h-16 w-16"
            />
            <h3 className="text-xl font-normal text-gray-900 dark:text-gray-50">
              Leverage an AI-ready infrastructure
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Servers, storage and software designed to run mission-critical apps with resiliency, security and
              performance.
            </p>
            <Link href="#" className="inline-flex items-center text-[#0054aa] -600 hover:underline text-sm font-medium">
              Explore AI-infrastructure solutions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Solution Card 3 */}
          <div className="flex flex-col items-start space-y-4">
            <Image
              src="/images/icon-circular-shape.png"
              width={64}
              height={64}
              alt="Abstract circular shape icon"
              className="h-16 w-16"
            />
            <h3 className="text-xl font-normal text-gray-900 dark:text-gray-50">
              Enable an open hybrid cloud to run AI anywhere
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Adopt platform-centric approach for your AI investments to scale with security and consistency.
            </p>
            <Link href="#" className="inline-flex items-center text-[#0054aa] -600 hover:underline text-sm font-medium">
              Explore Red Hat Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Solution Card 4 */}
          <div className="flex flex-col items-start space-y-4">
            <Image
              src="/images/icon-diagonal-lines.png"
              width={64}
              height={64}
              alt="Abstract grid of diagonal lines icon"
              className="h-16 w-16"
            />
            <h3 className="text-xl font-normal text-gray-900 dark:text-gray-50">Harness the full power of Linux®</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Run Linux on Mavencode servers to bring a new level of reliability, security and scalability to your
              business-critical workloads.
            </p>
            <Link href="#" className="inline-flex items-center text-[#0054aa] -600 hover:underline text-sm font-medium">
              Explore Linux on Mavencode Systems
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
