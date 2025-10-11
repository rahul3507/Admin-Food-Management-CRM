/** @format */

"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function ResetPassForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Password reset submitted:", formData);
    // Navigate to verify OTP page after successful password reset
    router.push("/sign-in");
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md bg-[#ffffff] rounded-2xl shadow-lg p-8 lg:p-12">
        <h1 className="text-3xl font-semibold text-[#1f2937] mb-8 text-center flex items-center justify-center">
          <Link href="/verify-otp">
            <ArrowLeft className="h-8 w-12 pt-1" />
          </Link>
          Reset Password
        </h1>

        {/* Password Requirements */}
        <div className="text-center mb-6">
          <p className="text-sm text-[#6b7280]">
            Your password must be 8-10 character long.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* New Password Input */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6b7280]">
              <Eye className="w-5 h-5" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              className="w-full pl-12 pr-12 py-3.5 border border-[#9ca3af] rounded-lg text-[#1f2937] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#e53935]/20 focus:border-[#e53935] transition-all"
              required
              minLength={8}
              maxLength={10}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6b7280] hover:text-[#1f2937] transition-colors"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Confirm Password Input */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6b7280]">
              <Eye className="w-5 h-5" />
            </div>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Re-type Password"
              value={formData.confirmPassword}
              onChange={(e) =>
                handleInputChange("confirmPassword", e.target.value)
              }
              className="w-full pl-12 pr-12 py-3.5 border border-[#9ca3af] rounded-lg text-[#1f2937] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#e53935]/20 focus:border-[#e53935] transition-all"
              required
              minLength={8}
              maxLength={10}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6b7280] hover:text-[#1f2937] transition-colors"
            >
              {showConfirmPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Confirm Button */}
          <Button
            type="submit"
            className="w-full bg-[#e53935] hover:bg-[#d32f2f] text-[#ffffff] py-6 rounded-lg text-base font-medium transition-colors"
          >
            Confirm
          </Button>
        </form>
      </div>
    </div>
  );
}
