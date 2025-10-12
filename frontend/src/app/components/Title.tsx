"use client";

import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
  subtitle?: string;
  className?: string;
  subtitleClassName?: string;
}

export default function Title({ 
  children, 
  subtitle, 
  className = "", 
  subtitleClassName = "" 
}: TitleProps) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-4xl font-bold text-insight-heading dark:text-insight-heading-dark">
        {children}
      </h2>
      {subtitle && (
        <p className={`text-contact-text dark:text-contact-text-dark text-xl font-medium mt-3 mb-2 ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
