import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function DiscoverMore() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-black  -900 dark:text-black  -50 mb-8">
          Discover more of Mavencode Hybrid Cloud
        </h2>
        <Button asChild className="bg-[#0054aa] -600 hover:bg-[#0054aa] -700 text-white px-6 py-3 rounded-md text-base mb-5">
          <Link href="#">
            Sign up for the Mavencode Cloud newsletter
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Content Block 1 */}
          <div className="space-y-2">
            <h3 className="text-lg font-normal text-black  -900 dark:text-black  -50">Explore Mavencode Cloud Platform</h3>
            <p className="text-black  -700 dark:text-black  -300 text-sm">AI-ready, secure and hybrid by design.</p>
            <Link href="#" className="inline-flex items-center text-[#0054aa] -600 hover:underline text-sm font-medium">
              Discover Mavencode Cloud platform
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Content Block 2 */}
          <div className="space-y-2">
            <h3 className="text-lg font-normal text-black  -900 dark:text-black  -50">Cloud consulting services</h3>
            <p className="text-black  -700 dark:text-black  -300 text-sm">Start your cloud transformation today.</p>
            <Link href="#" className="inline-flex items-center text-[#0054aa] -600 hover:underline text-sm font-medium">
              Explore hybrid cloud consulting services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Content Block 3 */}
          <div className="space-y-2">
            <h3 className="text-lg font-normal text-black  -900 dark:text-black  -50">Mavencode Quantum</h3>
            <p className="text-black  -700 dark:text-black  -300 text-sm">
              Access to the largest quantum computing fleet in the world.
            </p>
            <Link href="#" className="inline-flex items-center text-[#0054aa] -600 hover:underline text-sm font-medium">
              Explore Mavencode Quantum
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Content Block 4 */}
          <div className="space-y-2">
            <h3 className="text-lg font-normal text-black  -900 dark:text-black  -50">Innovating the future</h3>
            <p className="text-black  -700 dark:text-black  -300 text-sm">Check out Mavencode&apos;s hybrid cloud research.</p>
            <Link href="#" className="inline-flex items-center text-[#0054aa] -600 hover:underline text-sm font-medium">
              Read more
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
