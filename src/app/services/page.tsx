import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ThemeToggle from "@/app/components/ThemeToggle";
import ServicesSection from "@/app/services/components/ServicesSection";
import ServicesDetails from "@/app/services/components/ServicesDetails";

export default function Services() {
  return (
    <div className="bg-background">
      <Header />
      <ServicesSection />
      <ServicesDetails />
      <Footer />
      <ThemeToggle />
    </div>
  );
}