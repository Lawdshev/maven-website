"use client";

import { useState, useEffect } from "react";
import { Input, Textarea } from "./Input";

interface ContactUsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactUsModal({
  isOpen,
  onClose,
}: ContactUsModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-background dark:bg-[#2A2C38] rounded-lg py-10 shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className=" text-center ">
          <h2 className="text-4xl font-bold text-insight-heading dark:text-insight-heading-dark">
            Contact Us
          </h2>
          <p className="text-contact-text dark:text-contact-text-dark text-xl font-medium  mt-3 mb-2">
            Have question or support? Send your message
          </p>
        </div>

        {/* Modal Body */}
        <div className="px-24 py-4 ">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              id="name"
              name="name"
              label="Name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your name"
              required
            />

            <Input
              type="email"
              id="email"
              name="email"
              label="Email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Example@gmail.com"
              required
            />

            <Input
              type="text"
              id="subject"
              name="subject"
              label="Subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Subject of your message"
              required
            />

            <Textarea
              id="message"
              name="message"
              label="Message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message Here..."
              rows={4}
              required
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-button-bg dark:bg-button-bg-dark  text-white font-medium py-3 px-4 rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
