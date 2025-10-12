import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ThemeToggle from "@/app/components/ThemeToggle";
import BlogSection from "@/app/blog/components/BlogSection";
import BlogInsights from "@/app/blog/components/BlogInsights";

export default function Blog() {
  return (
    <div className="bg-background">
      <Header />
      <BlogSection />
      <BlogInsights />
      <Footer />
      <ThemeToggle />
    </div>
  );
}