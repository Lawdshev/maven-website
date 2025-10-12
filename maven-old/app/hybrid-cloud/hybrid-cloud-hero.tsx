import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function HybridCloudHero() {
  return (
    <section className="w-full py-6 md:py-8 lg:py-12 bg-gray-900 min-h-[400px]">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="text-sm  text-black -500 dark: text-black -400">
              <Link href="#" className="text-[#0054aa] -600 hover:underline">
                Home
              </Link>{" "}
              /{" "}
              <Link href="#" className="text-[#0054aa] -600 hover:underline">
                Solutions
              </Link>{" "}
              / Hybrid Cloud
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[medium] tracking-tight  text-black -900 dark: text-black -50">
              Hybrid Cloud Solutions
            </h1>
            <p className="text-lg md:text-xl  text-black -700 dark: text-black -300 max-w-lg">
              Manage your hybrid cloud environment to run workloads where and
              when you need them.
            </p>
            <Button
              asChild
              className="bg-[#0054aa] -600 hover:bg-[#0054aa] -700 text-white px-6 py-3 rounded-md text-base"
            >
              <Link href="#" target="_blank" rel="noopener noreferrer">
                IDC infographic: Durable hybrid cloud for AI (PDF)
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/hybrid-cloud-illustration.png"
              width={700}
              height={450}
              alt="3D isometric illustration of hybrid cloud infrastructure with abstract data flow and glowing elements on a grid background."
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
