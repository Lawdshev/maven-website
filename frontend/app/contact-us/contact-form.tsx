"use client"

import { useActionState, useRef } from "react"
import { submitContactForm, type ContactFormState } from "../server-actions/contact"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ContactForm() {
  // useActionState hook to manage form state with a Server Action
  const [state, formAction, isPending] = useActionState<ContactFormState, FormData>(submitContactForm, {
    message: "",
    success: false,
  })

  const formRef = useRef<HTMLFormElement>(null)

  // Reset form on successful submission
  if (state.success && !isPending) {
    formRef.current?.reset()
  }

  return (

      <div className="px-4 md:px-6 max-w-[800px]  w-full mx-auto bg-white py-8 md:py-12 lg:py-16 !overflow-scroll">
        <div className="text-center mb-4">
          <h1 className="text-xl lg:text-3xl font-[medium] tracking-tight text-gray-900 dark:text-gray-50">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Have questions or need support? Send us a message!
          </p>
        </div>

        <form
          ref={formRef}
          action={formAction}
          className="space-y-8 p-6 flex flex-col"
        >
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm xl:text-base 2xl:text-[18ps] font-medium text-[#000] dark:text-gray-300 mb-2">
              Name
            </label>
            <Input id="name" name="name" type="text" placeholder="Your Name" required  className="w-full h-14 px-4" />
            {state.errors?.name && <p className="text-red-500 text-xs mt-1">{state.errors.name.join(", ")}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm xl:text-base 2xl:text-[18ps] font-medium text-[#000] dark:text-gray-300 mb-2">
              Email
            </label>
            <Input id="email" name="email" type="email" placeholder="your@example.com" required  className="w-full h-14 px-4" />
            {state.errors?.email && <p className="text-red-500 text-xs mt-1">{state.errors.email.join(", ")}</p>}
          </div>

          {/* Subject Field */}
          <div>
            <label htmlFor="subject" className="block text-sm xl:text-base 2xl:text-[18ps] font-medium text-[#000] dark:text-gray-300 mb-2">
              Subject
            </label>
            <Input
              id="subject"
              name="subject"
              type="text"
              placeholder="Subject of your message"
              required
              className="w-full h-14 px-4"
            />
            {state.errors?.subject && <p className="text-red-500 text-xs mt-1">{state.errors.subject.join(", ")}</p>}
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm xl:text-base 2xl:text-[18ps] font-medium text-[#000] dark:text-gray-300 mb-2">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your message here..."
              rows={9}
              required
              className="w-full min-h-[250px] px-4"
            />
            {state.errors?.message && <p className="text-red-500 text-xs mt-1">{state.errors.message.join(", ")}</p>}
          </div>

          {/* Submission Button */}
          <Button type="submit" className="w-full bg-[#0054aa] rounded-none hover:bg-[#0054aa] text-white py-6 w-[100%] max-w-[300px] mx-auto" disabled={isPending}>
            {isPending ? "Sending..." : "Send Message"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          {/* Submission Feedback Message */}
          {state.message && (
            <p
              className={`mt-4 text-center text-sm ${state.success ? "text-green-600" : "text-red-500"}`}
              aria-live="polite" // Announce changes to screen readers
            >
              {state.message}
            </p>
          )}
        </form>
      </div>
  )
}
