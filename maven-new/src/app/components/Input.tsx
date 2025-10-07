"use client";

import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export function Input({ label, error, className = "", ...props }: InputProps) {
  return (
    <div>
      <label htmlFor={props.id} className="block text-[21px] font-medium text-contact-input dark:text-contact-input-dark mb-2">
        {label}
      </label>
      <input
        {...props}
        className={`w-full px-3 py-2 bg-background dark:bg-background-dark
             border border-contact-border dark:border-contact-border-dark rounded-md text-contact-input dark:text-contact-input-dark 
             placeholder-contact-placeholder dark:placeholder-contact-placeholder-dark ${className}`}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500 dark:text-red-400">{error}</p>
      )}
    </div>
  );
}

export function Textarea({ label, error, className = "", ...props }: TextareaProps) {
  return (
    <div>
      <label htmlFor={props.id} className="block text-[21px] font-medium text-contact-input dark:text-contact-input-dark mb-2">
        {label}
      </label>
      <textarea
        {...props}
        className={`w-full px-3 py-2 bg-background dark:bg-background-dark border border-contact-border dark:border-contact-border-dark rounded-md
             text-contact-input dark:text-contact-input-dark placeholder-contact-placeholder dark:placeholder-contact-placeholder-dark   resize-none ${className}`}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500 dark:text-red-400">{error}</p>
      )}
    </div>
  );
}
