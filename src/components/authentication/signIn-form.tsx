/** @format */

"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Mail, Eye, Key } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";

export function SignInForm() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md bg-[#ffffff] rounded-2xl shadow-lg p-8 lg:p-12">
        <h1 className="text-3xl font-semibold text-[#1f2937] mb-8 text-center">
          Sign In
        </h1>

        <form className="space-y-6">
          {/* Email Input */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6b7280]">
              <Mail className="w-5 h-5" />
            </div>
            <input
              type="email"
              placeholder="Enter your email ..."
              className="w-full pl-12 pr-4 py-3.5 border border-[#9ca3af] rounded-lg text-[#1f2937] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#e53935]/20 focus:border-[#e53935] transition-all"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6b7280]">
              <Key className="w-5 h-5" />
            </div>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full pl-12 pr-12 py-3.5 border border-[#9ca3af] rounded-lg text-[#1f2937] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#e53935]/20 focus:border-[#e53935] transition-all"
            />
            <button
              type="button"
              className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 text-[#6b7280] hover:text-[#1f2937] transition-colors"
            >
              <Eye className="w-5 h-5" />
            </button>
          </div>

          {/* Remember me & Forgot password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Checkbox
                id="remember"
                className="border-[#9ca3af] cursor-pointer"
              />
              <label
                htmlFor="remember"
                className="text-sm text-[#4b5563] cursor-pointer select-none"
              >
                Remember me
              </label>
            </div>
            <Link
              href="/forget-pass"
              className="text-sm text-[#4b5563] hover:text-[#e53935] transition-colors"
            >
              Forgot password?
            </Link>
          </div>

          {/* Sign In Button */}
          <Button
            type="submit"
            className="w-full bg-[#e53935] hover:bg-[#d32f2f] text-[#ffffff] py-6 rounded-lg text-base font-medium transition-colors"
          >
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
}
