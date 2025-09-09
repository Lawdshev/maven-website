import BlogListing from "./blog-listing"

export default function HomePage() {
  return (
    <main className="text-black max-w-[1780px] w-[95%] mx-auto">
      <h1 className="text-center text-xl md:text-xl lg:text-4xl font-[medium] tracking-tight text-gray-900 dark:text-gray-50 pt-12 pb-8">
        Latest Blog Posts
      </h1>
      <BlogListing />
    </main>
  )
}
