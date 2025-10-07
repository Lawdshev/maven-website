import Image from "next/image";
import Logo from "@/app/image/logo.png";

export default function ServicesSection() {
  return (
    <section className="bg-background dark:bg-[#2A2C38] py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-[#161C2D] dark:text-[#D4D9E7] mb-4">
          Our Services
        </h1>

        {/* Description Paragraph */}
        <p className="text-lg text-services-tittle dark:text-services-tittle-dark leading-relaxed max-w-3xl mx-auto mb-12">
          At Mavencode, we design and scale AI & cloud-native solutions that
          don’t just follow trends—they create lasting impact. Every service we
          deliver is future-ready, transparent, and tailored to the unique needs
          of your organization.
        </p>

        {/* Logo Container - White rectangular box */}
        <div className="bg-white rounded-lg p-12 shadow-lg max-w-3xl mx-auto h-48">
          <div className="flex items-center justify-center h-full">
            <Image
              src={Logo}
              alt="MAVENCODE Logo"
              width={200}
              height={80}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
