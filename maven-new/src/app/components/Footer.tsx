"use client";
import Image from "next/image";
import LogoLight from "@/app/image/logo.png";
import LogoDark from "@/app/image/logoDark.png";
import { useTheme } from "next-themes";
import { Mail, Phone, MapPin } from "lucide-react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";

const socialIcons = [
  { name: "Facebook", icon: <FaFacebookF /> },
  { name: "Twitter", icon: <TiSocialTwitter /> },
  { name: "Instagram", icon: <AiFillInstagram /> },
  { name: "LinkedIn", icon: <FaLinkedinIn /> },
];

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Insight", href: "#insights" },
];

const services = [
  { name: "AI Agent", href: "#ai-agent" },
  { name: "Real Time Pipeline", href: "#real-time-pipeline" },
  { name: "Cloud Computing", href: "#cloud-computing" },
  { name: "Data Representation", href: "#data-representation" },
  { name: "Chat Support", href: "#chat-support" },
];

const contactInfo = [
  { icon: <Mail />, name: "contact@company.com", href: "#" },
  { icon: <Phone />, name: "(414) 687 - 5892", href: "#" },
  {
    icon: <MapPin />,
    name: "794 Mcallister St\nSan Francisco, 94102",
    href: "#",
  },
];

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="bg-background dark:bg-[#010101] border-t border-footer-border dark:border-footer-border-dark py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-4">
          <div className="text-left">
            <div className="mb-6 flex justify-start">
              <Image
                src={theme === "light" ? LogoLight : LogoDark}
                alt="Logo"
                width={180}
                height={180}
              />
            </div>

            <p className="text-footer-text dark:text-footer-text-dark w-full mb-6  md:max-w-[270px] mx-0">
              Leave the complexity of AI and cloud to us. Focus on what matters
              most—your growth.
            </p>

            <div className="flex justify-start space-x-4">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="rounded-lg flex items-center justify-center text-social-icon dark:text-[#78A7D5]"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="text-left hidden lg:block">
            <h3 className=" font-semibold text-nav dark:text-nav-dark mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-footer-text dark:text-footer-text-dark"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="text-left hidden lg:block">
            <h3 className="font-semibold text-nav  dark:text-nav-dark mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-footer-text dark:text-footer-text-dark"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:hidden ">
            <div className="text-left">
              <h3 className=" font-semibold text-nav dark:text-nav-dark mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-footer-text dark:text-footer-text-dark"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div className="text-left">
              <h3 className="font-semibold text-nav  dark:text-nav-dark mb-4">
                Services
              </h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-footer-text dark:text-footer-text-dark"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-left">
            <h3 className="font-semibold text-nav dark:text-nav-dark mb-4">
              Contact Us
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div key={info.name} className="flex items-start gap-3 w-full">
                  <span className="text-icon-text dark:text-[#78A7D5] mt-1 shrink-0">
                    {info.icon}
                  </span>
                  <a
                    href={info.href}
                    className="text-footer-text  dark:text-footer-text-dark  transition-colors"
                  >
                    {info.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="border-t border-footer-border dark:border-footer-border-dark pt-6">
            <div className="flex flex-col lg:flex-row justify-between items-center text-center md:text-left space-y-4 lg:space-y-0">
              <p className="text-footer-text dark:text-footer-text-dark text-base">
                Copyright © 2025 MAVENCODE Templates
              </p>

              <div className="flex flex-wrap justify-center md:justify-end items-center space-x-1 text-sm sm:text-base">
                <span className="text-footer-text dark:text-footer-text-dark">
                  All Rights Reserved
                </span>
                <span className="text-footer-text dark:text-footer-text-dark">
                  |{" "}
                </span>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Terms and Conditions
                </a>
                <span className="text-footer-text dark:text-footer-text-dark">
                  |{" "}
                </span>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
