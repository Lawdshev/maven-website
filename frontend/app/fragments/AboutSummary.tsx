import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function AboutSummary() {
  return (
    <section className="w-full px-6 md:px-12 py-16 bg-[white] min-h-screen flex items-center justify-center border-b border-gray-200">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl mb-6 text-[#0054aa] font-medium">
          Transform Ambition into AI-Powered Results
        </h2>
        <p className="text-xl text-black leading-[35px] mb-8">
          At MavenCode, we believe AI should deliver real impact—not just hype.
          We partner with organizations to design and scale AI solutions that
          are transparent, reliable, and built for the future. From co-creation
          and rapid prototyping to seamless integration, our approach ensures
          lasting results and measurable value.
        </p>
        <Link href="/about-us">
          <Button
            size={"lg"}
            className="bg-[#0054aa] hover:bg-[#003d7f] text-white text-lg px-16 py-4 rounded-none cursor-pointer"
          >
            <span>Learn More</span>
            <ArrowRight size={32} className="ml-2" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
