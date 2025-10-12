import Image, { StaticImageData } from "next/image";
import Goal from "@/app/image/aboutus/goal.png";
import Mission from "@/app/image/aboutus/mission.png";
import Serve from "@/app/image/aboutus/serve.png";
import Maven from "@/app/image/aboutus/maven.png";

interface InfoBlock {
  id: string;
  number: string;
  title: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
  colSpan: string;
  imageHeight: string;
}

const infoBlocks: InfoBlock[] = [
  {
    id: "mission",
    number: "01",
    title: "Our mission",
    description:
      "At Mavencode, our mission is to empower businesses with AI and cloud technologies that drive efficiency, adaptability, and growth. We turn complex challenges into intelligent, scalable solutions that create lasting results.",
    image: Mission,
    imageAlt: "Our Mission",
    colSpan: "md:col-span-1",
    imageHeight: "h-48",
  },
  {
    id: "serve",
    number: "02",
    title: "Who we serve",
    description:
      "We work with forward-thinking organizations of all sizes. Whether it's automating workflows, building secure cloud infrastructure, or applying AI for decision-making, we deliver tailored solutions for diverse industries.",
    image: Serve,
    imageAlt: "Who we serve",
    colSpan: "md:col-span-2",
    imageHeight: "h-48",
  },
  {
    id: "goals",
    number: "03",
    title: "Goals",
    description:
      "We are driven by a commitment to innovation, reliability, and measurable impact. Our goal is not just to deploy AI or cloud solutions, but to ensure they integrate seamlessly, scale effectively, and deliver tangible business value over time.",
    image: Goal,
    imageAlt: "Goals",
    colSpan: "md:col-span-2",
    imageHeight: "h-48",
  },
  {
    id: "mavencode",
    number: "04",
    title: "Why Mavencode?",
    description:
      "Because we go beyond technology. Choosing Mavencode means choosing a partner who values co-creation, transparency, and future-readiness. We don't just build solutions—we build trust.",
    image: Maven,
    imageAlt: "Why Mavencode",
    colSpan: "md:col-span-1",
    imageHeight: "h-48",
  },
];

export default function AboutUsInfoBlocks() {
  return (
    <section className="bg-background dark:bg-background-dark">
      <div className="max-w-6xl mx-auto py-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Intro Section */}
        <div className="mb-8">
          <h2 className="md:text-3xl text-2xl font-medium text-about-text dark:text-about-text-dark leading-tight lg:max-w-md mb-3">
            Focus on growth. We handle the intelligence.
          </h2>
          <p className="text-sm font-medium text-about-text dark:text-about-text-dark leading-relaxed w-full md:max-w-2xl">
            At Mavencode, we take care of the heavy lifting — from AI-driven
            automation to cloud-native systems — so you can focus on scaling
            your business. With solutions designed to adapt, learn, and grow
            with you, we make innovation effortless.
          </p>
        </div>

        {/* Info Blocks */}
        <div
          className="
            grid grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            gap-6 
            auto-rows-fr
          "
        >
          {infoBlocks.map((block) => (
            <div
              key={block.id}
              className={`flex flex-col justify-between ${block.colSpan}`}
            >
              <div className="mb-4 rounded-lg overflow-hidden">
                <Image
                  src={block.image}
                  alt={block.imageAlt}
                  className={`w-full ${block.imageHeight} object-cover`}
                />
              </div>
              <div>
                <h3 className="text-xs text-about-heading dark:text-about-heading-dark mb-2">
                  {block.number}
                </h3>
                <h4 className="text-sm font-medium text-about-heading dark:text-about-heading-dark mb-2">
                  {block.title}
                </h4>
                <p className="text-xs w-full text-about-text dark:text-about-text-dark md:max-w-xs">
                  {block.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
