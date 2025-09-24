/** @format */

"use client";

import type React from "react";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";

export function RegistrationForm() {
  const [formData, setFormData] = useState({
    restaurantName: "",
    ownerName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <Card className="w-full shadow-lg border-0 bg-white">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl font-semibold text-gray-800">
          Create Account
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <form onSubmit={handleSubmit} className="space-y-2 md:space-y-4">
          {/* Restaurant Name and Owner Name Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label
                htmlFor="restaurantName"
                className="text-sm font-medium text-gray-800"
              >
                Restaurant Name
              </Label>
              <Input
                id="restaurantName"
                placeholder="Your Restaurant Name"
                value={formData.restaurantName}
                onChange={(e) =>
                  handleInputChange("restaurantName", e.target.value)
                }
                className="h-12 border-gray-200 focus:border-gray-300 focus:ring-0 text-gray-600"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="ownerName"
                className="text-sm font-medium text-gray-800"
              >
                Owner Name
              </Label>
              <Input
                id="ownerName"
                placeholder="John Doe"
                value={formData.ownerName}
                onChange={(e) => handleInputChange("ownerName", e.target.value)}
                className="h-12 border-gray-200 focus:border-gray-300 focus:ring-0 text-gray-600"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-sm font-medium text-gray-800"
            >
              Email
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                id="email"
                type="email"
                placeholder="Enter your email ..."
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="h-12 pl-10 border-gray-200 focus:border-gray-300 focus:ring-0 text-gray-600"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <Label
              htmlFor="phone"
              className="text-sm font-medium text-gray-800"
            >
              Phone Number
            </Label>
            <Input
              id="phone"
              placeholder="+1 (555) 123-4567"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="h-12 border-gray-200 focus:border-gray-300 focus:ring-0 text-gray-600"
            />
          </div>

          {/* Restaurant Address */}
          <div className="space-y-2">
            <Label
              htmlFor="address"
              className="text-sm font-medium text-gray-800"
            >
              Restaurant Address
            </Label>
            <Input
              id="address"
              placeholder="Enter restaurant address"
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              className="h-12 border-gray-200 focus:border-gray-300 focus:ring-0 text-gray-600"
            />
          </div>

          {/* Password and Confirm Password Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="text-sm font-medium text-gray-800"
              >
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Create password"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                className="h-12 border-gray-200 focus:border-gray-300 focus:ring-0 text-gray-600"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="confirmPassword"
                className="text-sm font-medium text-gray-800"
              >
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  handleInputChange("confirmPassword", e.target.value)
                }
                className="h-12 border-gray-200 focus:border-gray-300 focus:ring-0 text-gray-600"
              />
            </div>
          </div>

          {/* Create Account Button */}
          <Button
            type="submit"
            className="w-full h-12 text-white font-medium text-base rounded-lg hover:opacity-90 transition-opacity bg-red-600 hover:bg-red-700 "
          >
            Create Account
          </Button>

          {/* Sign In Link */}
          <div className="text-center pt-2">
            <span className="text-gray-600">Already have an account? </span>
            <Link
              href={"/signIn"}
              type="button"
              className="cursor-pointer font-medium hover:underline text-red-600"
            >
              Sign In
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
