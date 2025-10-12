"use client";
import Image from "next/image";
import LogoLight from "@/app/image/logo.png";
import LogoDark from "@/app/image/logoDark.png";
import { useTheme } from "next-themes";
import Button from "./Button";
import Link from "next/link";
import ContactUsModal from "./ContactUsModal";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/aboutUs" },
  { name: "Services", href: "/services" },
  { name: "Insight", href: "/blog" },
];

export default function Header() {
  const { theme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleContactClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white dark:bg-[#010101]">
      <div className="max-w-[1500px] mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Image
              src={theme === "light" ? LogoLight : LogoDark}
              alt="Logo"
              width={200}
              height={200}
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-nav dark:text-white text-xl"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:block">
            <Button variant="primary" size="md" onClick={handleContactClick}>
              Contact Us
            </Button>
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#010101] px-4 pb-4 space-y-4 shadow-md">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-nav dark:text-white text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <Button
            variant="primary"
            size="md"
            className="w-full"
            onClick={() => {
              setIsMenuOpen(false);
              handleContactClick();
            }}
          >
            Contact Us
          </Button>
        </div>
      )}
      <ContactUsModal isOpen={isModalOpen} onClose={handleModalClose} />
    </header>
  );
}
