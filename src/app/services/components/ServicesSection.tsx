import Image from "next/image";
import Logo from "@/app/image/logo.png";

export default function ServicesSection() {
  return (
    <section className="bg-background dark:bg-[#2A2C38] py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-left md:text-center">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#161C2D] dark:text-[#D4D9E7] mb-3 sm:mb-4">
          Our Services
        </h1>

        {/* Description Paragraph */}
        <p className="text-base sm:text-lg text-services-tittle dark:text-services-tittle-dark leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-12 ">
          At Mavencode, we design and scale AI & cloud-native solutions that
          don&apos;t just follow trends—they create lasting impact. Every
          service we deliver is future-ready, transparent, and tailored to the
          unique needs of your organization.
        </p>

        {/* Logo Container - White rectangular box */}
        <div className="bg-white rounded-lg p-6 sm:p-8 lg:p-12 shadow-lg max-w-3xl mx-auto h-32 sm:h-40 lg:h-48">
          <div className="flex items-center justify-center h-full">
            <Image
              src={Logo}
              alt="MAVENCODE Logo"
              width={200}
              height={80}
              className="object-contain w-32 sm:w-40 lg:w-52 h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
