"use client";
import Image from "next/image";
import LogoLight from "@/app/image/logo.png";
import Button from "./Button";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Insight", href: "#insights" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white ">
      <div className="max-w-[1500px] mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src={LogoLight} alt="Logo" width={200} height={200} />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-nav text-xl">
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact Button */}
          <Button variant="primary" size="md">
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
}
