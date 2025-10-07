import Image from "next/image";
import Circuit from "@/app/image/services/circuit.png";
import Brain from "@/app/image/services/brain.png";
import Workstation from "@/app/image/services/workStation.png";

const services = [
  {
    id: 1,
    title: "AI AGENT",
    description: "Our AI agents are designed to act independently, handle complex workflows, and continuously learn from data..",
    image: "Circuit",
    features: [
      {
        number: "1",
        title: "Autonomous Operations",
        description: "Agents that execute routine analyses, tasks without constant human oversight."
      },
      {
        number: "2", 
        title: "Smart Decision-Making",
        description: "Simulate human to analyze relevant information or act on real-time."
      },
      {
        number: "3",
        title: "Seamless Integration", 
        description: "Easily connect with existing tools, CRMs, and enterprise platforms."
      }
    ]
  },
  {
    id: 2,
    title: "Real-Time Pipeline",
    description: "In a world where seconds matter, real-time data pipelines ensure that your organization has instant access to actionable insights. ",
    image: "Brain",
    features: [
      {
        number: "1",
        title: "Data Ingestion & Processing",
        description: "Collect and process large volumes of structured and unstructured data quickly."
      },
      {
        number: "2",
        title: "Event Streaming", 
        description: "Build streaming systems for live insights across multiple data sources."
      },
      {
        number: "3",
        title: "Predictive Analytics",
        description: "Detect risks, trends, and opportunities instantly."
      }
    ]
  },
  {
    id: 3,
    title: "Cloud Native",
    description: "We help organizations transition to cloud-native systems that are flexible, reliable, and ready for scale.",
    image: "Workstation",
    features: [
      {
        number: "1",
        title: "Cloud Architecture Design",
        description: "Tailored infrastructure for performance and efficiency."
      },
      {
        number: "2",
        title: "Migration Services",
        description: "Smooth transition from legacy systems to the cloud."
      },
      {
        number: "3",
        title: "DevOps & Automation",
        description: "CI/CD pipelines for faster deployments and better reliability."
      }
    ]
  }
];
export default function ServicesDetails() {
  return (
    <section className="bg-background dark:bg-[#2A2C38] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={service.id} className="mb-20">
            {/* Service Title */}
            <h2 className="text-4xl  font-bold text-insight-heading dark:text-insight-heading-dark mb-6 text-center">
              {service.title}
            </h2>
            
            {/* Service Description */}
             <p className="text-lg text-services-paragraph dark:text-services-paragraph-dark text-[19px] text-center max-w-xl mx-auto  mb-12 leading-relaxed">
              {service.description}
            </p>
            
            {/* Service Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  {service.id === 1 && (
                    <Image
                      src={Circuit}
                      alt="Circuit Board"
                      fill
                      className="object-cover"
                    />
                  )}
                  {service.id === 2 && (
                    <Image
                      src={Brain}
                      alt="Neural Network Brain"
                      fill
                      className="object-cover"
                    />
                  )}
                  {service.id === 3 && (
                    <Image
                      src={Workstation}
                      alt="Developer Workstation"
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
              </div>
              
              {/* Features */}
              <div className="order-1 lg:order-2 space-y-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex gap-4">
                    <div className="flex-shrink-0">
                     <div className="bg-services-button dark:bg-services-button-dark rounded-full w-8 h-8 flex items-center justify-center">
                      <span className="text-[17px]  text-insight-heading dark:text-insight-heading-dark">
                        {feature.number}
                      </span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-[21px] font-bold text-services-text dark:text-services-text-dark mb-2">
                        {feature.title}
                      </h3>
                       <p className="text-services-paragraph dark:text-services-paragraph-dark text-[17px] leading-relaxed">
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
