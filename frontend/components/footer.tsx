"use client"
import React, { useState } from "react";
import {
  MessageSquare,
  ArrowRight,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link"
import { Button } from "@/components/ui/button"

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

  return (
    <div>
      {/* Footer */}
      <footer className="bg-black text-black -300 py-12 px-6 md:px-12 ">
        <div className="w-[95%] mx-auto max-w-[1780px]">

        <div className=" grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center w-[200px]">
            <Image src="/logo.png" alt="Logo" width={0} height={0} className="w-full"/>
          </Link>
          </div>
          <div className="md:col-span-1">
            <h4 className="font-normal text-white mb-4">Discover</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:underline">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Consulting services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Case studies
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Financing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Research
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h4 className="font-normal text-white mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:underline">
                  Business partners
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Subscription center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Support
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  TechXchange community
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h4 className="font-normal text-white mb-4">Follow</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:underline">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  X
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  YouTube
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Podcasts
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h4 className="font-normal text-white mb-4">About</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:underline">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Investor relations
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Newsroom
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Security, privacy and trust
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-black -400 space-y-4 md:space-y-0">
          <div className="flex space-x-4">
            <Link href="#" className="hover:underline">
              Contact Mavencode
            </Link>
            <Link href="#" className="hover:underline">
              Privacy
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="hover:underline">
              Terms of use
            </Link>
            <Link href="#" className="hover:underline">
              Accessibility
            </Link>
            <Link href="#" className="hover:underline">
              Cookie Preferences
            </Link>
          </div>
        </div>
        </div>
      </footer>

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
              <X className="h-5 w-5 text-black -600" />
              <span className="sr-only">Close chat</span>
            </Button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto text-sm text-black -700">
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
                      : "bg-gray-100 text-black -800"
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
