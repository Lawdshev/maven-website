"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { MegaMenuColumn } from "../app/data/mega-menu-item"; // Ensure this path is correct

interface MegaMenuProps {
  columns: MegaMenuColumn[];
  onLinkClick?: (link: string) => void; // Callback to close menu when a link is clicked
}

export default function MegaMenu({ columns, onLinkClick }: MegaMenuProps) {
  return (
    <div className="absolute left-0 top-full mt-2 bg-white shadow-lg border border-gray-200 rounded-lg z-50 min-w-[260px] py-4 px-2">
      <div className="flex flex-col gap-2">
        {columns.flatMap((column, colIndex) =>
          column.links.map((link, linkIndex) => (
            <Link
              key={`${colIndex}-${linkIndex}`}
              href={link.href}
              className="flex items-center justify-between text-base font-normal text-black -800 hover:text-[#0054aa] hover:bg-gray-50 px-3 py-2 rounded-md transition-colors"
              onClick={() => onLinkClick?.(link.href)}
            >
              {link.label}
              <ArrowRight className="ml-2 h-4 w-4 shrink-0" />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
