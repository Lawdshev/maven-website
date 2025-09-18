"use client";

import React from "react";
import {
  aiMegaMenu,
  hybridCloudMegaMenu,
  productsMegaMenu,
  supportMegaMenu,
} from "../app/data/mega-menu-item";
import MegaMenu from "../components/mega-menu";
import {
  Globe,
  Menu,
  MessageSquare,
  Search,
  User,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import ContactForm from "@/app/contact-us/contact-form";
import { Modal } from "antd";

export default function Header({ children }: { children: React.ReactNode }) {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null); // State to track which mega menu is open
  const headerRef = useRef<HTMLElement>(null); // Ref for the header to detect clicks outside
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const toggleSearchInput = () => {
    setShowSearchInput(!showSearchInput);
    setOpenMenu(null); // Close any open mega menu when search is toggled
  };

  const handleMenuToggle = (menuName: string) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
    setShowSearchInput(false);
  };

  const closeMegaMenu = (link: string) => {
    router.push(link);
    setOpenMenu(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (openMenu) {
        setOpenMenu(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [openMenu]);

  return (
    <>
      <header
        ref={headerRef}
        className="border-b border-gray-200 py-4 px-6 md:px-12 lg:py-6 bg-white/95 backdrop-blur-sm sticky top-0 z-50"
      >
        <div className="flex items-center justify-between relative z-50 max-w-[1780px] w-[95%] mx-auto">
          <Link
            href="/"
            className="flex items-center w-[200px]"
            onClick={() => setOpenMenu(null)}
          >
            <Image
              src="/logo-blue.png"
              alt="Logo"
              width={0}
              height={0}
              className="w-full"
            />
          </Link>

          <nav className="hidden lg:flex space-x-8 2xl:space-x-12 font-medium absolute left-1/2 transform -translate-x-1/2">
            <Link
              href="/"
              className="flex items-center hover:text-[#0054aa] text-base xl:text-lg cursor-pointer font-normal transition-colors duration-300"
              onClick={() => setOpenMenu(null)}
            >
              Home
            </Link>

            <Link
              href="/about-us"
              className="flex items-center hover:text-[#0054aa] text-base xl:text-lg cursor-pointer font-normal transition-colors duration-300"
              onClick={() => setOpenMenu(null)}
            >
              About Us
            </Link>

            <div className="relative">
              <Link
                href="/services"
                className="flex items-center hover:text-[#0054aa] text-base xl:text-lg cursor-pointer font-normal transition-colors duration-300"
                onClick={() => handleMenuToggle("services")}
              >
                Services
                {/* {openMenu === "services" ? (
                  <ChevronUp className="ml-1 h-4 w-4" />
                ) : (
                  <ChevronDown className="ml-1 h-4 w-4" />
                )} */}
              </Link>
              {/* {openMenu === "services" && (
                <MegaMenu columns={aiMegaMenu} onLinkClick={closeMegaMenu} />
              )} */}
            </div>

            <Link
              href="/blog"
              className="flex items-center hover:text-[#0054aa] text-base xl:text-lg cursor-pointer font-normal transition-colors duration-300"
              onClick={() => setOpenMenu(null)}
            >
              Blog
            </Link>
          </nav>
          <div className="flex items-center space-x-4 flex-grow justify-end">
            <>
              <Button
                className="font-normal md:min-w-[180px] w-fit rounded-none bg-[#0054aa] hover:bg-[#003d7f] cursor-pointer text-lg text-white px-6 py-3 flex items-center justify-center transition-all duration-300 hover:shadow-lg"
                onClick={() => setOpen(true)}
              >
                Contact Us
              </Button>

              <Modal
                open={open}
                onCancel={() => setOpen(false)}
                footer={null}
                className="contact-modal-wrapper"
                style={{ top: 20 }}
              >
                <ContactForm />
              </Modal>
            </>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle mobile menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[250px] sm:w-[300px] pr-4"
              >
                <nav className="flex flex-col gap-4 py-6 pl-4">
                  <Link
                    href="/"
                    className="text-base xl:text-lg font-normal hover:text-[#0054aa] transition-colors duration-300"
                    onClick={() => setOpenMenu(null)}
                  >
                    Home
                  </Link>

                  <Link
                    href="/about-us"
                    className="text-base xl:text-lg font-normal hover:text-[#0054aa] transition-colors duration-300"
                    onClick={() => setOpenMenu(null)}
                  >
                    About Us
                  </Link>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Link
                        href="#"
                        className="flex items-center text-base xl:text-lg font-normal hover:text-[#0054aa] cursor-pointer transition-colors duration-300"
                      >
                        Services <ChevronDown className="ml-1 h-4 w-4" />
                      </Link>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[200px]">
                      {aiMegaMenu
                        .flatMap((col) => col.links)
                        .map((item, index) => (
                          <DropdownMenuItem key={index}>
                            <Link href={item.href} className="w-full block">
                              {item.label}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Link
                    href="/blog"
                    className="text-base xl:text-lg font-normal hover:text-[#0054aa] transition-colors duration-300"
                    onClick={() => setOpenMenu(null)}
                  >
                    Blog
                  </Link>

                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <Button
                      className="w-full bg-[#0054aa] hover:bg-[#003d7f] text-white font-normal"
                      onClick={() => setOpen(true)}
                    >
                      Contact Us
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      {children}
    </>
  );
}
