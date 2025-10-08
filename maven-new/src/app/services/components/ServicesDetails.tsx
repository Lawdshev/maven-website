import Image from "next/image";
import Circuit from "@/app/image/services/circuit.png";
import Brain from "@/app/image/services/brain.png";
import Workstation from "@/app/image/services/workStation.png";

const services = [
  {
    id: 1,
    title: "AI AGENT",
    description:
      "Our AI agents are designed to act independently, handle complex workflows, and continuously learn from data..",
    image: "Circuit",
    features: [
      {
        number: "1",
        title: "Autonomous Operations",
        description:
          "Agents that execute routine analyses, tasks without constant human oversight.",
      },
      {
        number: "2",
        title: "Smart Decision-Making",
        description:
          "Simulate human to analyze relevant information or act on real-time.",
      },
      {
        number: "3",
        title: "Seamless Integration",
        description:
          "Easily connect with existing tools, CRMs, and enterprise platforms.",
      },
    ],
  },
  {
    id: 2,
    title: "Real-Time Pipeline",
    description:
      "In a world where seconds matter, real-time data pipelines ensure that your organization has instant access to actionable insights.",
    image: "Brain",
    features: [
      {
        number: "1",
        title: "Data Ingestion & Processing",
        description:
          "Collect and process large volumes of structured and unstructured data quickly.",
      },
      {
        number: "2",
        title: "Event Streaming",
        description:
          "Build streaming systems for live insights across multiple data sources.",
      },
      {
        number: "3",
        title: "Predictive Analytics",
        description: "Detect risks, trends, and opportunities instantly.",
      },
    ],
  },
  {
    id: 3,
    title: "Cloud Native",
    description:
      "We help organizations transition to cloud-native systems that are flexible, reliable, and ready for scale.",
    image: "Workstation",
    features: [
      {
        number: "1",
        title: "Cloud Architecture Design",
        description: "Tailored infrastructure for performance and efficiency.",
      },
      {
        number: "2",
        title: "Migration Services",
        description: "Smooth transition from legacy systems to the cloud.",
      },
      {
        number: "3",
        title: "DevOps & Automation",
        description:
          "CI/CD pipelines for faster deployments and better reliability.",
      },
    ],
  },
];

export default function ServicesDetails() {
  return (
    <section className="bg-background dark:bg-[#2A2C38] py-8 sm:py-10 lg:py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            className="mb-16 md:mb-20 lg:mb-24 text-left md:text-center"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-insight-heading dark:text-insight-heading-dark mb-4 md:mb-6">
              {service.title}
            </h2>
            <p className="text-base sm:text-lg text-services-paragraph dark:text-services-paragraph-dark max-w-2xl mx-auto mb-8 md:mb-10 lg:mb-12 leading-relaxed">
              {service.description}
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2 mx-auto">
              <div className="flex justify-center w-full lg:w-auto">
                <div className="relative rounded-lg overflow-hidden shadow-lg w-full  md:max-w-none">
                  {service.id === 1 && (
                    <Image
                      src={Circuit}
                      alt="Circuit Board"
                      width={420}
                      height={420}
                      className="w-full"
                    />
                  )}
                  {service.id === 2 && (
                    <Image
                      src={Brain}
                      width={420}
                      height={420}
                      alt="Neural Network Brain"
                      className="w-full"
                    />
                  )}
                  {service.id === 3 && (
                    <Image
                      src={Workstation}
                      alt="Developer Workstation"
                      width={420}
                      height={420}
                      className="w-full"
                    />
                  )}
                </div>
              </div>

              <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center">
                {service.features.map((feature) => (
                  <div
                    key={feature.number}
                    className="flex items-start gap-3 md:gap-4 p-3 md:p-4 md:max-w-md w-full"
                  >
                    <div className="flex-shrink-0">
                      <div className="bg-[#473BF0]/20 dark:bg-[#241C97]/10 rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center">
                        <span className="text-sm md:text-[17px] text-[#1E5993] dark:text-[#78A7D5]">
                          {feature.number}
                        </span>
                      </div>
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg md:text-xl font-bold text-services-text dark:text-[#E7D4D5] mb-1 sm:mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm md:text-base text-services-paragraph dark:text-[#D4D9E7] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
