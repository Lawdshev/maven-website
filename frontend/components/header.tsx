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
    console.log("link", link);
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
        className="border-b border-gray-200 py-4 px-6 md:px-12 lg:py-8 "
      >
        <div className="flex items-center justify-between relative z-50 max-w-[1710px] w-[95%] mx-auto">
          <div className="flex items-center space-x-8">
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
            <nav className="hidden lg:flex space-x-6  2xl:space-x-12 font-medium">
              <div className="relative">
                <Link
                  href="/about-us"
                  className="flex items-center hover:text-[#0054aa]  text-base xl:text-lg cursor-pointer font-normal"
                  onClick={() => setOpenMenu(null)}
                >
                  About us{" "}
                </Link>
              </div>
              <div className="relative">
                <Link
                  href="#"
                  className="flex items-center hover:text-[#0054aa]  text-base xl:text-lg cursor-pointer font-normal"
                  onClick={() => handleMenuToggle("ai")}
                >
                  Services{" "}
                  {openMenu === "ai" ? (
                    <ChevronUp className="ml-1 h-4 w-4" />
                  ) : (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </Link>
                {openMenu === "ai" && (
                  <MegaMenu columns={aiMegaMenu} onLinkClick={closeMegaMenu} />
                )}
              </div>
              <div className="relative">
                <Link
                  href="#"
                  className="flex items-center hover:text-[#0054aa]  text-base xl:text-lg cursor-pointer font-normal"
                  onClick={() => handleMenuToggle("hybrid-cloud")}
                >
                  Industries{" "}
                  {openMenu === "hybrid-cloud" ? (
                    <ChevronUp className="ml-1 h-4 w-4" />
                  ) : (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </Link>
                {openMenu === "hybrid-cloud" && (
                  <MegaMenu
                    columns={hybridCloudMegaMenu}
                    onLinkClick={closeMegaMenu}
                  />
                )}
              </div>

              {/* Products Mega Menu */}
              <div className="relative">
                <Link
                  href="/solutions"
                  className="flex items-center hover:text-[#0054aa]  text-base xl:text-lg cursor-pointer font-normal"
                  onClick={() => setOpenMenu(null)}
                >
                  Solutions{" "}
                </Link>
              </div>

              <Link
                href="/consulting"
                className="font-normal flex items-center hover:text-[#0054aa]  text-base xl:text-lg"
                onClick={() => setOpenMenu(null)}
              >
                Consulting
              </Link>

              <Link
                href="/blog"
                className="font-normal flex items-center hover:text-[#0054aa]  text-base xl:text-lg"
                onClick={() => setOpenMenu(null)}
              >
                Blog
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4 flex-grow justify-end">
            <>
              <Button
                className="font-normal md:min-w-[200px] w-fit rounded-none bg-[#0054aa] hover:bg-[#003d7f] cursor-pointer text-xl  text-white px-6 py-6 flex items-center justify-center"
                onClick={() => setOpen(true)}
              >
                Contact us
              </Button>

              <Modal open={open} onCancel={() => setOpen(false)} footer={null} className="contact-modal-wrapper" style={{ top: 20 }} >
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
                  {showSearchInput ? (
                    <div className="flex items-center w-full mb-4">
                      <Search className="h-5 w-5 text-[black] -600 mr-2" />
                      <input
                        type="text"
                        placeholder="Search mavencode.com"
                        className="flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0054aa] -500 focus:border-[#0054aa] -500"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleSearchInput}
                        className="ml-2"
                      >
                        <X className="h-5 w-5 text-[black] -600" />
                        <span className="sr-only">Cancel search</span>
                      </Button>
                    </div>
                  ) : (
                    <Link
                      href="#"
                      className=" text-base xl:text-lg font-medium hover:text-[#0054aa] font-normal"
                      onClick={toggleSearchInput}
                    >
                      Search
                    </Link>
                  )}
                  {/* Mobile Dropdown Menus (keeping simple for mobile) */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Link
                        href="#"
                        className="flex items-center  text-base xl:text-lg font-medium hover:text-[#0054aa] font-normal cursor-pointer"
                      >
                        AI <ChevronDown className="ml-1 h-4 w-4" />
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
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Link
                        href="#"
                        className="flex items-center  text-base xl:text-lg font-medium hover:text-[#0054aa] font-normal cursor-pointer"
                      >
                        Hybrid Cloud <ChevronDown className="ml-1 h-4 w-4" />
                      </Link>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[200px]">
                      {hybridCloudMegaMenu
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
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Link
                        href="#"
                        className="flex items-center  text-base xl:text-lg font-medium hover:text-[#0054aa] font-normal cursor-pointer"
                      >
                        Products <ChevronDown className="ml-1 h-4 w-4" />
                      </Link>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[200px]">
                      {productsMegaMenu
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
                    href="#"
                    className=" text-base xl:text-lg font-medium hover:text-[#0054aa] font-normal"
                  >
                    Consulting
                  </Link>
                  <Link
                    href="/blog"
                    className=" text-base xl:text-lg font-medium hover:text-[#0054aa] font-normal"
                  >
                    Think
                  </Link>
                  <div className="border-t border-gray-200 pt-4 mt-4 flex flex-col gap-2">
                    <Link
                      href="#"
                      className="text-sm text-[black] -600 hover:text-[#0054aa] font-normal"
                    >
                      Chat
                    </Link>
                    <Link
                      href="#"
                      className="text-sm text-[black] -600 hover:text-[#0054aa] font-normal"
                    >
                      Language
                    </Link>
                    <Link
                      href="#"
                      className="text-sm text-[black] -600 hover:text-[#0054aa] font-normal"
                    >
                      Account
                    </Link>
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
