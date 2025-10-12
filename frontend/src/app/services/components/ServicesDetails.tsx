import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import Circuit from "@/app/image/services/circuit.png";
import Brain from "@/app/image/services/brain.png";
import Workstation from "@/app/image/services/workStation.png";

const services = [
  {
    id: 1,
    // number: "01",
    title: "Agentic AI",
    description:
      "Bring about cultural change and remove barriers to innovation that allow your organization to become a mature digital enterprise.",
    image: Circuit,
    features: [
      "With a focus on human-centered design, align your strategies with desired business outcomes.",
      "Drive buy-in, engagement, and new ways of working to ensure long-term success.",
      "Autonomous operations that execute routine analyses and tasks without constant human oversight.",
    ],
  },
  {
    id: 2,
    // number: "02",
    title: "Computer Vision",
    description:
      "In a world where seconds matter, real-time data pipelines ensure that your organization has instant access to actionable insights.",
    image: Brain,
    features: [
      "Collect and process large volumes of structured and unstructured data quickly.",
      "Build streaming systems for live insights across multiple data sources.",
      "Detect risks, trends, and opportunities instantly with predictive analytics.",
    ],
  },
  {
    id: 3,
    // number: "03",
    title: "Generative AI",
    description:
      "We help organizations transition to cloud-native systems that are flexible, reliable, and ready for scale.",
    image: Workstation,
    features: [
      "Tailored cloud infrastructure design for optimal performance and efficiency.",
      "Smooth migration services from legacy systems to modern cloud platforms.",
      "CI/CD pipelines and DevOps automation for faster deployments and better reliability.",
    ],
  },
];

export default function ServicesDetails() {
  return (
    <section className="bg-background dark:bg-[#010101] py-16  px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-gray-100 dark:bg-transparent dark:border-gray-800 overflow-hidden hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-all duration-300"
            >
              {/* Image Section */}
              <div className="relative">
                <div className="relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={300}
                    className="w-full h-[250px] object-cover"
                  />

                  {/* Large Number Overlay */}
                  {/* <div className="absolute top-6 left-6">
                    <div className="bg-white/90 dark:bg-[#2A2C38]/90 backdrop-blur-sm rounded-lg px-4 py-2">
                      <span className="text-3xl lg:text-4xl font-bold text-[#1E5993] dark:text-[#78A7D5]">
                        {service.number}
                      </span>
                    </div>
                  </div> */}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 lg:p-8 space-y-6">
                <div>
                  <h2 className="text-xl lg:text-2xl font-bold text-[#161C2D] dark:text-[#D4D9E7] mb-3">
                    {service.title}
                  </h2>
                  <p className="text-sm lg:text-base text-[#666666] dark:text-[#B0B0B0] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-2">
                        <div className="w-2 h-2 bg-[#1E5993] dark:bg-[#78A7D5] rounded-full"></div>
                      </div>
                      <p className="text-sm lg:text-base text-[#666666] dark:text-[#B0B0B0] leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA Link */}
                <div className="pt-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[#1E5993] dark:text-[#78A7D5] hover:text-[#164A7B] dark:hover:text-[#5A8BC4] transition-colors duration-300 font-medium text-sm lg:text-base uppercase tracking-wide"
                  >
                    {service.title}
                    <FiArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
