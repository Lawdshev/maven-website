"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FileText, LogOut, Menu, X, Plus, List, Mail, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const navItems = [
  {
    title: "Blogs",
    href: "/admin/blogs",
    icon: FileText,
    children: [
      { title: "All Blogs", href: "/admin/blogs" },
      { title: "Create Blog", href: "/admin/blogs/create" },
    ],
  },
  {
    title: "Categories",
    href: "/admin/categories",
    icon: Tag,
    children: [
      { title: "All Categories", href: "/admin/categories" },
      { title: "Create Category", href: "/admin/categories/create" },
    ],
  },
  // {
  //   title: "Contacts",
  //   href: "/admin/contacts",
  //   icon: Mail,
  //   children: [
  //     { title: "All Contacts", href: "/admin/contacts" },
  //     { title: "Contact Categories", href: "/admin/contacts/categories" },
  //   ],
  // },
];

export default function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    router.push("/admin");
  };

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-[#0054aa] text-white rounded-lg hover:bg-[#003d7f] transition-colors"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-xl border-r border-border transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-border bg-white">
            <div className="w-full max-w-[180px] mx-auto">
              <Image
                src="/image/logo.png"
                alt="Maven Code Logo"
                width={180}
                height={60}
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="mt-3 text-center">
              <h2 className="text-sm font-medium text-nav">Admin Dashboard</h2>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className={`
                    flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
                    ${
                      isActive(item.href)
                        ? "bg-[#0054aa] text-white shadow-md"
                        : "text-nav hover:bg-[#f8fafc] hover:text-[#0054aa]"
                    }
                  `}
                >
                  <item.icon size={20} />
                  <span>{item.title}</span>
                </Link>

                {/* Submenu */}
                {item.children && isActive(item.href) && (
                  <div className="ml-8 mt-2 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`
                          flex items-center space-x-2 px-4 py-2 rounded-lg text-sm transition-all duration-200
                          ${
                            isActive(child.href)
                              ? "bg-[#e6f2ff] text-[#0054aa] font-medium border-l-2 border-[#0054aa]"
                              : "text-footer-text hover:bg-[#f8fafc] hover:text-[#0054aa]"
                          }
                        `}
                      >
                        {child.href.includes("create") ? (
                          <Plus size={16} />
                        ) : (
                          <List size={16} />
                        )}
                        <span>{child.title}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-border bg-[#fafbfc]">
            <Button
              onClick={handleLogout}
              variant="outline"
              className="w-full justify-start text-footer-text hover:text-red-600 hover:border-red-200 hover:bg-red-50 transition-all duration-200"
            >
              <LogOut size={20} className="mr-3" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
