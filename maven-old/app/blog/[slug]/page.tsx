// app/blog/[slug]/page.tsx
import BlogPostDetail from "./blog-post-details";
import { blogPosts } from "../../data/blog-posts";

// This function tells Next.js which specific blog post pages to pre-render at build time
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="text-black max-w-[1780px] w-[95%] mx-auto">
      <BlogPostDetail slug={params.slug} />
    </div>
  );
}
