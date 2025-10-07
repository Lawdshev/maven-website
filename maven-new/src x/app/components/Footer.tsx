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
    <footer className="bg-background dark:bg-background-dark border-t border-footer-border dark:border-footer-border-dark py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between ">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <Image
                src={theme === "light" ? LogoLight : LogoDark}
                alt="Logo"
                width={200}
                height={200}
              />
            </div>

            <p className="text-footer-text dark:text-footer-text-dark mb-6 text-[16px] max-w-[270px]">
              Leave the complexity of AI and cloud to us. Focus on what matters
              most—your growth.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className=" rounded-lg flex items-center justify-center text-social-icon dark:text-[#78A7D5]"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-nav dark:text-nav-dark mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-footer-text dark:text-footer-text-dark text-[16px]"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-[17px] font-semibold text-nav dark:text-nav-dark mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-footer-text dark:text-footer-text-dark text-[16px]"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[17px] font-semibold text-nav dark:text-nav-dark mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((info) => (
                <li key={info.name} className="flex items-start space-x-3">
                  <span className="text-icon-text dark:text-[#78A7D5] w-5 h-5 mt-0.5">
                    {info.icon}
                  </span>
                  <a
                    href={info.href}
                    className="text-footer-text dark:text-footer-text-dark text-[16px] transition-colors whitespace-pre-line"
                  >
                    {info.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16">
          <div className="border-t border-footer-border dark:border-footer-border-dark">
            <div className="flex flex-col md:flex-row justify-between items-center mt-3">
              <p className="text-footer-text dark:text-footer-text-dark text-base">
                Copyright © 2025 MAVENCODE Templates
              </p>
              <div className="flex items-center space-x-1 mt-4 md:mt-0">
                <span className="text-footer-text dark:text-footer-text-dark text-base">
                  All Rights Reserved
                </span>
                <span className="text-footer-text dark:text-footer-text-dark text-base">
                  |{" "}
                </span>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 text-base underline"
                >
                  Terms and Conditions
                </a>
                <span className="text-footer-text dark:text-footer-text-dark text-base">
                  |{" "}
                </span>
                <a href="#" className="text-blue-400  text-base underline">
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
