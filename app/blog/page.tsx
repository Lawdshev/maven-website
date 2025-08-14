import BlogListing from "./blog-listing"

export default function HomePage() {
  return (
    <main>
      <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-gray-50 pt-12 pb-8">
        Latest Blog Posts
      </h1>
      <BlogListing />
    </main>
  )
}
