"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import BlogListing from "./blog-listing";

export default function HomePage() {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="text-black mx-auto font-normal">
      {/* Hero Section */}
      <motion.main
        className="w-full max-h-[900px] h-screen relative text-white px-6 md:px-12 py-16 flex"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0054aa]/80"></div>

        <div className="relative z-10 max-w-[1780px] w-[95%] mx-auto flex justify-between items-center">
          <div className="text-left max-w-[780px] mx-0">
            <div className="text-sm text-blue-200 mb-4">
              <Link href="/" className="hover:underline">
                Home
              </Link>{" "}
              / Blog
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-6xl lg:leading-[70px] mb-6 font-normal">
              Insights & Innovation in{" "}
              <span className="text-blue-200">Technology</span>
            </h1>

            <p className="text-xl text-white mb-8 max-w-2xl leading-[35px]">
              Stay ahead of the curve with our latest thoughts on AI, cloud
              computing, and digital transformation.
            </p>

            <p className="text-lg text-blue-100 leading-[30px]">
              From technical deep-dives to industry trends, explore our
              collection of articles that help you understand and leverage
              cutting-edge technology.
            </p>
          </div>
        </div>
      </motion.main>

      {/* Blog Content */}
      <main className="text-black max-w-[1780px] w-[95%] mx-auto">
        <BlogListing />
      </main>
    </div>
  );
}
