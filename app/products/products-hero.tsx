import Link from "next/link"
import Image from "next/image"

export default function ProductHero() {
  return (
    <section className="w-full py-6 md:py-8 lg:py-12 bg-white min-h-[400px] dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <Link href="#" className="text-[#0054aa] -600 hover:underline">
                Home
              </Link>{" "}
              / Products
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Mavencode Products
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-lg">
              Explore our wide range of quality products tailored to meet your every need
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/abstract-product-background.png"
              width={800}
              height={400}
              alt="Abstract 3D background illustration of white, varying-height rectangular blocks forming a textured, circuit board-like pattern, fading to white on the left side."
              className="max-w-full h-auto"
            //   query="abstract 3D background illustration of white, varying-height rectangular blocks forming a textured, circuit board-like pattern, fading to white on the left side."
            />
          </div>
        </div>
      </div>
    </section>
  )
}
