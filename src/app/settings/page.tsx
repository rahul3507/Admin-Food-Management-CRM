/** @format */

"use client";

import { useState } from "react";
import Header from "@/components/common/header";
import Link from "next/link";
import Image from "next/image";
import { ChevronRightIcon } from "lucide-react";
import { ChangePassModal } from "@/components/settings/ChangePassModal";

export default function SettingsPage() {
  const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] =
    useState(false);

  const handleChangePasswordClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsChangePasswordModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-transparent pt-2 md:pt-6">
      <div className="max-w-full mx-auto space-y-6">
        {/* Header without Search */}
        <Header
          title="Settings"
          description="Keep everything organized with smart settings"
        />

        {/* Settings Content */}

        <div className=" flex flex-col lg:flex-row gap-2 md:gap-6 ">
          {/* Profile Section */}
          <div className="flex flex-col items-center  border border-gray-200 py-6 px-12 rounded-xl gap-2 ">
            <div className="relative">
              <Image
                src="/api/placeholder/80/80"
                alt="Profile"
                width={80}
                height={80}
                className="rounded-full object-cover bg-gray-200"
              />
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500">Owner</p>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                Jhon Mancal
              </h3>
            </div>
          </div>

          {/* Settings Menu */}
          <div className=" w-full  flex flex-col gap-2 ">
            <Link href="/settings/restaurant-information">
              <div className="flex items-center w-full justify-between px-4 py-2 border border-red-300 rounded-lg bg-white hover:bg-gray-50 transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-gray-700 group-hover:text-gray-900">
                    Restaurant Information
                  </span>
                </div>
                <ChevronRightIcon className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
              </div>
            </Link>

            <div
              onClick={handleChangePasswordClick}
              className="flex items-center w-full justify-between px-4 py-2 border border-red-300 rounded-lg bg-white hover:bg-gray-50 transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span className="text-gray-700 group-hover:text-gray-900">
                  Change password
                </span>
              </div>
              <ChevronRightIcon className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
            </div>
          </div>
        </div>

        {/* Change Password Modal */}
        <ChangePassModal
          open={isChangePasswordModalOpen}
          onOpenChange={setIsChangePasswordModalOpen}
        />
      </div>
    </div>
  );
}
