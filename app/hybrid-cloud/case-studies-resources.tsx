import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function CaseStudiesResources() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        {/* Case Studies Section */}
        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 dark:text-gray-50 mb-12">
          Case studies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {/* Case Study 1 */}
          <Link
            href="#"
            className="group block space-y-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg transition-colors"
          >
            <Image
              src="/images/logo-masters.png"
              width={120}
              height={60}
              alt="Masters golf tournament logo"
              className="h-auto max-w-[120px]"
            //   query="Masters golf tournament logo"
            />
            <h3 className="text-lg font-normal text-gray-900 dark:text-gray-50 group-hover:text-[#0054aa] -600 transition-colors">
              Driving fan engagement to new heights
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Lessons from the Masters can help businesses create new value.
            </p>
            <div className="inline-flex items-center text-[#0054aa] -600 group-hover:underline text-sm font-medium">
              Read the case study
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Case Study 2 */}
          <Link
            href="#"
            className="group block space-y-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg transition-colors"
          >
            <Image
              src="/images/logo-redhat-ibm.png"
              width={160}
              height={60}
              alt="Red Hat and Mavencode logos side by side"
              className="h-auto max-w-[160px]"
            //   query="Red Hat and Mavencode logos side by side"
            />
            <h3 className="text-lg font-normal text-gray-900 dark:text-gray-50 group-hover:text-[#0054aa] -600 transition-colors">
              Generative AI transforms content
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Mavencode watsonx Code Assistant for Red Hat Ansible Lightspeed technical preview generated over half of
              Playbook content.
            </p>
            <div className="inline-flex items-center text-[#0054aa] -600 group-hover:underline text-sm font-medium">
              Read the case study
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Case Study 3 */}
          <Link
            href="#"
            className="group block space-y-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg transition-colors"
          >
            <Image
              src="/images/logo-water-corporation.png"
              width={160}
              height={60}
              alt="Water Corporation logo with droplet design"
              className="h-auto max-w-[160px]"
            //   query="Water Corporation logo with droplet design"
            />
            <h3 className="text-lg font-normal text-gray-900 dark:text-gray-50 group-hover:text-[#0054aa] -600 transition-colors">
              More planning, less risk
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Water Corporation modernizes and migrates its mission-critical SAP architecture to the cloud with help
              from Mavencode Consulting.
            </p>
            <div className="inline-flex items-center text-[#0054aa] -600 group-hover:underline text-sm font-medium">
              Read the case study
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Case Study 4 */}
          <Link
            href="#"
            className="group block space-y-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg transition-colors"
          >
            <Image
              src="/images/logo-umb.png"
              width={120}
              height={60}
              alt="UMB bank logo with yellow underline"
              className="h-auto max-w-[120px]"
            //   query="UMB bank logo with yellow underline"
            />
            <h3 className="text-lg font-normal text-gray-900 dark:text-gray-50 group-hover:text-[#0054aa] -600 transition-colors">
              Accelerate digitalization
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              IT service company UMB focuses on growth by expanding its hypercloud solution.
            </p>
            <div className="inline-flex items-center text-[#0054aa] -600 group-hover:underline text-sm font-medium">
              Read the case study
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>

        {/* Hybrid Cloud Resources Section */}
        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 dark:text-gray-50 mb-12">
          Hybrid Cloud resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Resource 1 */}
          <Link
            href="#"
            className="group block space-y-4 p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
          >
            <Image
              src="/images/icon-circular-arrows.png"
              width={48}
              height={48}
              alt="Abstract icon of two circular arrows"
              className="h-12 w-12"
            //   query="abstract icon of two circular arrows, [#0054aa]  and teal gradient"
            />
            <p className="text-lg font-normal text-gray-900 dark:text-gray-50 group-hover:text-[#0054aa] -600 transition-colors">
              IBV report: The great tech reset
              <ArrowRight className="ml-2 inline-block h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </p>
          </Link>

          {/* Resource 2 */}
          <Link
            href="#"
            className="group block space-y-4 p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
          >
            <Image
              src="/images/icon-wavy-lines.png"
              width={48}
              height={48}
              alt="Abstract icon of wavy lines"
              className="h-12 w-12"
            //   query="abstract icon of wavy lines, [#0054aa]  and teal gradient"
            />
            <p className="text-lg font-normal text-gray-900 dark:text-gray-50 group-hover:text-[#0054aa] -600 transition-colors">
              AI Academy: Design a hybrid cloud infrastructure for and with AI
              <ArrowRight className="ml-2 inline-block h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </p>
          </Link>

          {/* Resource 3 */}
          <Link
            href="#"
            className="group block space-y-4 p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
          >
            <Image
              src="/images/icon-person-data.png"
              width={48}
              height={48}
              alt="Abstract icon of a person holding data"
              className="h-12 w-12"
            //   query="abstract icon of a person holding data, [#0054aa]  and teal gradient"
            />
            <p className="text-lg font-normal text-gray-900 dark:text-gray-50 group-hover:text-[#0054aa] -600 transition-colors">
              Maximize the value of hybrid cloud in the generative AI era
              <ArrowRight className="ml-2 inline-block h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </p>
          </Link>

          {/* Resource 4 */}
          <Link
            href="#"
            className="group block space-y-4 p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
          >
            <Image
              src="/images/icon-globe-lines.png"
              width={48}
              height={48}
              alt="Abstract icon of a globe with connecting lines"
              className="h-12 w-12"
            //   query="abstract icon of a globe with connecting lines, [#0054aa]  and teal gradient"
            />
            <p className="text-lg font-normal text-gray-900 dark:text-gray-50 group-hover:text-[#0054aa] -600 transition-colors">
              Guidebook: Getting AI ready from the ground up
              <ArrowRight className="ml-2 inline-block h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </p>
          </Link>
        </div>
      </div>
    </section>
  )
}
