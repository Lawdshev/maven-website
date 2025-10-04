import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ThemeToggle from "@/app/components/ThemeToggle";
import AboutUsSection from "@/app/aboutUs/components/AboutUsSection";
import AboutUsInfoBlocks from "@/app/aboutUs/components/AboutUsInfoBlocks";

export default function AboutUs() {
  return (
    <div className="bg-background">
      <Header />
      <AboutUsSection />
      <AboutUsInfoBlocks />
      <Footer />
      <ThemeToggle />
    </div>
  );
}