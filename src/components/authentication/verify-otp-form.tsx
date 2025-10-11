/** @format */

"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function VerifyOtpForm() {
  const router = useRouter();
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    // Handle backspace
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const otpString = otp.join("");
    console.log("OTP submitted:", otpString);
    // Navigate to reset password page after successful OTP verification
    router.push("/reset-pass");
  };

  useEffect(() => {
    // Focus first input on mount
    inputRefs.current[0]?.focus();
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md bg-[#ffffff] rounded-2xl shadow-lg p-8 lg:p-12">
        <h1 className="text-3xl font-semibold text-[#1f2937] mb-8 text-center flex items-center justify-center">
          <Link href="/forget-pass">
            <ArrowLeft className="h-8 w-12 pt-1" />
          </Link>
          Verify Email
        </h1>

        {/* Helper Text */}
        <div className="text-center mb-8">
          <p className="text-sm text-[#6b7280]">
            Please enter the OTP we have sent you in your email.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* OTP Input Boxes */}
          <div className="flex justify-center gap-3 mb-8">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-lg font-semibold border border-[#9ca3af] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e53935]/20 focus:border-[#e53935] text-[#1f2937] transition-all"
              />
            ))}
          </div>

          {/* Verify Button */}
          <Button
            type="submit"
            className="w-full bg-[#e53935] hover:bg-[#d32f2f] text-[#ffffff] py-6 rounded-lg text-base font-medium transition-colors"
          >
            Verify
          </Button>
        </form>
      </div>
    </div>
  );
}
