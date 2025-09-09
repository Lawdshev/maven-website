"use client"

import { useActionState, useRef } from "react"
import { submitContactForm, type ContactFormState } from "../server-actions/contact"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState<ContactFormState, FormData>(
    submitContactForm,
    {
      message: "",
      success: false,
    }
  )

  const formRef = useRef<HTMLFormElement>(null)

  if (state.success && !isPending) {
    formRef.current?.reset()
  }

  return (
    <div className=" w-full mx-auto bg-white  overflow-hidden grid grid-cols-1 md:grid-cols-2">
      {/* Image / Illustration side */}
      <div className="hidden md:block relative">
        <Image
          src="/contact-us-email.png" // 👈 replace with your own image
          alt="Contact illustration"
          fill
          className="object-cover"
        />
        {/* Overlay for readability */}
        {/* <div className="absolute inset-0 bg-[#0054aa]/90 mix-blend-multiply" />
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <h2 className="text-white text-3xl font-semibold leading-tight text-center">
            Let’s Build Something Together 🚀
          </h2>
        </div> */}
      </div>

      {/* Form side */}
      <div className="px-6 md:px-10 py-10 overflow-y-auto">
        <div className="text-center mb-6">
          <h1 className="text-xl lg:text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-50">
            Contact Us
          </h1>
          <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
            Have questions or need support? Send us a message!
          </p>
        </div>

        <form ref={formRef} action={formAction} className="space-y-6 flex flex-col">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-800 mb-2"
            >
              Name
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="w-full h-14 px-4 rounded-md border-gray-300 focus:ring-2 focus:ring-[#0054aa]"
            />
            {state.errors?.name && (
              <p className="text-red-500 text-xs mt-1">
                {state.errors.name.join(", ")}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-800 mb-2"
            >
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your@example.com"
              required
              className="w-full h-14 px-4 rounded-md border-gray-300 focus:ring-2 focus:ring-[#0054aa]"
            />
            {state.errors?.email && (
              <p className="text-red-500 text-xs mt-1">
                {state.errors.email.join(", ")}
              </p>
            )}
          </div>

          {/* Subject Field */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-800 mb-2"
            >
              Subject
            </label>
            <Input
              id="subject"
              name="subject"
              type="text"
              placeholder="Subject of your message"
              required
              className="w-full h-14 px-4 rounded-md border-gray-300 focus:ring-2 focus:ring-[#0054aa]"
            />
            {state.errors?.subject && (
              <p className="text-red-500 text-xs mt-1">
                {state.errors.subject.join(", ")}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-800 mb-2"
            >
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your message here..."
              rows={7}
              required
              className="w-full px-4 py-3 rounded-md border-gray-300 focus:ring-2 focus:ring-[#0054aa] min-h-[180px]"
            />
            {state.errors?.message && (
              <p className="text-red-500 text-xs mt-1">
                {state.errors.message.join(", ")}
              </p>
            )}
          </div>

          {/* Submission Button */}
          <Button
            type="submit"
            className="w-full md:w-[300px] mx-auto bg-[#0054aa] hover:bg-[#003d7f] text-white font-medium rounded-md py-6 flex items-center justify-center gap-2"
            disabled={isPending}
          >
            {isPending ? "Sending..." : "Send Message"}
            <ArrowRight className="h-5 w-5" />
          </Button>

          {/* Feedback Message */}
          {state.message && (
            <p
              className={`mt-4 text-center text-sm ${
                state.success ? "text-green-600" : "text-red-500"
              }`}
              aria-live="polite"
            >
              {state.message}
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
