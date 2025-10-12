export default function ServicesSection() {
  return (
    <section className="relative min-h-[900px] lg:min-h-[1000px] overflow-hidden bg-background dark:bg-background-dark flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect width="1200" height="800" fill="%23f0f2f5"/><g opacity="0.1"><circle cx="200" cy="200" r="100" fill="%23333"/><circle cx="800" cy="300" r="80" fill="%23333"/><circle cx="1000" cy="600" r="120" fill="%23333"/></g></svg>')`,
        }}
      />

      {/* Dark Mode Overlay */}
      <div className="absolute inset-0 bg-[#ffffff]/80 dark:bg-[#010101]/90 hidden dark:block" />

      {/* Large Mavencode Background Text */}
      {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <h1 className="text-8xl sm:text-9xl lg:text-[12rem] xl:text-[15rem] font-bold text-white/5 dark:text-white/5 select-none leading-none">
            MAVEN
          </h1>
          <h1 className="text-8xl sm:text-9xl lg:text-[12rem] xl:text-[15rem] font-bold text-white/5 dark:text-white/5 select-none leading-none -mt-8 lg:-mt-16">
            CODE
          </h1>
        </div>
      </div> */}

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center ">
        <div className="w-full py-20 lg:py-32 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Main Heading */}
            <div className="space-y-6 mb-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white">
                Our Services
              </h1>
            </div>

            {/* Description */}
            <div className="space-y-6 mb-10">
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                At Mavencode, we design and scale AI & cloud-native solutions
                that don&apos;t just follow trends—they create lasting impact.
                Every service we deliver is future-ready, transparent, and
                tailored to the unique needs of your organization.
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <button className="bg-[#1E5993] hover:bg-[#164A7B] text-white px-10 py-5 rounded-lg text-xl font-semibold transition-colors duration-300 shadow-xl hover:shadow-2xl">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-[#1E5993]/10 rounded-full blur-2xl"></div>
    </section>
  );
}
