"use client";

import { useActionState, useRef } from "react";
import { loginAction, type LoginState } from "../../server-actions/auth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lock, Mail } from "lucide-react";

export default function AdminLogin() {
  const [state, formAction, isPending] = useActionState<LoginState, FormData>(
    loginAction,
    {
      message: "",
      success: false,
    }
  );

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[600px] w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 bg-[#0054aa] rounded-full flex items-center justify-center">
            <Lock className="h-6 w-6 text-white" />
          </div>
          <h2 className="mt-6 text-3xl font-medium text-nav">Admin Login</h2>
          <p className="mt-2 text-base xl:text-lg text-footer-text">
            Sign in to manage your blog posts
          </p>
        </div>

        <div className="bg-white py-8 px-6 shadow-lg rounded-lg border border-border">
          <form
            ref={formRef}
            action={formAction}
            className="space-y-6 xl:space-y-8"
          >
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium xl:text-base text-nav mb-2 xl:mb-3"
              >
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-footer-text" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="admin@mavencode.com"
                  required
                  className="pl-10 w-full border-border focus:border-[#0054aa] focus:ring-[#0054aa]"
                />
              </div>
              {state.errors?.email && (
                <p className="text-red-500 text-xs mt-1">
                  {state.errors.email.join(", ")}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium xl:text-base text-nav mb-2 xl:mb-3"
              >
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-footer-text" />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                  className="pl-10 w-full border-border focus:border-[#0054aa] focus:ring-[#0054aa]"
                />
              </div>
              {state.errors?.password && (
                <p className="text-red-500 text-xs mt-1">
                  {state.errors.password.join(", ")}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-[#0054aa] hover:bg-[#003d7f] text-white py-4 px-4 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center"
              disabled={isPending}
            >
              {isPending ? "Signing in..." : "Sign In"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            {/* Error Message */}
            {state.message && !state.success && (
              <p
                className="mt-4 text-center text-sm text-red-500"
                aria-live="polite"
              >
                {state.message}
              </p>
            )}
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs xl:text-sm text-footer-text">
              Demo credentials: admin@mavencode.com / admin123
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
