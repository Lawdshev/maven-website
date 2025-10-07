"use client";
import Image from "next/image";
import LogoLight from "@/app/image/logo.png";
import LogoDark from "@/app/image/logoDark.png";
import { useTheme } from "next-themes";
import Button from "./Button";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/aboutUs" },
  { name: "Services", href: "/services" },
  { name: "Insight", href: "/blog" },
];

export default function Header() {
  const { theme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white dark:bg-[#2A2C38] ">
      <div className="max-w-[1500px] mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src={theme === "light" ? LogoLight : LogoDark}
              alt="Logo"
              width={200}
              height={200}
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-nav dark:text-nav-dark text-xl"
              >
                {item.name}
              </Link>
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
