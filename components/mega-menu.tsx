"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { MegaMenuColumn } from "../app/data/mega-menu-item"; // Ensure this path is correct

interface MegaMenuProps {
  columns: MegaMenuColumn[];
  onLinkClick?: (link: string) => void; // Callback to close menu when a link is clicked
}

export default function MegaMenu({ columns, onLinkClick }: MegaMenuProps) {
  console.log("columns", columns);
  return (
    <div className="lg:fixed min-h-[100px] left-0 top-[110px] bg-[white] shadow-lg border border-gray-200 z-50 w-full py-8 px-12 hidden lg:block">
      <div className="flex justify-between items-center flex-wrap gap-6 w-full max-w-[1800px] mx-auto">
        {columns.flatMap((column, colIndex) =>
          column.links.map((link, linkIndex) => (
            <button
              key={`${colIndex}-${linkIndex}`}
              // href={link.href}
              className="flex items-center text-lg font-medium text-gray-900 hover:text-[#0054aa] cursor-pointer transition-colors"
              onClick={() => {
                console.log("link", link);
                onLinkClick?.(link.href);
              }}
            >
              {link.label}
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          ))
        )}
      </div>
    </div>
  );
}
