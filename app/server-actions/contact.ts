"use server"

import { z } from "zod" // For schema validation

// Define the schema for your form data using Zod
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export type ContactFormState = {
  message: string
  success: boolean
  errors?: {
    name?: string[]
    email?: string[]
    subject?: string[]
    message?: string[]
  }
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  // Simulate a network delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  }

  // Validate the form data
  const validatedFields = contactFormSchema.safeParse(data)

  // If validation fails, return errors
  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your inputs.",
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // In a real application, you would send an email here (e.g., using Nodemailer, SendGrid)
  // or save to a database.
  console.log("Contact form submitted:", validatedFields.data)

  // Optionally revalidate a path if the submission affects cached data
  // revalidatePath('/contact-us');

  return {
    message: "Your message has been sent successfully!",
    success: true,
  }
}
