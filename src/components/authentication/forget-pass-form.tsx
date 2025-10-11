/** @format */

"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";

export function ForgetPassForm() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md bg-[#ffffff] rounded-2xl shadow-lg p-8 lg:p-12">
        <h1 className="text-3xl font-semibold text-[#1f2937] mb-8 text-center flex items-center justify-center ">
          <Link href="/signIn">
            <ArrowLeft className="h-8 w-12 pt-1" />
          </Link>
          Forget Password
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

          {/* Sign In Button */}
          <Button
            type="submit"
            className="w-full bg-[#e53935] hover:bg-[#d32f2f] text-[#ffffff] py-6 rounded-lg text-base font-medium transition-colors"
          >
            Send OTP
          </Button>
        </form>
      </div>
    </div>
  );
}
