export default function About() {
  return (
    <section className="bg-white dark:bg-[#2A2C38]">
      <div className="max-w-6xl mx-auto py-20 sm:py-28 md:py-36 px-4 text-left sm:px-6 lg:px-8 md:text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#01CBFB33] dark:bg-[#10718833] mb-6 sm:mb-8">
          <span className="text-xs sm:text-sm font-medium text-[#1E5993] dark:text-[#78A7D5] uppercase tracking-wide">
            About Us
          </span>
        </div>
        <h2 className="text-2xl  md:text-[40px] font-bold text-[#0F0049] dark:text-[#C9BDF8] mb-3 sm:mb-4 leading-tight">
          Transform Ambition into AI-Powered Result
        </h2>
        <p className="text-base text-justify md:text-center sm:text-lg md:text-xl text-[#111827] dark:text-[#DAE0EC] font-light max-w-4xl leading-relaxed md:leading-[35px] mx-auto ">
          At Mavencode we believe AI should deliver real impact — not just hype.
          We partner with organizations to design and scale AI solutions that
          are transparent, reliable, and built for the future. From co-creation
          and rapid prototyping to seamless integration, our approach ensures
          lasting results and measurable value.
        </p>
      </div>
    </section>
  );
}
