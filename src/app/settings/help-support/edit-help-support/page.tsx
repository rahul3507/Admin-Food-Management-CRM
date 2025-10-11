/** @format */
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeftIcon, Phone, MessageCircle, Globe, Mail } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    whatsappNumber: "",
    website: "",
    email: "",
  });

  const supportCards = [
    {
      id: "phoneNumber",
      title: "New Phone Number",
      label: "Phone Number",
      icon: Phone,
      placeholder: "Enter Phone number",
      type: "tel",
      value: formData.phoneNumber,
    },
    {
      id: "whatsappNumber",
      title: "WhatsApp Number",
      label: "WhatsApp Number",
      icon: MessageCircle,
      placeholder: "Enter WhatsApp number",
      type: "tel",
      value: formData.whatsappNumber,
    },
    {
      id: "website",
      title: "website Address",
      label: "Email us at",
      icon: Globe,
      placeholder: "Enter Website link",
      type: "url",
      value: formData.website,
    },
    {
      id: "email",
      title: "New Email Address",
      label: "Email us at",
      icon: Mail,
      placeholder: "Enter email address",
      type: "email",
      value: formData.email,
    },
  ];

  const handleInputChange = (id: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSave = () => {
    console.log("Saving changes...", formData);
    // Add your save logic here
  };
  return (
    <div className="min-h-screen bg-transparent pt-2 md:pt-6">
      <div className="max-w-full mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <Link
            href="/settings/help-support"
            className="flex items-center gap-0 mb-6"
          >
            <ArrowLeftIcon className="w-8 h-4 text-gray-600" />
            <h2 className="text-lg md:text-xl font-medium text-gray-900">
              Edit Help & Support
            </h2>
          </Link>
        </div>

        {/* Edit Form */}
        <div className="w-full max-w-2xl rounded-2xl border-none space-y-8">
          {supportCards.map((card) => (
            <div key={card.id} className="flex items-start gap-6">
              <div className="flex flex-col items-center gap-2 bg-white p-4 rounded-2xl w-[130px]">
                <div className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center">
                  <card.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm text-gray-600 text-center">
                  {card.label}
                </span>
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  {card.title}
                </h2>
                <div className="flex items-center gap-3">
                  <div className="flex-1 relative">
                    <card.icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      type={card.type}
                      placeholder={card.placeholder}
                      value={card.value}
                      onChange={(e) =>
                        handleInputChange(card.id, e.target.value)
                      }
                      className="pl-10 bg-gray-50 border-gray-200"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Save Button */}
          <div className="flex justify-center pt-4">
            <Button
              onClick={handleSave}
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-2.5 rounded-lg font-medium flex items-center gap-2"
            >
              Save changes
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
