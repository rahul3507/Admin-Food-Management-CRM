/** @format */

"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, PenLine } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
  const [fullName, setFullName] = useState("Sidney Paul");
  const [email, setEmail] = useState("name@gmail.com");
  return (
    <div className="min-h-screen bg-transparent pt-2 md:pt-6">
      <div className="max-w-full mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <Link href="/settings" className="flex items-center gap-0 mb-6">
            <ArrowLeftIcon className="w-8 h-4 text-gray-600" />
            <h2 className="text-lg md:text-xl font-medium text-gray-900">
              Personal Information
            </h2>
          </Link>
          <Button className="w-20 flex bg-red-500 hover:bg-red-600 text-white">
            <PenLine /> Edit
          </Button>
        </div>
        <div className=" flex flex-col lg:flex-row gap-2 md:gap-6  ">
          {/* Profile Section */}
          <div className="flex flex-col items-center  bg-red-50 border border-red-500 py-6 px-12 rounded-xl gap-2 ">
            <div className="relative">
              <Image
                src="/api/placeholder/80/80"
                alt="Profile"
                width={80}
                height={80}
                className="rounded-full object-cover bg-gray-200"
              />
            </div>
            <div className="text-center pb-6">
              <p className="text-base text-gray-500">Admin</p>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                Jhon Mancal
              </h3>
            </div>
          </div>

          <div className=" ">
            <div className="mb-6">
              <label className="block text-base font-bold text-gray-900 mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-2 text-lg text-gray-600 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="mb-8">
              <label className="block text-base font-bold text-gray-900 mb-4">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 text-lg text-gray-600 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
