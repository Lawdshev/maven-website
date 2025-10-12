"use client";
import React, { useState } from "react";
import {
  MessageSquare,
  ArrowRight,
  X,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

function Footer() {
  const [showChatbox, setShowChatbox] = useState(false);
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I help you today?", sender: "bot" },
  ]);

  const toggleChatbox = () => {
    setShowChatbox(!showChatbox);
  };

  const handleSendMessage = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && messageInput.trim() !== "") {
      const newMessage = {
        id: messages.length + 1,
        text: messageInput.trim(),
        sender: "user",
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessageInput(""); // Clear input after sending
    }
  };

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <div>
      {/* Footer */}
      <motion.footer
        className="w-full mx-auto px-6 md:px-12 py-20 border-t border-gray-700 bg-black"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="max-w-[1780px] w-[95%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Company Logo and Description */}
            <motion.div variants={fadeUp} className="md:col-span-1">
              <Link href="/" className="flex items-center mb-6">
                <Image
                  src="/logo.png"
                  alt="MavenCode Logo"
                  width={250}
                  height={80}
                  className="w-[250px]"
                />
              </Link>
              <p className="text-white text-lg leading-[30px] mb-6">
                Transform your business with AI, cloud, and data solutions. We
                partner with organizations to build intelligent systems that
                drive growth.
              </p>
              {/* Social Media Links */}
              <div className="flex space-x-4">
                <Link
                  href="https://www.linkedin.com/company/mavencode-llc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#0054aa] transition-colors duration-300"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link
                  href="https://x.com/mavencode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#0054aa] transition-colors duration-300"
                >
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link
                  href="#"
                  className="text-white hover:text-[#0054aa] transition-colors duration-300"
                >
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link
                  href="#"
                  className="text-white hover:text-[#0054aa] transition-colors duration-300"
                >
                  <Youtube className="h-6 w-6" />
                </Link>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div variants={fadeUp}>
              <h3 className="text-xl font-normal mb-6 text-white">Services</h3>
              <ul className="space-y-3">
                {[
                  "AI + Data Solutions",
                  "Cloud Engineering",
                  "Data Infrastructure",
                  "Security & Access Solutions",
                ].map((service, i) => (
                  <li
                    key={i}
                    className="text-gray-300 hover:text-white cursor-pointer transition-colors duration-300"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div variants={fadeUp}>
              <h3 className="text-xl font-normal mb-6 text-white">Company</h3>
              <ul className="space-y-3">
                {["About Us", "Training", "Careers", "Contact Us"].map(
                  (item, i) => (
                    <li
                      key={i}
                      className="text-gray-300 hover:text-white cursor-pointer transition-colors duration-300"
                    >
                      {item}
                    </li>
                  )
                )}
              </ul>
            </motion.div>

            {/* Get In Touch */}
            <motion.div variants={fadeUp}>
              <h3 className="text-xl font-normal mb-6 text-white">
                Get In Touch
              </h3>
              <div className="space-y-4">
                <p className="text-gray-300">
                  Ready to transform your business with AI, cloud, and data
                  solutions?
                </p>
                <Button
                  className="bg-[#0054aa] hover:bg-[#003d7f] text-white text-lg rounded-none px-8 py-4 transition-colors duration-300"
                  onClick={() => {
                    // You can add a contact modal or redirect to contact page
                    window.location.href = "/contact-us";
                  }}
                >
                  Book Discovery Call
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Bottom Border */}
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 space-y-4 md:space-y-0">
              <div className="flex space-x-6">
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </Link>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Cookie Preferences
                </Link>
              </div>
              <div className="text-gray-300">
                © 2025 MavenCode. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </motion.footer>

      {/* Floating AI Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          className="w-16 h-16 rounded-full bg-[#0054aa] -600 hover:bg-[#0054aa] -700 text-white flex items-center justify-center shadow-lg"
          onClick={toggleChatbox}
        >
          <span className="text-2xl">AI</span>
          <ArrowRight className="ml-1 h-5 w-5" />
        </Button>
      </div>

      {/* Chatbox Popover */}
      {showChatbox && (
        <div className="fixed bottom-28 right-8 z-50 w-80 h-96 bg-white rounded-lg shadow-xl flex flex-col border border-gray-200">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h3 className="text-lg font-normal flex items-center">
              <MessageSquare className="h-5 w-5 mr-2 text-[#0054aa] -600" /> AI
              Assistant
            </h3>
            <Button variant="ghost" size="icon" onClick={toggleChatbox}>
              <X className="h-5 w-5 text-white -600" />
              <span className="sr-only">Close chat</span>
            </Button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto text-sm text-white -700">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-2 ${
                  message.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                <span
                  className={`inline-block p-2 rounded-lg ${
                    message.sender === "user"
                      ? "bg-[#0054aa] -500 text-white"
                      : "bg-gray-100 text-white -800"
                  }`}
                >
                  {message.text}
                </span>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-200">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0054aa] -500 focus:border-[#0054aa] -500"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyDown={handleSendMessage}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Footer;
