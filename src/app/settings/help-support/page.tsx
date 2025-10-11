/** @format */

import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, PenLine } from "lucide-react";
import { Phone, MessageCircle, Globe, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";
import HelpSupportCard from "@/components/settings/helpSupportCard";

const Page = () => {
  const supportData = [
    {
      title: "Phone Number",
      value: "+510-691-7845",
      icon: Phone,
      iconBgColor: "bg-red-500",
    },
    {
      title: "WhatsApp Number",
      value: "+510-691-7845",
      icon: MessageCircle,
      iconBgColor: "bg-red-500",
    },
    {
      title: "Website",
      value: "shopivia.com",
      icon: Globe,
      iconBgColor: "bg-red-500",
    },
    {
      title: "Email us at",
      value: "support@domin.com",
      icon: Mail,
      iconBgColor: "bg-red-500",
    },
  ];

  return (
    <div className="min-h-screen bg-transparent pt-2 md:pt-6">
      <div className="max-w-full mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <Link href="/settings" className="flex items-center gap-0 mb-6">
            <ArrowLeftIcon className="w-8 h-4 text-gray-600" />
            <h2 className="text-lg md:text-xl font-medium text-gray-900">
              Help & Support
            </h2>
          </Link>
          <Link href="/settings/help-support/edit-help-support">
            <Button className="w-20 flex bg-red-500 hover:bg-red-600 text-white">
              <PenLine /> Edit
            </Button>
          </Link>
        </div>

        {/* Support Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {supportData.map((item, index) => (
            <HelpSupportCard
              key={index}
              title={item.title}
              value={item.value}
              icon={item.icon}
              iconBgColor={item.iconBgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
